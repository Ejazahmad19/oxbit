'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../../../lib/animations'
import Link from 'next/link'
import { projects } from '../../../lib/projects'

type Project = typeof projects[0]

export default function ProjectNav({ prev, next }: { prev: Project | null, next: Project | null }) {
    return (
        <motion.div
            custom={0}
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-4'>

            <div>
                {prev && (
                    <Link
                        href={`/work/${prev.slug}`}
                        className='flex flex-col gap-1 p-5 rounded-3xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] transition-all duration-300 group'>
                        <span className='hidden sm:block text-[10px] font-semibold tracking-widest text-[var(--md-sys-color-on-surface-variant)]'>
                            PREVIOUS PROJECT
                        </span>
                        <div className='flex items-center gap-2 min-w-0'>
                            <span className='material-symbols-outlined text-[18px] text-[var(--md-sys-color-primary)] group-hover:-translate-x-1 transition-transform duration-200 shrink-0'>
                                arrow_back
                            </span>
                            <span className='text-sm font-bold text-[var(--md-sys-color-on-surface)] truncate'>
                                {prev.title}
                            </span>
                        </div>
                    </Link>
                )}
            </div>

            <div>
                {next && (
                    <Link
                        href={`/work/${next.slug}`}
                        className='flex flex-col gap-1 p-5 rounded-3xl bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] transition-all duration-300 group text-right'>
                        <span className='hidden sm:block text-[10px] font-semibold tracking-widest text-[var(--md-sys-color-on-surface-variant)]'>
                            NEXT PROJECT
                        </span>
                        <div className='flex items-center gap-2 justify-end min-w-0'>
                            <span className='text-sm font-bold text-[var(--md-sys-color-on-surface)] truncate'>
                                {next.title}
                            </span>
                            <span className='material-symbols-outlined text-[18px] text-[var(--md-sys-color-primary)] group-hover:translate-x-1 transition-transform duration-200 shrink-0'>
                                arrow_forward
                            </span>
                        </div>
                    </Link>
                )}
            </div>

        </motion.div>
    )
}