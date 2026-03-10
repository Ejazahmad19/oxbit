import AboutHero from "../components/about_hero";
import OurStory from "../components/our_story";
import ReadyToBuild from "../components/ready_to_build";
import TheTeam from "../components/the_team";
import WhatWeStandFor from "../components/what_we_stand_for";

export default function About() {
  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 sm:gap-12 md:gap-16 lg:gap-20 pt-30 pb-12 sm:pb-12 md:pb-16 lg:pb-20'>
      <AboutHero />
      <OurStory />
      <WhatWeStandFor />
      <TheTeam />
      <ReadyToBuild />
    </main>
  )
}