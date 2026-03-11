'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const sections = [
    {
        id: 'information-we-collect',
        title: 'Information We Collect',
        number: '1',
        content: (
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                    At Oxbit, we value your privacy. We collect information that you provide directly to us, such as when you{' '}
                    <Link href='/contact' className='text-[var(--md-sys-color-primary)] hover:underline'>fill out a contact form</Link>
                    , sign up for our newsletter, or communicate with our development team.
                </p>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                    This may include your name, email address, company name, and project requirements. We also automatically collect certain technical data when you visit our site, including your IP address and device information.
                </p>
            </div>
        ),
    },
    {
        id: 'how-we-use-your-information',
        title: 'How We Use Your Information',
        number: '2',
        content: (
            <div className='flex flex-col gap-4'>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                    Your data allows us to provide high-quality{' '}
                    <Link href='/services' className='text-[var(--md-sys-color-primary)] hover:underline'>development services</Link>
                    . We use the collected information to:
                </p>
                <ul className='flex flex-col gap-2 ml-4'>
                    {[
                        'Process your inquiries and provide project quotes.',
                        'Send updates regarding your active development sprints.',
                        "Improve our website's performance and user experience.",
                        'Ensure the security of our infrastructure.',
                    ].map((item, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            <span className='w-1.5 h-1.5 rounded-full bg-[var(--md-sys-color-primary)] mt-1.5 shrink-0' />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
    {
        id: 'sharing-of-information',
        title: 'Sharing of Information',
        number: '3',
        content: (
            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                We do not sell your personal information. We may share data with{' '}
                <span className='text-[var(--md-sys-color-primary)]'>trusted third-party partners</span>
                {' '}who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
        ),
    },
    {
        id: 'cookies-and-tracking',
        title: 'Cookies and Tracking',
        number: '4',
        content: (
            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                We use cookies to understand site usage and improve content. You can manage your preferences through our{' '}
                <span className='text-[var(--md-sys-color-primary)] cursor-pointer hover:underline'>Cookie Settings</span>
                {' '}or by adjusting your browser options.
            </p>
        ),
    },
    {
        id: 'data-retention',
        title: 'Data Retention',
        number: '5',
        content: (
            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. For active project clients, data is stored securely throughout our partnership.
            </p>
        ),
    },
    {
        id: 'your-rights',
        title: 'Your Rights',
        number: '6',
        content: (
            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                Depending on your location, you may have rights to access, correct, or delete your personal data. You can exercise these rights at any time by sending an{' '}
                <Link href='mailto:oxbit.in@gmail.com' className='text-[var(--md-sys-color-primary)] hover:underline'>official request</Link>
                {' '}to our privacy team.
            </p>
        ),
    },
]

export default function PrivacyContent() {
    const [activeSection, setActiveSection] = useState(sections[0].id)

    useEffect(() => {
        const observers: IntersectionObserver[] = []
        sections.forEach(section => {
            const el = document.getElementById(section.id)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(section.id) },
                { rootMargin: '-30% 0px -60% 0px' }
            )
            observer.observe(el)
            observers.push(observer)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full flex flex-col gap-12'>

            {/* HERO */}
            <motion.div
                custom={0}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='flex flex-col items-center gap-4 text-center'>
                <span className='px-6 py-3 rounded-full shadow-sm text-[12px] font-bold tracking-widest bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]'>
                    EFFECTIVE MARCH 1, 2025
                </span>
                <h1 className='text-4xl sm:text-6xl font-bold text-[var(--md-sys-color-on-background)]'>
                    Privacy Policy
                </h1>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                    Last updated March 2025
                </p>
            </motion.div>

            {/* CONTENT */}
            <motion.div
                custom={1}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='flex flex-col lg:flex-row gap-8 items-start'>

                {/* STICKY TOC */}
                <div className='w-full lg:w-84 shrink-0 lg:sticky lg:top-28'>
                    <div className='flex flex-col gap-1 p-4 rounded-4xl shadow-md bg-[var(--md-sys-color-surface-container)]'>
                        <span className='text-[12px] font-bold tracking-widest text-[var(--md-sys-color-on-surface-variant)] px-3 py-2'>
                            TABLE OF CONTENTS
                        </span>
                        {sections.map(section => (
                            <button
                                key={section.id}
                                className={`text-left px-3 py-2.5 rounded-4xl text-sm transition-all duration-300
                  ${activeSection === section.id
                                        ? 'bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] font-semibold'
                                        : 'text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]'
                                    }`}>
                                {section.number}. {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ARTICLE */}
                <div className='flex-1 flex flex-col gap-12'>
                    {sections.map((section, i) => (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            custom={i}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='flex flex-col gap-4 scroll-mt-32'>
                            <h2 className='text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-background)]'>
                                {section.number}. {section.title}
                            </h2>
                            {section.content}
                        </motion.div>
                    ))}

                    {/* CONTACT CARD */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className='flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-4xl shadow-md bg-[var(--md-sys-color-primary-container)]'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-lg font-bold text-[var(--md-sys-color-on-primary-container)]'>
                                Questions about this policy?
                            </h3>
                            <p className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                                Our team is here to help with any privacy concerns.
                            </p>
                        </div>
                        <Link
                            href='/contact'
                            className='shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-sm bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-semibold hover:brightness-115 active:scale-95 transition-all duration-300'>
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}