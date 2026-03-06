import Hero from "./components/hero";
import HomeMiniAbout from "./components/home_mini_about";
import OurWork from "./components/our_work";
import Pricing from "./components/pricing";
import ReadyToBuild from "./components/ready_to_build";
import TechStack from "./components/techtsack";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 sm:gap-12 md:gap-16 lg:gap-20 pt-30 pb-12 sm:pb-12 md:pb-16 lg:pb-20'>
      <Hero />
      <Pricing />
      <TechStack />
      <OurWork />
      <HomeMiniAbout />
      <Testimonials />
      <ReadyToBuild />
    </main>
  );
}