'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../../../lib/animations'
import Image from 'next/image'
import { projects } from '../../../lib/projects'

type Project = typeof projects[0]

export default function ProjectHero({ project }: { project: Project }) {
    return (
        <div className='flex flex-col gap-6'>

            {/* HERO IMAGE */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='relative w-full h-72 sm:h-[480px] rounded-4xl overflow-hidden'>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover' />
            </motion.div>

            {/* TITLE + TAGS + DESC */}
            <motion.div
                custom={1}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='flex flex-col gap-3'>
                <h1 className='text-3xl sm:text-5xl font-bold text-[var(--md-sys-color-on-background)]'>
                    {project.title}
                </h1>
                <div className='flex items-center gap-2 flex-wrap'>
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className='px-4 py-2 rounded-full shadow-sm text-[12px] font-semibold tracking-wider bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'>
                            {tag}
                        </span>
                    ))}
                </div>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                    {project.description}
                </p>
            </motion.div>

        </div>
    )
}