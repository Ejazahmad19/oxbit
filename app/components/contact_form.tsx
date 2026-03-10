'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useState } from 'react'
import Select from '../components/select'

const inputClass = `w-full px-6 py-3 rounded-4xl text-sm
  bg-[var(--md-sys-color-surface-container-high)]
  text-[var(--md-sys-color-on-surface)]
  border border-[var(--md-sys-color-outline-variant)]
  placeholder:text-[var(--md-sys-color-on-surface-variant)]
  focus:outline-none focus:border-[var(--md-sys-color-primary)]
  transition-colors duration-300`

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleSelect = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
  }

  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex-1 p-8 rounded-4xl bg-[var(--md-sys-color-surface-container)] shadow-lg'>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex flex-col items-center justify-center gap-4 h-full min-h-64 text-center'>
          <span
            className='material-symbols-outlined text-[56px] text-[var(--md-sys-color-primary)]'
            style={{ fontVariationSettings: '"FILL" 1' }}>
            check_circle
          </span>
          <h3 className='text-xl font-bold text-[var(--md-sys-color-on-surface)]'>
            Message Sent!
          </h3>
          <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] max-w-sm leading-relaxed'>
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <div className='flex flex-col gap-5'>

          {/* ROW 1 — NAME + EMAIL */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-1.5 flex-1'>
              <label className='text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]'>
                Full Name
              </label>
              <input
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='John Doe'
                className={inputClass} />
            </div>
            <div className='flex flex-col gap-1.5 flex-1'>
              <label className='text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]'>
                Email Address
              </label>
              <input
                name='email'
                type='email'
                value={form.email}
                onChange={handleChange}
                placeholder='john@example.com'
                className={inputClass} />
            </div>
          </div>

          {/* ROW 2 — PROJECT TYPE + BUDGET */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-1.5 flex-1'>
              <label className='text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]'>
                Project Type
              </label>
              <Select
                name='projectType'
                value={form.projectType}
                onChange={(val) => handleSelect('projectType', val)}
                options={['Mobile App', 'Web App', 'Website', 'Desktop App', 'Other']}
                placeholder='Select type' />
            </div>
            <div className='flex flex-col gap-1.5 flex-1'>
              <label className='text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]'>
                Budget Range
              </label>
              <Select
                name='budget'
                value={form.budget}
                onChange={(val) => handleSelect('budget', val)}
                options={['Under $500', '$500 – $1k', '$1k – $5k', '$5k – $20k', '$20k+']}
                placeholder='Select budget' />
            </div>
          </div>

          {/* MESSAGE */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-xs font-semibold text-[var(--md-sys-color-on-surface-variant)]'>
              Message
            </label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell us about your goals...'
              rows={5}
              className={`${inputClass} resize-none`} />
          </div>

          {/* SUBMIT */}
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className='w-full py-3.5 rounded-full shadow-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-semibold transition-all duration-300'>
            Submit Project Request
          </motion.button>

        </div>
      )}

    </motion.div>
  )
}