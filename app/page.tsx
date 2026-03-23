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
      <div className="relative overflow-hidden">
        {/* Shared warm background for CTA + Footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D97757] via-[#C4654A] to-[#B85A40]">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-aurora" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl animate-aurora-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
