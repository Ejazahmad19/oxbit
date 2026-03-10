'use client'

import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"
import Image from "next/image"

export default function AboutHero() {
    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
                <div className='flex flex-col lg:flex-row items-center gap-10'>

                    {/* LEFT — TEXT */}
                    <div className='flex flex-col gap-6 flex-1'>
                        <motion.h1
                            custom={0}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'
                            className='text-4xl sm:text-6xl font-bold text-[var(--md-sys-color-on-background)] leading-tight'>
                            Built by developers,{' '}
                            <span className='text-[var(--md-sys-color-primary)]'>for builders</span>
                        </motion.h1>

                        <motion.p
                            custom={1}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'
                            className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-md'>
                            We are a technical-first agency focused on building scalable software solutions for modern startups and enterprises. We ship code that lasts.
                        </motion.p>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'>
                            <motion.a
                                href='/work'
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className='inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium transition-all duration-300'>
                                See Our Work
                                <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
                            </motion.a>
                        </motion.div>

                    </div>

                    {/* RIGHT — IMAGE */}
                    <motion.div
                        custom={3}
                        variants={fadeUp}
                        initial='hidden'
                        animate='visible'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className='relative w-full lg:w-1/2 h-72 sm:h-96 rounded-4xl overflow-hidden shadow-lg shrink-0'>
                        <Image
                            src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
                            alt='Oxbit team at work'
                            fill
                            className='object-cover' />
                    </motion.div>
                </div>
            </div>
        </section >
    )
}