import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Ministries } from "@/components/Ministries";
import { OfficialPortal } from "@/components/OfficialPortal";
import { ServiceSchedule } from "@/components/ServiceSchedule";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <ServiceSchedule />
        <About />
        <Ministries />
        <Location />
        <OfficialPortal />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
