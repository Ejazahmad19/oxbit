'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { contacts } from '../lib/contacts'

export default function GetInTouch() {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex flex-col gap-6 p-8 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-md'>

      <h2 className='text-2xl font-bold text-[var(--md-sys-color-on-surface)]'>
        Get in Touch
      </h2>

      <div className='flex flex-col gap-5'>
        {contacts.map((contact, i) => (
          <motion.div
            key={contact.label}
            custom={i + 1}
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex items-center gap-4'>

            {/* ICON BUBBLE */}
            <div className='w-11 h-11 rounded-full shadow-sm bg-[var(--md-sys-color-primary-container)] flex items-center justify-center shrink-0'>
              <span
                className='material-symbols-outlined text-[20px] text-[var(--md-sys-color-primary)]'
                style={{ fontVariationSettings: '"FILL" 1' }}>
                {contact.icon}
              </span>
            </div>

            {/* TEXT */}
            <div className='flex flex-col gap-0.5'>
              <span className='text-[10px] font-bold tracking-widest text-[var(--md-sys-color-on-surface-variant)]'>
                {contact.label}
              </span>
              {contact.href ? (
                <a
                  href={contact.href}
                  className='text-sm font-medium text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-300'>
                  {contact.value}
                </a>
              ) : (
                <span className='text-sm font-medium text-[var(--md-sys-color-on-surface)]'>
                  {contact.value}
                </span>
              )}
            </div>

          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}