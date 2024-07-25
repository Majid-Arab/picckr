import Carousel from "@/components/Carousel";
import Checkout from "@/components/Checkout";
import ContactUsButton from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/Faq";
import Separator from "@/components/Separator";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Separator />
      <Checkout />
      <Carousel />
      <Separator />
      <Showcase />
      <Separator />
      <FAQ />
      <ContactUsButton />
    </main>
  );
}
