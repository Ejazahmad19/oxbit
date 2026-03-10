import CareersHero from "../components/careers_hero";
import OpenApplication from "../components/open_application";
import OpenRoles from "../components/open_roles";
import WhyOxbit from "../components/why_oxbit";

export default function Careers() {
  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 sm:gap-12 md:gap-16 lg:gap-20 pt-30 pb-12 sm:pb-12 md:pb-16 lg:pb-20'>
      <CareersHero />
      <OpenRoles />
      <WhyOxbit />
      <OpenApplication />
    </main>
  )
}