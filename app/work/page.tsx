import HowWeWork from "../components/how_we_work";
import ProjectsGrid from "../components/projects_grid";
import ReadyToBuild from "../components/ready_to_build";

export default function Work() {
  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 sm:gap-12 md:gap-16 lg:gap-20 pt-30 pb-12 sm:pb-12 md:pb-16 lg:pb-20'>
      <ProjectsGrid />
      <HowWeWork />
      <ReadyToBuild />
    </main>
  )
}