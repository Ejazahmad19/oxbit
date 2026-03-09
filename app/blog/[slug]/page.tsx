import { blogs } from '../../lib/blogs'
import { notFound } from 'next/navigation'
import BlogPost from '../components/blog_post'

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = blogs.findIndex(b => b.slug === slug)
  if (index === -1) notFound()

  const blog = blogs[index]
  const related = blogs.filter((_, i) => i !== index).slice(0, 3)

  return (
    <main className='bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] flex flex-col gap-12 sm:gap-12 md:gap-16 lg:gap-20 pt-30 pb-12 sm:pb-12 md:pb-16 lg:pb-20'>
      <BlogPost blog={blog} related={related} />
    </main>
  )
}