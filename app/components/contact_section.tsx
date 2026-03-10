'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import GetInTouch from './get_in_touch'
import ContactForm from './contact_form'

export default function ContactSection() {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial='hidden'
      animate='visible'
      className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full flex flex-col gap-12'>

      {/* PAGE HEADER */}
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[var(--md-sys-color-on-background)]'>
          Let's Build Something
        </h1>
        <p className='text-md text-[var(--md-sys-color-on-surface-variant)] max-w-md mx-auto leading-relaxed'>
          Tell us about your project and we'll help you scale your digital presence.
        </p>
      </div>

      {/* CONTENT */}
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='w-full lg:w-80 shrink-0'>
          <GetInTouch />
        </div>
        <ContactForm />
      </div>

    </motion.div>
  )
}