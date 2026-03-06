'use client'

import Image from "next/image"
import Container from "./container"
import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { motion } from "framer-motion"

const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
]

const resources = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/work' },
    { label: 'Privacy Policy', href: '/privacy' },
]

const socials = [
    { label: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { label: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
    { label: 'X', icon: FaXTwitter, href: 'https://x.com' },
    { label: 'Facebook', icon: FaFacebook, href: 'https://facebook.com' },
    { label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
    { label: 'Youtube', icon: FaYoutube, href: 'https://youtube.com' },
    { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/917972266365' },
]

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: 'easeOut' as const }}
            className="border-t border-[var(--md-sys-color-outline-variant)]">
            <Container className='py-4 sm:py-8 lg:py-16'>

                {/* 4 COLUMNS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {/* COL 1 — LOGO + TAGLINE */}
                    <div className='flex flex-col gap-4 sm:col-span-2 lg:col-span-1'>
                        <Image
                            src='/Oxbit_Horizontal_Transparent.svg'
                            width={150}
                            height={50}
                            alt='Oxbit Logo' />
                        <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            Android, iOS, Web and Desktop solutions for ambitious businesses looking to scale with confidence.
                        </p>
                    </div>

                    {/* COL 2 — COMPANY */}
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-sm font-semibold text-[var(--md-sys-color-secondary)]'>Company</h4>
                        <ul className='flex flex-col gap-3'>
                            {company.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-200'>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 3 — RESOURCES */}
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-sm font-semibold text-[var(--md-sys-color-secondary)]'>Resources</h4>
                        <ul className='flex flex-col gap-3'>
                            {resources.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-200'>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 4 — NEWSLETTER */}
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-sm font-semibold text-[var(--md-sys-color-secondary)]'>Newsletter</h4>
                        <p className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>
                            Get updates on our latest work and tech insights.
                        </p>
                        <div className='flex gap-2'>
                            <input
                                type='email'
                                placeholder='your@email.com'
                                className='flex-1 min-w-0 px-4 py-2.5 rounded-full shadow-lg text-sm bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface)] placeholder:text-[var(--md-sys-color-on-surface-variant)] border border-[var(--md-sys-color-outline-variant)] focus:outline-none focus:border-[var(--md-sys-color-secondary)] transition-colors duration-300' />
                            <button className='w-12 h-12 flex items-center justify-center bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] rounded-full shadow-lg hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300 shrink-0'>
                                <span className='material-symbols-outlined text-[20px]' style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className='mt-6 pt-6 border-t border-[var(--md-sys-color-outline-variant)] flex flex-col sm:flex-row items-center justify-between gap-4'>

                    {/* COPYRIGHT */}
                    <p className='text-xs text-[var(--md-sys-color-on-surface-variant)]'>
                        © {new Date().getFullYear()} Oxbit Software. All rights reserved.
                    </p>

                    {/* SOCIALS */}
                    <div className='flex items-center gap-2'>
                        {socials.map(({ href, label, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className='w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-tertiary)] hover:text-[var(--md-sys-color-on-tertiary)] hover:-translate-y-1 text-[var(--md-sys-color-on-surface-variant)] transition-all duration-300'>
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </motion.footer >
    )
}
