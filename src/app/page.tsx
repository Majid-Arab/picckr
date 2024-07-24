import Carousel from "@/components/Carousel";
import Checkout from "@/components/Checkout";
import HeroSection from "@/components/HeroSection";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Separator />
      <Checkout />
      <Carousel />
      <Separator />
    </main>
  );
}
