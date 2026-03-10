'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const values = [
  {
    icon: 'key',
    title: 'Ownership',
    description: 'We give you full autonomy over your projects. You own the outcome, the code, and the impact.',
  },
  {
    icon: 'schedule',
    title: 'Async First',
    description: 'Fewer meetings, more focus. Work when you are at your best. We value results over hours.',
  },
  {
    icon: 'bolt',
    title: 'Ship Fast',
    description: 'We prioritize speed and iteration. We ship frequently to learn faster and deliver value sooner.',
  },
]

export default function WhyOxbit() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
            Why Oxbit
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className='flex flex-col gap-4 p-6 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-md'>
              <span
                className='material-symbols-outlined text-[var(--md-sys-color-primary)]'
                style={{ fontVariationSettings: '"FILL" 1', fontSize: '32px' }}>
                {value.icon}
              </span>
              <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>
                {value.title}
              </h3>
              <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}