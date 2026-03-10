'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Link from 'next/link'
import { useState } from 'react'
import { roles } from '../lib/roles'

const filters = ['All', 'Engineering', 'Design', 'Operations']

// Set to false to show "no openings" state
const HAS_OPENINGS = false

export default function OpenRoles() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = roles.filter(r =>
    activeFilter === 'All' || r.department.toLowerCase() === activeFilter.toLowerCase()
  )

  return (
    <section>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

        {/* HEADER ROW */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
            Open Roles
          </h2>

          {/* FILTERS — only show when there are openings */}
          {HAS_OPENINGS && (
            <div className='flex items-center gap-2 flex-wrap'>
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full text-xs font-semibold transition-all duration-300
                    ${activeFilter === filter
                      ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]'
                      : 'border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface-variant)] hover:border-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-primary)]'
                    }`}>
                  {filter}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* ROLES GRID or EMPTY STATE */}
        <AnimatePresence mode='wait'>
          {HAS_OPENINGS ? (
            <motion.div
              key='roles'
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {filtered.map((role, i) => (
                <motion.div
                  key={role.title}
                  custom={i}
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className='flex flex-col gap-4 p-6 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-md'>

                  {/* TITLE */}
                  <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>
                    {role.title}
                  </h3>

                  {/* CHIPS */}
                  <div className='flex items-center gap-2 flex-wrap'>
                    <span className='px-4 py-2 rounded-full text-[10px] font-bold tracking-wider bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>
                      {role.department}
                    </span>
                    <span className='px-4 py-2 rounded-full text-[10px] font-bold tracking-wider bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'>
                      {role.location}
                    </span>
                    <span className='px-4 py-2 rounded-full text-[10px] font-bold tracking-wider bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]'>
                      {role.type}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed flex-1'>
                    {role.description}
                  </p>

                  {/* APPLY BUTTON */}
                  <Link
                    href='mailto:oxbit.in@gmail.com'
                    className='w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-primary)] text-sm font-medium hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] transition-all duration-300'>
                    Apply Now
                    <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
                  </Link>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key='empty'
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className='flex flex-col items-center justify-center gap-5 p-12 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-md text-center'>
              <span
                className='material-symbols-outlined text-[var(--md-sys-color-primary)]'
                style={{ fontVariationSettings: '"FILL" 1', fontSize: '56px' }}>
                manage_search
              </span>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>
                  No open roles right now
                </h3>
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed max-w-sm'>
                  We are not hiring at the moment but we are always open to meeting great people.
                </p>
              </div>
              <Link
                href='mailto:oxbit.in@gmail.com'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium hover:brightness-105 active:scale-95 transition-all duration-300'>
                Send Open Application
                <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}