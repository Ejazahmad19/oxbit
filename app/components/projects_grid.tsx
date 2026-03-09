'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Image from 'next/image'
import { projects } from '../lib/projects'
import Link from 'next/link'

export default function ProjectsGrid() {
    return (
        <section>

            <motion.div
                custom={0}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

                {/* HEADER */}
                <div className='flex flex-col gap-4 mb-12'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-[var(--md-sys-color-on-background)]'>
                        Our Recent{' '}
                        <span className='text-[var(--md-sys-color-primary)]'>Works</span>
                    </h1>
                    <p className='text-md text-[var(--md-sys-color-on-surface-variant)] max-w-lg leading-relaxed'>
                        We have worked with startups, enterprises, and everything in between. Our team is passionate about building products that make a difference.
                    </p>
                </div>

                {/* GRID */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {projects.map((project, i) => (
                        <Link href={`/work/${project.slug}`} key={project.title}>
                            <motion.div
                                custom={i}
                                variants={fadeUp}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className='flex flex-col rounded-4xl shadow-lg overflow-hidden bg-[var(--md-sys-color-surface-container-lowest)]'>

                                {/* IMAGE */}
                                <div className='relative w-full h-64'>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className='object-cover' />
                                </div>

                                {/* CONTENT */}
                                <div className='flex flex-col gap-3 p-6'>

                                    {/* TAGS */}
                                    <div className='flex items-center gap-2 flex-wrap'>
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className='px-4 py-2 rounded-full shadow-sm text-[12px] font-semibold tracking-wider bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* TITLE */}
                                    <h3 className='text-lg font-bold text-[var(--md-sys-color-on-surface)]'>
                                        {project.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2 min-h-[3rem]'>
                                        {project.description}
                                    </p>

                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}