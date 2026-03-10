'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Link from 'next/link'

export default function CareersHero() {
    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
                <div className='flex flex-col lg:flex-row items-center gap-10'>

                    {/* TEXT */}
                    <div className='flex flex-col gap-6 flex-1'>
                        <motion.h1
                            custom={0}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'
                            className='text-4xl sm:text-6xl font-bold text-[var(--md-sys-color-on-background)] leading-tight'>
                            Join the{' '}
                            <span className='text-[var(--md-sys-color-primary)]'>Team</span>
                        </motion.h1>

                        <motion.p
                            custom={1}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'
                            className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-md'>
                            We are a small team that ships big things. If you love clean code and great products, you might belong here.
                        </motion.p>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'>
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className='inline-block'>
                                <Link
                                    href='mailto:oxbit.in@gmail.com'
                                    className='inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium transition-all duration-300'>
                                    Send Open Application
                                    <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ILLUSTRATION CARD */}
                    <motion.div
                        custom={3}
                        variants={fadeUp}
                        initial='hidden'
                        animate='visible'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{ background: 'radial-gradient(circle at center, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-surface-container) 50%)' }}
                        className='relative w-full lg:w-1/2 h-72 sm:h-96 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-lg shrink-0 flex items-center justify-center'>
                        <span
                            className='material-symbols-outlined text-[var(--md-sys-color-primary)]'
                            style={{ fontVariationSettings: '"FILL" 1', fontSize: '120px' }}>
                            rocket_launch
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}