import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = "out";
const charsetMetaPattern = /<meta charSet="utf-8"\s*\/?>/i;
const inlineScriptPattern = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
const inlineStylePattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const styleAttributePattern = /<[^>]+\sstyle=["'][^>]*>/i;
const existingCspPattern = /http-equiv=["']Content-Security-Policy["']/i;

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = join(directory, entry.name);
      if (entry.isDirectory()) return listHtmlFiles(entryPath);
      return entry.name.endsWith(".html") ? [entryPath] : [];
    }),
  );
  return nested.flat();
}

function hashSources(html, pattern) {
  const hashes = new Set();
  for (const match of html.matchAll(pattern)) {
    const content = match[1] ?? "";
    if (content.length === 0) continue;
    const digest = createHash("sha256").update(content, "utf8").digest("base64");
    hashes.add(`'sha256-${digest}'`);
  }
  return [...hashes];
}

function buildPolicy(scriptHashes, styleHashes) {
  return [
    "default-src 'self'",
    ["script-src 'self'", ...scriptHashes].join(" "),
    ["style-src 'self'", ...styleHashes].join(" "),
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

async function injectPolicy(filePath) {
  const html = await readFile(filePath, "utf8");

  if (existingCspPattern.test(html)) {
    throw new Error(`${filePath} already contains a Content-Security-Policy meta tag`);
  }
  if (styleAttributePattern.test(html)) {
    throw new Error(`${filePath} contains inline style attributes, which a hash-based CSP blocks`);
  }
  if (!charsetMetaPattern.test(html)) {
    throw new Error(`${filePath} has no charset meta tag to anchor the CSP`);
  }

  const policy = buildPolicy(
    hashSources(html, inlineScriptPattern),
    hashSources(html, inlineStylePattern),
  );
  const cspMeta = `<meta http-equiv="Content-Security-Policy" content="${policy}"/>`;
  const updatedHtml = html.replace(charsetMetaPattern, (charsetMeta) => `${charsetMeta}${cspMeta}`);

  await writeFile(filePath, updatedHtml, "utf8");
  return filePath;
}

const htmlFiles = await listHtmlFiles(outputDirectory);

if (htmlFiles.length === 0) {
  throw new Error(`No HTML files found in ${outputDirectory}/`);
}

const processedFiles = await Promise.all(htmlFiles.map(injectPolicy));
console.log(`CSP injected into ${processedFiles.length} HTML files`);
