'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../../../lib/animations'
import Link from 'next/link'
import { projects } from '../../../lib/projects'

type Project = typeof projects[0]

const sections = [
    { key: 'overview', title: 'Overview' },
    { key: 'problem', title: 'The Problem' },
    { key: 'solution', title: 'The Solution' },
] as const

export default function ProjectContent({ project }: { project: Project }) {
    return (
        <div className='flex flex-col lg:flex-row gap-8'>

            {/* LEFT — OVERVIEW / PROBLEM / SOLUTION */}
            <div className='flex flex-col gap-6 flex-1'>
                {sections.map((section, i) => (
                    <motion.div
                        key={section.key}
                        custom={i}
                        variants={fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='flex flex-col gap-3 p-8 rounded-4xl shadow-md bg-[var(--md-sys-color-surface-container)]'>
                        <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>
                            {section.title}
                        </h3>
                        <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            {project[section.key]}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* RIGHT — SIDEBAR */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='w-full lg:w-72 shrink-0'>

                <div className='flex flex-col gap-6 p-6 rounded-4xl shadow-md bg-[var(--md-sys-color-primary-container)]'>

                    {/* TECH STACK */}
                    <div className='flex flex-col gap-3'>
                        <span className='text-[12px] font-bold tracking-widest text-[var(--md-sys-color-on-primary-container)]'>
                            TECH STACK
                        </span>
                        <div className='flex flex-wrap gap-2'>
                            {project.techStack.map(tech => (
                                <span
                                    key={tech}
                                    className='px-4 py-2 rounded-full shadow-sm text-xs font-medium bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className='h-px bg-[var(--md-sys-color-on-primary-container)] opacity-30' />

                    {/* PLATFORMS */}
                    <div className='flex flex-col gap-3'>
                        <span className='text-[12px] font-bold tracking-widest text-[var(--md-sys-color-on-primary-container)]'>
                            PLATFORMS
                        </span>
                        <div className='flex flex-wrap gap-2'>
                            {project.platforms.map(platform => {
                                const icon = platform === 'iOS' ? 'phone_iphone'
                                    : platform === 'Android' ? 'phone_android'
                                        : platform === 'Web' ? 'language'
                                            : platform === 'macOS' ? 'laptop_mac'
                                                : platform === 'Linux' ? 'terminal'
                                                    : 'desktop_windows'
                                return (
                                    <span
                                        key={platform}
                                        className='flex items-center gap-1.5 px-4 py-2 rounded-full shadow-sm text-xs font-medium bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]'>
                                        <span
                                            className='material-symbols-outlined text-[12px]'
                                            style={{ fontVariationSettings: '"FILL" 1' }}>
                                            {icon}
                                        </span>
                                        {platform}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    {(project.liveLink || project.appStoreLink) && (
                        <div className='h-px bg-[var(--md-sys-color-on-primary-container)] opacity-30' />
                    )}

                    {/* LINKS */}
                    <div className='flex flex-col gap-2'>
                        {project.liveLink && (
                            <Link
                                href={project.liveLink}
                                target='_blank'
                                className='flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-105 hover:scale-102 active:scale-95 transition-all duration-300'>
                                <span className='material-symbols-outlined text-[18px]' style={{ fontVariationSettings: '"FILL" 1' }}>language</span>
                                Live Link
                            </Link>
                        )}
                        {project.appStoreLink && (
                            <Link
                                href={project.appStoreLink}
                                target='_blank'
                                className='flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--md-sys-color-on-primary-container)] text-[var(--md-sys-color-on-primary-container)] text-sm font-medium hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] hover:border-[var(--md-sys-color-primary)] transition-all duration-300'>
                                <span className='material-symbols-outlined text-[18px]' style={{ fontVariationSettings: '"FILL" 1' }}>download</span>
                                App Store
                            </Link>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
    )
}