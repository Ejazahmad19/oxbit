'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { team } from '../lib/team'
import Image from 'next/image'

export default function TheTeam() {
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
            The Team
          </h2>
        </motion.div>

        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className='flex flex-col items-center gap-4 p-8 rounded-4xl bg-[var(--md-sys-color-tertiary-container)] shadow-md text-center'>
              <div className='relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-[var(--md-sys-color-tertiary)] ring-offset-2 ring-offset-[var(--md-sys-color-surface-container-lowest)]'>
                <Image src={member.image} alt={member.name} fill className='object-cover' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-sm font-bold text-[var(--md-sys-color-on-tertiary-container)]'>
                  {member.name}
                </h3>
                <span className='text-xs font-medium text-[var(--md-sys-color-tertiary)]'>
                  {member.role}
                </span>
              </div>
              <p className='text-xs text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}