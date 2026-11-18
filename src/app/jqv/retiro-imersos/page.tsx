import { DepthBackdrop } from "@/components/retiro/DepthBackdrop";
import { DepthMeter } from "@/components/retiro/DepthMeter";
import { DetailsSection } from "@/components/retiro/DetailsSection";
import { PostEventRedirect } from "@/components/retiro/PostEventRedirect";
import { RegistrationBar } from "@/components/retiro/RegistrationBar";
import { RegistrationSection } from "@/components/retiro/RegistrationSection";
import { RetreatHero } from "@/components/retiro/RetreatHero";
import { VerseSection } from "@/components/retiro/VerseSection";
import { WhySection } from "@/components/retiro/WhySection";
import { site } from "@/content/site";

export default function RetreatPage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ice focus:px-4 focus:py-3 focus:text-abyss"
      >
        {site.skipLink}
      </a>
      <DepthBackdrop />
      <DepthMeter />
      <main id="conteudo">
        <RetreatHero />
        <DetailsSection />
        <WhySection />
        <VerseSection />
        <RegistrationSection />
      </main>
      <RegistrationBar />
      <PostEventRedirect />
    </>
  );
}
