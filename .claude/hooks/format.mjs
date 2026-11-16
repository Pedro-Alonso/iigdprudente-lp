// PostToolUse hook: formats files edited by Claude with the project's Prettier.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { extname } from "node:path";

const formattable = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".json",
  ".css",
  ".md",
  ".yml",
  ".yaml",
]);

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let filePath;
try {
  filePath = JSON.parse(raw)?.tool_input?.file_path;
} catch {
  process.exit(0);
}

if (!filePath || !formattable.has(extname(filePath)) || !existsSync(filePath)) process.exit(0);
if (/[\\/](node_modules|\.next|out)[\\/]/.test(filePath)) process.exit(0);

spawnSync("npx", ["--no-install", "prettier", "--write", "--log-level", "silent", filePath], {
  stdio: "ignore",
  shell: process.platform === "win32",
});
