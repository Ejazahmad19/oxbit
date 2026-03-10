'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Link from 'next/link'

export default function OpenApplication() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row items-center justify-between gap-6 p-12 sm:p-24 rounded-4xl bg-[var(--md-sys-color-primary)]'>

          <div className='flex flex-col gap-2'>
            <h2 className='text-4xl sm:text-6xl font-bold text-[var(--md-sys-color-on-primary)]'>
              Do not see your role?
            </h2>
            <p className='text-lg text-[var(--md-sys-color-on-primary)] opacity-80'>
              Send us your CV and tell us how you can help.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className='shrink-0'>
            <Link
              href='mailto:oxbit.in@gmail.com'
              className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--md-sys-color-on-primary)] text-[var(--md-sys-color-primary)] text-sm font-semibold hover:brightness-105 transition-all duration-300'>
              Send Open Application
              <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}