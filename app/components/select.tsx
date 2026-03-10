'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  name: string
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
}

export default function Select({ name, value, onChange, options, placeholder }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className='relative w-full'>

      {/* TRIGGER */}
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        className='w-full flex items-center justify-between px-6 py-3 rounded-4xl text-sm
          bg-[var(--md-sys-color-surface-container-high)]
          text-[var(--md-sys-color-on-surface)]
          border border-[var(--md-sys-color-outline-variant)]
          focus:outline-none focus:border-[var(--md-sys-color-primary)]
          transition-colors duration-300'>
        <span className={value ? '' : 'text-[var(--md-sys-color-on-surface-variant)]'}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className='material-symbols-outlined text-[18px] text-[var(--md-sys-color-on-surface-variant)] shrink-0'>
          keyboard_arrow_down
        </motion.span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className='absolute z-50 top-full mt-2 w-full rounded-4xl overflow-hidden shadow-lg
              bg-[var(--md-sys-color-surface-container-high)]
              border border-[var(--md-sys-color-outline-variant)]'>
            {options.map(option => (
              <button
                key={option}
                type='button'
                onClick={() => { onChange(option); setOpen(false) }}
                className={`w-full text-left px-6 py-3 text-sm transition-colors duration-300
                  hover:bg-[var(--md-sys-color-surface-container-highest)]
                  ${value === option
                    ? 'text-[var(--md-sys-color-primary)] font-semibold'
                    : 'text-[var(--md-sys-color-on-surface)]'
                  }`}>
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}