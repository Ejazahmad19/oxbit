'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../../../lib/animations'
import Image from 'next/image'
import { projects } from '../../../lib/projects'

type Project = typeof projects[0]

export default function ProjectScreens({ project }: { project: Project }) {
    if (!project.screens || project.screens.length === 0) return null

    return (
        <section>
            <motion.div
                custom={0}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='mb-6'>
                <h2 className='text-2xl font-bold text-[var(--md-sys-color-on-background)]'>
                    Screens
                </h2>
            </motion.div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {project.screens.map((screen, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className='relative rounded-4xl overflow-hidden shadow-md w-full aspect-video'>
                        <Image
                            src={screen}
                            alt={`${project.title} screen ${i + 1}`}
                            fill
                            className='object-cover' />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}