'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUp } from '../lib/animations'

const projects = [
  {
    title: 'Nova Finance Platform',
    description: 'A comprehensive wealth management suite handling over $2B in monthly transactions with real-time analytics.',
    image: 'https://plus.unsplash.com/premium_photo-1753093847143-379f076c1400?w=800',
    tags: ['FINTECH', 'WEB APP'],
    span: 'lg:col-span-2',
  },
  {
    title: 'Pulse Fitness Tracker',
    description: 'Precision health monitoring app for elite athletes.',
    image: 'https://images.unsplash.com/photo-1660808043575-7b11d477c337?w=800',
    tags: ['HEALTH', 'iOS'],
    span: 'lg:col-span-1',
  },
  {
    title: 'Vertex Cloud Suite',
    description: 'Next-gen infrastructure management for devops teams.',
    image: 'https://images.unsplash.com/photo-1649877508777-1554357604eb?w=800',
    tags: ['SAAS', 'UX'],
    span: 'lg:col-span-1',
  },
  {
    title: 'Orbit Design System',
    description: 'A comprehensive design system used across 12 products.',
    image: 'https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?w=800',
    tags: ['DESIGN', 'WEB'],
    span: 'lg:col-span-2',
  },
]

// Returns the order of projects starting from offset
function getOrder(offset: number) {
  return [0, 1, 2, 3].map(i => (i + offset) % 4)
}

export default function OurWork() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
            Our Work
          </h2>
          <Link
            href='/work'
            className='flex items-center gap-1 text-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-200'>
            View Archive
            <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
          </Link>
        </motion.div>

        {/* GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`${project.span} flex flex-col rounded-4xl overflow-hidden bg-[var(--md-sys-color-surface-container-lowest)] shadow-lg`}>

              {/* IMAGE */}
              <div className='relative w-full h-48 sm:h-75'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover' />
              </div>

              {/* CONTENT */}
              <div className='flex flex-col gap-3 p-5'>

                {/* TAGS */}
                <div className='flex items-center gap-2 flex-wrap'>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className='px-4 py-2 rounded-full shadow-sm text-[10px] font-semibold tracking-wider bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                  {project.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}