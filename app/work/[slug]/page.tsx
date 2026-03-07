import { projects } from '../../lib/projects'
import { notFound } from 'next/navigation'
import ProjectHero from './components/project_hero'
import ProjectContent from './components/project_content'
import ProjectNav from './components/project_nav'
import ProjectScreens from './components/project_screens'
import ReadyToBuild from '@/app/components/ready_to_build'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = projects.findIndex(p => p.slug === slug)
  if (index === -1) notFound()

  const project = projects[index]
  const prev = projects[index - 1] ?? null
  const next = projects[index + 1] ?? null

  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 pt-24 pb-12 sm:pb-16 lg:pb-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full flex flex-col gap-12'>
        <ProjectHero project={project} />
        <ProjectContent project={project} />
        <ProjectScreens project={project} />
        <ProjectNav prev={prev} next={next} />
        <ReadyToBuild />
      </div>
    </main>
  )
}