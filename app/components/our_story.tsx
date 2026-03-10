'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import Image from 'next/image'

export default function OurStory() {
    return (
        <section>
            <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12'>
                <div className='flex flex-col lg:flex-row items-center gap-12'>

                    {/* LEFT — IMAGE */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className='relative w-full lg:w-1/2 h-72 sm:h-96 rounded-4xl overflow-hidden shadow-lg shrink-0'>
                        <Image
                            src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
                            alt='Our story'
                            fill
                            className='object-cover' />
                    </motion.div>

                    {/* RIGHT — TEXT */}
                    <div className='flex flex-col gap-6 flex-1'>
                        <motion.h2
                            custom={1}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-background)]'>
                            Our Story
                        </motion.h2>

                        <motion.p
                            custom={2}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            Oxbit started with a simple mission: to bridge the gap between complex engineering and intuitive user experiences. Founded by developers, we prioritize clean code and robust architecture in every project we touch.
                        </motion.p>

                        <motion.p
                            custom={3}
                            variants={fadeUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed'>
                            We believe that great software isn't just about features — it's about building a foundation that allows businesses to scale without friction. Today, we're a global team of specialists dedicated to engineering excellence.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}