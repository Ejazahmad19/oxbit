'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Image from 'next/image'
import Link from 'next/link'
import { blogs } from '../lib/blogs'

export default function BlogsGrid() {
    const featured = blogs[0]
    const rest = blogs.slice(1)

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
                        See Our{' '}
                        <span className='text-[var(--md-sys-color-primary)]'>Insights</span>
                    </h1>
                    <p className='text-md text-[var(--md-sys-color-on-surface-variant)] max-w-lg leading-relaxed'>
                        Tips, Tutorials, and updates from the Oxbit team to help you stay ahead in the ever-evolving world of technology.
                    </p>
                </div>

                {/* FEATURED */}
                <Link href={`/blog/${featured.slug}`} className='block mb-6'>
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className='flex flex-col lg:flex-row overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-primary-container)]'>
                        <div className='relative w-full lg:w-1/2 h-64 lg:h-auto min-h-64 shrink-0'>
                            <Image src={featured.image} alt={featured.title} fill className='object-cover' />
                        </div>
                        <div className='flex flex-col justify-center gap-4 p-8 lg:p-12'>
                            <span className='self-start px-4 py-2 rounded-full shadow-sm text-[12px] font-bold tracking-wider bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'>
                                {featured.label}
                            </span>
                            <h2 className='text-2xl sm:text-3xl font-bold text-[var(--md-sys-color-on-primary-container)]'>
                                {featured.title}
                            </h2>
                            <p className='text-sm text-[var(--md-sys-color-on-primary-container)] leading-relaxed line-clamp-3'>
                                {featured.description}
                            </p>
                            <div className='flex items-center gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]'>
                                <span>{featured.date}</span>
                                <span>•</span>
                                <span>{featured.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* REST GRID */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {rest.map((blog, i) => (
                        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                            <motion.div
                                whileHover={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className='flex flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container)] h-full'>
                                <div className='relative w-full h-48 shrink-0'>
                                    <Image src={blog.image} alt={blog.title} fill className='object-cover' />
                                </div>
                                <div className='flex flex-col gap-3 p-6 flex-1'>
                                    <span className='self-start px-4 py-2 rounded-full shadow-sm text-[12px] font-bold tracking-wider bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]'>
                                        {blog.label}
                                    </span>
                                    <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)] line-clamp-2'>
                                        {blog.title}
                                    </h3>
                                    <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2'>
                                        {blog.description}
                                    </p>
                                    <div className='mt-auto flex flex-col gap-3 pt-4'>
                                        <div className='flex items-center gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]'>
                                            <span>{blog.date}</span>
                                            <span>•</span>
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </motion.div>
        </section>
    )
}