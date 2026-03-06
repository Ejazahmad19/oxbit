'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        quote: 'Oxbit delivered our MVP three weeks ahead of schedule. The code quality is exceptional and their UI/UX team is world-class.',
        name: 'Sarah Jenkins',
        designation: 'CEO',
        company: 'Lumina Labs',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
        quote: "Finally a dev agency that understands business goals. They didn't just build what we asked, they built what we needed.",
        name: 'Marcus Thorne',
        designation: 'Founder',
        company: 'Echo Stream',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    },
    {
        quote: 'Their technical depth in cloud infrastructure saved us from a major scaling bottleneck. Highly recommend their senior architects.',
        name: 'David Chen',
        designation: 'VP',
        company: 'DataSync',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
        quote: 'From design to deployment in 6 weeks. The attention to detail and communication throughout was outstanding.',
        name: 'Priya Sharma',
        designation: 'CTO',
        company: 'NovaPay',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    {
        quote: "We've worked with many agencies but Oxbit stands out for their ownership mindset. They treat your product like their own.",
        name: 'James Okafor',
        designation: 'Product Lead',
        company: 'Vaultline',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
]

export default function Testimonials() {

    const [active, setActive] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const total = testimonials.length
    const pages = total - visibleCount + 1

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1)
            else if (window.innerWidth < 1024) setVisibleCount(2)
            else setVisibleCount(3)
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    useEffect(() => {
        setActive(0)
    }, [visibleCount])

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % pages)
        }, 3500)
        return () => clearInterval(interval)
    }, [pages])

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
                    className='text-center mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
                        What our partners say
                    </h2>
                </motion.div>

                {/* CAROUSEL */}
                <motion.div
                    custom={1}
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='overflow-hidden'>

                    <motion.div
                        className='flex gap-6 pb-4'
                        animate={{ x: `calc(-${active} * (100% / ${visibleCount} + ${24 / visibleCount}px))` }}
                        transition={{ duration: 0.75, ease: 'easeInOut' as const }}>
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                whileHover={{ scale: 0.9, transition: { duration: 0.25 } }}
                                style={{ width: `calc(100% / ${visibleCount} - ${24 * (visibleCount - 1) / visibleCount}px)` }}
                                className='shrink-0 flex flex-col gap-5 p-6 rounded-3xl bg-[var(--md-sys-color-secondary-container)] shadow-lg'>

                                {/* PERSON */}
                                <div className='flex items-center gap-4'>
                                    <div className='relative w-24 h-24 shrink-0 rounded-full overflow-hidden shadow-md ring-3 ring-[var(--md-sys-color-primary)]'>
                                        <Image src={t.photo} alt={t.name} fill className='object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-md font-bold text-[var(--md-sys-color-on-secondary-container)]'>
                                            {t.name}
                                        </span>
                                        <div className='flex items-center gap-2 flex-wrap'>
                                            <span className='px-3 py-1 rounded-full shadow-sm text-[12px] font-semibold bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-primary)]'>
                                                {t.designation}
                                            </span>
                                            <span className='px-3 py-1 rounded-full shadow-sm text-[12px] font-semibold bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-tertiary)]'>
                                                {t.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* DIVIDER */}
                                <div className='h-px bg-[var(--md-sys-color-primary)]' />

                                {/* QUOTE */}
                                <p className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                                    "{t.quote}"
                                </p>

                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>

                {/* DOTS */}
                <div className='flex items-center justify-center gap-2 mt-8'>
                    {Array.from({ length: pages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all duration-300
                ${i === active
                                    ? 'w-6 h-2 bg-[var(--md-sys-color-primary)]'
                                    : 'w-2 h-2 bg-[var(--md-sys-color-outline-variant)] hover:bg-[var(--md-sys-color-primary)]'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}