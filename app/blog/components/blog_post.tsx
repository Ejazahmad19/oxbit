'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'
import Image from 'next/image'
import Link from 'next/link'
import { blogs } from '../../lib/blogs'

type Blog = typeof blogs[0]

export default function BlogPost({ blog, related }: { blog: Blog, related: Blog[] }) {
  return (
    <div className='w-full flex flex-col gap-12'>

      <div className='mx-auto max-w-5xl px-4 sm:px-8 lg:px-12 w-full flex flex-col gap-12'>
        
        {/* LABEL + TITLE + META */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          className='flex flex-col gap-4 items-center text-center'>
          <span className='px-4 py-2 rounded-full shadow-sm text-[12px] font-bold tracking-wider bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>
            {blog.label}
          </span>
          <h1 className='text-3xl sm:text-5xl font-bold text-[var(--md-sys-color-on-background)] leading-tight'>
            {blog.title}
          </h1>
          <div className='flex items-center gap-3'>
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
              <Image src={blog.author.image} alt={blog.author.name} fill className='object-cover' />
            </div>
            <span className='text-sm font-medium text-[var(--md-sys-color-on-surface)]'>{blog.author.name}</span>
            <span className='text-[var(--md-sys-color-outline-variant)]'>•</span>
            <span className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>{blog.date}</span>
            <span className='text-[var(--md-sys-color-outline-variant)]'>•</span>
            <span className='text-sm text-[var(--md-sys-color-on-surface-variant)]'>{blog.readTime}</span>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          className='relative w-full h-64 sm:h-96 rounded-4xl shadow-lg overflow-hidden'>
          <Image src={blog.image} alt={blog.title} fill className='object-cover' />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial='hidden'
          animate='visible'>
          <BlogContent content={blog.content} />
        </motion.div>
      </div>

      {/* MORE POSTS */}
      {related.length > 0 && (
        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full flex flex-col gap-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold text-[var(--md-sys-color-on-background)]'>More Posts</h2>
            <Link
              href='/blog'
              className='flex items-center gap-1 text-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors duration-300'>
              View all
              <span className='material-symbols-outlined text-[18px]'>arrow_forward</span>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {related.map((b, i) => (
              <Link key={b.slug} href={`/blog/${b.slug}`}>
                <motion.div
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className='flex flex-col overflow-hidden rounded-4xl shadow-lg bg-[var(--md-sys-color-surface-container)] h-full'>
                  <div className='relative w-full h-42 shrink-0'>
                    <Image src={b.image} alt={b.title} fill className='object-cover' />
                  </div>
                  <div className='flex flex-col gap-2 p-4'>
                    <span className='self-start px-4 py-2 rounded-full text-[10px] font-bold tracking-wider bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'>
                      {b.label}
                    </span>
                    <h3 className='text-sm font-bold text-[var(--md-sys-color-on-surface)] line-clamp-2'>{b.title}</h3>
                    <div className='flex items-center gap-2 text-xs text-[var(--md-sys-color-on-surface-variant)]'>
                      <span>{b.date}</span>
                      <span>•</span>
                      <span>{b.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  )
}

function BlogContent({ content }: { content: string }) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // CODE BLOCK
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <div key={i} className='rounded-4xl shadow-lg overflow-hidden bg-[var(--md-sys-color-surface-container-high)] my-4'>
          {lang && (
            <div className='px-6 py-4 text-[11px] font-bold tracking-widest text-[var(--md-sys-color-on-surface-variant)] border-b border-[var(--md-sys-color-outline-variant)]'>
              {lang.toUpperCase()}
            </div>
          )}
          <pre className='p-6 overflow-x-auto text-sm text-[var(--md-sys-color-on-surface)] font-mono leading-relaxed'>
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      )
      i++
      continue
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className='text-xl font-bold text-[var(--md-sys-color-on-background)] mt-8 mb-2'>
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className='text-lg font-bold text-[var(--md-sys-color-on-surface)] mt-6 mb-2'>
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }

    // BULLET
    if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className='text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed ml-4 list-disc'>
          {line.slice(2)}
        </li>
      )
      i++
      continue
    }

    // EMPTY LINE
    if (line.trim() === '') {
      i++
      continue
    }

    // PARAGRAPH
    elements.push(
      <p key={i} className='text-md text-[var(--md-sys-color-on-surface-variant)] leading-relaxed my-2'>
        {line}
      </p>
    )
    i++
  }

  return <div className='flex flex-col gap-1'>{elements}</div>
}