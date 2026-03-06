'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '../lib/animations'

const stats = [
    { value: '120+', label: 'Projects Shipped' },
    { value: '45', label: 'Global Clients' },
    { value: '8+', label: 'Years Active' },
    { value: '15+', label: 'Technologies' },
]

export default function HomeMiniAbout() {
    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
                <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-center'>

                    {/* LEFT */}
                    <div className='flex flex-col gap-6 flex-1'>

                        <motion.h2
                            custom={0}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)] leading-tight'>
                            Small team.<br />Serious software.
                        </motion.h2>

                        <motion.p
                            custom={1}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            We don't do generic. Every line of code and every pixel is crafted to solve specific business challenges. Our senior-only team ensures your project gets the architectural integrity it deserves.
                        </motion.p>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}>
                            <Link
                                href='/about'
                                className='inline-flex px-6 py-3 rounded-full text-sm font-medium border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] hover:border-[var(--md-sys-color-tertiary)] hover:text-[var(--md-sys-color-tertiary)] transition-all duration-300'>
                                About Oxbit
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT — STATS */}
                    <div className='grid grid-cols-2 gap-4 flex-1 w-full'>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                custom={i}
                                variants={fadeUp}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                className='flex flex-col gap-1 p-8 rounded-4xl shadow-md bg-[var(--md-sys-color-tertiary-container)]'>
                                <span className='text-3xl font-bold text-[var(--md-sys-color-on-tertiary-container)]'>
                                    {stat.value}
                                </span>
                                <span className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}