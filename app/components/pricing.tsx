"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeUp } from "../lib/animations"

const plans = [
    {
        title: 'Mobile Apps',
        price: '$339',
        description: 'Native iOS and Android excellence.',
        features: [
            'iOS & Android Development',
            'App Store Deployment',
            'Push Notifications',
            'API Integration',
        ],
    },
    {
        title: 'Websites',
        price: '$259',
        description: 'Beautiful, fast landing pages and sites.',
        features: [
            'Responsive Design',
            'CMS Integration',
            'SEO Optimization',
            'Performance Tuning',
        ],
    },
    {
        title: 'Web Apps',
        price: '$299',
        description: 'Scalable modern web experiences.',
        features: [
            'Full-stack Development',
            'Authentication & Auth',
            'Database Design',
            'API Development',
        ],
    },
    {
        title: 'Desktop',
        price: '$249',
        description: 'High-performance desktop software.',
        features: [
            'Cross-platform OS Support',
            'Performance Tuning',
            'Offline Functionality',
            'Auto Updates',
        ],
    },
]

export default function Pricing() {
    return (
        <section>
            {/* CARDS */}
            <div className='px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.title}
                        custom={i}
                        variants={fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        whileHover={{ y: -12, transition: { duration: 0.25 } }}
                        className='flex flex-col gap-6 p-6 rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container)]'>

                        {/* TOP */}
                        <div className='flex flex-col gap-2'>
                            <span className='text-s font-medium text-[var(--md-sys-color-primary)] uppercase tracking-wider'>
                                {plan.title}
                            </span>
                            <div className='flex items-end gap-1'>
                                <span className='text-4xl font-bold text-[var(--md-sys-color-on-surface)]'>
                                    {plan.price}
                                </span>
                                <span className='text-sm text-[var(--md-sys-color-on-surface-variant)] mb-1'>
                                    / starting
                                </span>
                            </div>
                            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                                {plan.description}
                            </p>
                        </div>

                        {/* DIVIDER */}
                        <div className='h-px bg-[var(--md-sys-color-outline-variant)]' />

                        {/* FEATURES */}
                        <ul className='flex flex-col gap-3 flex-1'>
                            {plan.features.map(feature => (
                                <li key={feature} className='flex items-center gap-2 text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                                    <span className='material-symbols-outlined text-[16px] text-[var(--md-sys-color-secondary)]'
                                        style={{ fontVariationSettings: '"FILL" 1' }}>
                                        check_circle
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link
                            href='/contact'
                            className='mt-auto text-center px-4 py-2.5 rounded-full shadow-lg text-sm font-medium border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-tertiary)] hover:text-[var(--md-sys-color-on-tertiary)] hover:border-[var(--md-sys-color-tertiary)] transition-all duration-300'>
                            Inquire Now
                        </Link>

                    </motion.div>
                ))}
            </div>
        </section>
    )
}