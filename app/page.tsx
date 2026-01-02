import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { TargetGroup } from "@/components/target-group";
import { HowItWorks } from "@/components/how-it-works";
import { Security } from "@/components/security";
import { MoreFeatures } from "@/components/more-features";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <TargetGroup />
      <HowItWorks />
      <Security />
      <MoreFeatures />
      <CTA />
      <Footer />
    </main>
  );
}
