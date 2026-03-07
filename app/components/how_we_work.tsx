'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useEffect, useRef, useState } from 'react'

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We analyze your goals, audience, and market to define the core project requirements.',
        icon: 'search',
    },
    {
        number: '02',
        title: 'Planning',
        description: 'Creating detailed wireframes, technical architecture, and a strategic roadmap.',
        icon: 'edit_note',
    },
    {
        number: '03',
        title: 'Execution',
        description: 'Iterative development cycles with regular updates and continuous testing.',
        icon: 'code',
    },
    {
        number: '04',
        title: 'Testing',
        description: 'Rigorous QA and user testing to ensure stability and performance.',
        icon: 'bug_report',
    },
    {
        number: '05',
        title: 'Launch',
        description: 'Final deployment, performance optimization, and ongoing product support.',
        icon: 'rocket_launch',
    },
    {
        number: '06',
        title: 'Deployment',
        description: 'Seamless transition to production and post-launch monitoring.',
        icon: 'cloud_done',
    },
]

export default function HowWeWork() {
    const [active, setActive] = useState(0)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % steps.length)
        }, 4000)
    }

    useEffect(() => {
        startTimer()
        return () => { if (timerRef.current) clearInterval(timerRef.current) }
    }, [])

    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

                {/* HEADER */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='mb-8'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
                        How We Work
                    </h2>
                </motion.div>

                <motion.div
                    custom={1}
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='flex flex-col lg:flex-row md:flex-row gap-12 items-center'>

                    {/* LEFT — STEP LIST */}
                    <div className='flex flex-col gap-3 w-full lg:w-70 md:w-60 shrink-0'>
                        {steps.map((step, i) => (
                            <motion.button
                                key={step.number}
                                onClick={() => { setActive(i); startTimer() }}
                                className={`relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-4xl shadow-sm text-left transition-all duration-300 group
                                    ${active === i
                                        ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]'
                                        : 'bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-surface-container-high)]'
                                    }`}>

                                {/* NUMBER */}
                                <span className={`text-xs font-bold tracking-widest shrink-0 transition-colors duration-300
                                    ${active === i
                                        ? 'text-[var(--md-sys-color-on-primary)]'
                                        : 'text-[var(--md-sys-color-primary)]'
                                    }`}>
                                    {step.number}
                                </span>

                                {/* TITLE */}
                                <span className='text-sm font-semibold flex-1'>
                                    {step.title}
                                </span>

                                {/* ICON */}
                                <span
                                    className='material-symbols-outlined text-[20px] transition-all duration-300'
                                    style={{ fontVariationSettings: '"FILL" 1' }}>
                                    {active === i ? 'arrow_forward' : step.icon}
                                </span>

                                {/* PROGRESS BAR — only on active */}
                                {active === i && (
                                    <motion.div
                                        className='absolute bottom-0 left-0 h-1 bg-[var(--md-sys-color-on-primary)] rounded-full opacity-40'
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 4, ease: 'linear' as const }}
                                    />
                                )}

                            </motion.button>
                        ))}
                    </div>

                    {/* RIGHT — ACTIVE STEP DETAIL */}
                    <div className='flex-1 w-full relative min-h-64'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 64 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -64 }}
                                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                                className='flex flex-col gap-6 p-8 sm:p-12 rounded-4xl shadow-md bg-[var(--md-sys-color-primary-container)] h-full'>

                                {/* STEP NUMBER + ICON */}
                                <div className='flex items-center justify-between'>
                                    <span className='text-7xl font-bold text-[var(--md-sys-color-on-primary-container)] opacity-60'>
                                        {steps[active].number}
                                    </span>
                                    <span
                                        className='material-symbols-outlined text-[var(--md-sys-color-secondary)]'
                                        style={{ fontVariationSettings: '"FILL" 1', fontSize: '120px' }}>
                                        {steps[active].icon}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h3 className='text-2xl sm:text-4xl font-bold text-[var(--md-sys-color-on-surface)]'>
                                    {steps[active].title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-md'>
                                    {steps[active].description}
                                </p>

                                {/* STEP INDICATORS */}
                                <div className='flex items-center gap-3 mt-auto'>
                                    {steps.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-300
                                                ${i === active
                                                    ? 'w-12 bg-[var(--md-sys-color-primary)]'
                                                    : i < active
                                                        ? 'w-6 bg-[var(--md-sys-color-primary)] opacity-30'
                                                        : 'w-6 bg-[var(--md-sys-color-outline-variant)]'
                                                }`}
                                        />
                                    ))}
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}