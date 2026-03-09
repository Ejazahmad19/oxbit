'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUp } from '../lib/animations'
import { projects } from '../lib/projects'

export default function OurWork() {
  return (
    <section>
      <motion.div
        custom={0}
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>

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
        <div className='grid gap-4 lg:grid-cols-3 lg:grid-rows-2'>

          {/* CARD 0 — tall left, spans 2 rows */}
          {projects[0] && (
            <Link href={`/work/${projects[0].slug}`} className='relative lg:row-span-2'>
              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                custom={0}
                className='relative flex h-full flex-col overflow-hidden rounded-[calc(2rem+1px)] shadow-md'>
                <div className='relative w-full flex-1 min-h-64'>
                  <Image src={projects[0].image} alt={projects[0].title} fill className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 p-6'>
                  <div className='flex gap-2 flex-wrap'>
                    {projects[0].tags.map(tag => (
                      <span key={tag} className='px-3 py-1 rounded-full text-[10px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                    ))}
                  </div>
                  <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>{projects[0].title}</h3>
                  <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>{projects[0].description}</p>
                </div>
              </motion.div>
            </Link>
          )}

          {/* CARD 1 — top middle */}
          {projects[1] && (
            <Link href={`/work/${projects[1].slug}`} className='relative max-lg:row-start-1'>
              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                custom={1}
                className='relative flex h-full flex-col overflow-hidden rounded-[calc(2rem+1px)] shadow-md'>
                <div className='relative w-full flex-1 min-h-48'>
                  <Image src={projects[1].image} alt={projects[1].title} fill className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 p-6'>
                  <div className='flex gap-2 flex-wrap'>
                    {projects[1].tags.map(tag => (
                      <span key={tag} className='px-3 py-1 rounded-full text-[10px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                    ))}
                  </div>
                  <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>{projects[1].title}</h3>
                  <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2'>{projects[1].description}</p>
                </div>
              </motion.div>
            </Link>
          )}

          {/* CARD 2 — top right, spans 2 rows */}
          {projects[2] && (
            <Link href={`/work/${projects[2].slug}`} className='relative lg:row-span-2'>
              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                custom={2}
                className='relative flex h-full flex-col overflow-hidden rounded-[calc(2rem+1px)] shadow-md'>
                <div className='relative w-full flex-1 min-h-64'>
                  <Image src={projects[2].image} alt={projects[2].title} fill className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 p-6'>
                  <div className='flex gap-2 flex-wrap'>
                    {projects[2].tags.map(tag => (
                      <span key={tag} className='px-3 py-1 rounded-full text-[10px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                    ))}
                  </div>
                  <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>{projects[2].title}</h3>
                  <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>{projects[2].description}</p>
                </div>
              </motion.div>
            </Link>
          )}

          {/* CARD 3 — bottom middle */}
          {projects[3] && (
            <Link href={`/work/${projects[3].slug}`} className='relative lg:col-start-2 lg:row-start-2'>
              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                custom={3}
                className='relative flex h-full flex-col overflow-hidden rounded-[calc(2rem+1px)] shadow-md'>
                <div className='relative w-full flex-1 min-h-48'>
                  <Image src={projects[3].image} alt={projects[3].title} fill className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 p-6'>
                  <div className='flex gap-2 flex-wrap'>
                    {projects[3].tags.map(tag => (
                      <span key={tag} className='px-3 py-1 rounded-full text-[10px] font-semibold bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>{tag}</span>
                    ))}
                  </div>
                  <h3 className='text-base font-bold text-[var(--md-sys-color-on-surface)]'>{projects[3].title}</h3>
                  <p className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed line-clamp-2'>{projects[3].description}</p>
                </div>
              </motion.div>
            </Link>
          )}

        </div>

      </motion.div>
    </section>
  )
}