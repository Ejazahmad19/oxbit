"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '../lib/animations'

export default function Hero() {
    return (
        <section className='flex items-center justify-center text-center'>
      <div className='flex flex-col items-center gap-6 max-w-3xl px-4'>

        {/* PILL BADGE */}
        <motion.div
          custom={0} variants={fadeUp} initial='hidden' animate='visible'
          className='px-6 py-2 rounded-full border border-[var(--md-sys-color-outline-variant)] text-xs font-medium text-[var(--md-sys-color-on-surface-variant)]'>
          Android · iOS · Web · Desktop
        </motion.div>

        {/* HEADING */}
        <motion.h1
          custom={1} variants={fadeUp} initial='hidden' animate='visible'
          className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--md-sys-color-on-background)]'>
          We Build Apps That{' '}
          <span className='text-[var(--md-sys-color-primary)]'>Matter</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          custom={2} variants={fadeUp} initial='hidden' animate='visible'
          className='text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-xl leading-relaxed'>
          Mobile, web and desktop solutions for ambitious businesses looking to scale with confidence.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          custom={3} variants={fadeUp} initial='hidden' animate='visible'
          className='flex items-center gap-3 flex-wrap justify-center'>

          <Link
            href='/work'
            className='px-6 py-3 bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] rounded-full shadow-lg font-medium text-sm hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300'>
            See Our Work
          </Link>

          <Link
            href='/contact'
            className='px-6 py-3 border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] rounded-full shadow-lg font-medium text-sm hover:border-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-primary)] active:scale-95 transition-all duration-300'>
            Contact Us
          </Link>

        </motion.div>
      </div>
    </section>
    )
}