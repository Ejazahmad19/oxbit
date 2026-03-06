'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import {
    SiKotlin, SiJetpackcompose, SiOpenjdk, SiAndroid,
    SiNextdotjs, SiFirebase, SiSupabase, SiPostgresql,
    SiTailwindcss, SiTypescript, SiFigma, SiGoogleplay
} from 'react-icons/si'

const technologies = [
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'Jetpack Compose', icon: SiJetpackcompose },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'Android', icon: SiAndroid },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Figma', icon: SiFigma },
    { name: 'Play Store', icon: SiGoogleplay }
]

const doubled = [...technologies, ...technologies]

export default function TechStack() {
    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 mb-6'>
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
                        Our Tech Stack
                    </h2>
                    <p className='mt-3 text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                        Tools and technologies we work with
                    </p>
                </motion.div>
            </div>

            {/* TRACK — full width, outside container */}
            <motion.div
                custom={1}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='overflow-hidden'>

                <motion.div
                    className='flex gap-4 py-2 w-max'
                    animate={{ x: [0, '-50%'] }}
                    transition={{
                        duration: technologies.length * 3,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}>
                    {doubled.map((tech, i) => {
                        const Icon = tech.icon
                        return (
                            <motion.div
                                key={`${tech.name}-${i}`}
                                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                                className='shrink-0 flex items-center gap-3 px-8 py-6 shadow-md rounded-full bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface-variant)] transition-all duration-300 cursor-default'>
                                <Icon size={24} />
                                <span className='text-md font-medium whitespace-nowrap'>
                                    {tech.name}
                                </span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}