'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Link from 'next/link'

export default function ReadyToBuild() {
  return (
    <section className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
      <motion.div
        custom={0}
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-col items-center text-center gap-6 px-12 sm:px-16 lg:px-24 py-16 sm:py-20 rounded-4xl shadow-lg bg-[var(--md-sys-color-primary)]'>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--md-sys-color-on-primary)] leading-tight'>
          Ready to build something?
        </h2>

        <p className='text-sm text-[var(--md-sys-color-on-primary)] opacity-80 max-w-md leading-relaxed'>
          Let's turn your ambitious roadmap into a high-performance reality.
        </p>

        <Link
          href='/contact'
          className='px-8 py-3 rounded-full font-medium text-sm bg-[var(--md-sys-color-on-primary)] text-[var(--md-sys-color-primary)] hover:scale-105 hover:brightness-105 active:scale-95 transition-all duration-300'>
          Start a Project
        </Link>

      </motion.div>
    </section>
  )
}