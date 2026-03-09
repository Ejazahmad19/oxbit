'use client'

import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"
import Image from "next/image"
import Link from "next/link"
import { services } from '../lib/services'


export default function ServicesGrid() {
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
                        What We{' '}
                        <span className='text-[var(--md-sys-color-primary)]'>Build</span>
                    </h1>
                    <p className='text-md text-[var(--md-sys-color-on-surface-variant)] max-w-lg leading-relaxed'>
                        End to end software for every platform. We turn complex ideas into high-performance digital products.
                    </p>
                </div>

                {/* GRID */}
                <div className='grid gap-4 lg:grid-cols-3 lg:grid-rows-2'>

                    {/* CARD 0 — tall left, spans 2 rows */}
                    <div className='relative lg:row-span-2'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='relative flex h-full flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container-lowest)]'>
                            <div className='relative w-full flex-1 min-h-64'>
                                <Image src={services[0].image} alt={services[0].title} fill className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-6'>
                                <span
                                    className='material-symbols-outlined text-[28px] text-[var(--md-sys-color-secondary)]'
                                    style={{ fontVariationSettings: '"FILL" 1' }}>
                                    {services[0].icon}
                                </span>
                                <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>{services[0].title}</h3>
                                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>{services[0].description}</p>
                                <div className='flex gap-2 flex-wrap mt-1'>
                                    {services[0].tags.map(tag => (
                                        <span key={tag} className='px-4 py-2 rounded-full text-[12px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                                    ))}
                                </div>
                                <Link
                                    href='/contact'
                                    className='mt-2 w-full justify-center flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-110 transition-all duration-300'>
                                    Get a Quote
                                    <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* CARD 1 — top middle */}
                    <div className='relative'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='relative flex h-full flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container)]'>
                            <div className='relative w-full flex-1 min-h-48'>
                                <Image src={services[1].image} alt={services[1].title} fill className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-6'>
                                <span
                                    className='material-symbols-outlined text-[28px] text-[var(--md-sys-color-secondary)]'
                                    style={{ fontVariationSettings: '"FILL" 1' }}>
                                    {services[1].icon}
                                </span>
                                <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>{services[1].title}</h3>
                                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2'>{services[1].description}</p>
                                <div className='flex gap-2 flex-wrap mt-1'>
                                    {services[1].tags.map(tag => (
                                        <span key={tag} className='px-4 py-2 rounded-full text-[12px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                                    ))}
                                </div>
                                <Link
                                    href='/contact'
                                    className='mt-2 w-full justify-center flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-110 transition-all duration-300'>
                                    Get a Quote
                                    <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* CARD 2 — top right, spans 2 rows */}
                    <div className='relative lg:row-span-2'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='relative flex h-full flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container-lowest)]'>
                            <div className='relative w-full flex-1 min-h-64'>
                                <Image src={services[2].image} alt={services[2].title} fill className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-6'>
                                <span
                                    className='material-symbols-outlined text-[28px] text-[var(--md-sys-color-secondary)]'
                                    style={{ fontVariationSettings: '"FILL" 1' }}>
                                    {services[2].icon}
                                </span>
                                <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>{services[2].title}</h3>
                                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>{services[2].description}</p>
                                <div className='flex gap-2 flex-wrap mt-1'>
                                    {services[2].tags.map(tag => (
                                        <span key={tag} className='px-4 py-2 rounded-full text-[12px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                                    ))}
                                </div>
                                <Link
                                    href='/contact'
                                    className='mt-2 w-full justify-center flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-110 transition-all duration-300'>
                                    Get a Quote
                                    <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* CARD 3 — bottom middle */}
                    <div className='relative lg:col-start-2 lg:row-start-2'>
                        <motion.div
                            whileHover={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='relative flex h-full flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container)]'>
                            <div className='relative w-full flex-1 min-h-48'>
                                <Image src={services[3].image} alt={services[3].title} fill className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 p-6'>
                                <span
                                    className='material-symbols-outlined text-[28px] text-[var(--md-sys-color-secondary)]'
                                    style={{ fontVariationSettings: '"FILL" 1' }}>
                                    {services[3].icon}
                                </span>
                                <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>{services[3].title}</h3>
                                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2'>{services[3].description}</p>
                                <div className='flex gap-2 flex-wrap mt-1'>
                                    {services[3].tags.map(tag => (
                                        <span key={tag} className='px-4 py-2 rounded-full text-[12px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                                    ))}
                                </div>
                                <Link
                                    href='/contact'
                                    className='mt-2 w-full justify-center flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-110 transition-all duration-300'>
                                    Get a Quote
                                    <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}