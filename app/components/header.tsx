"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from './container';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  return (

    <header className='w-full fixed top-0 left-0 z-50 border-b border-[var(--md-sys-color-outline-variant)] backdrop-blur-md'>

      {/* CUSTOM CONTAINER */}
      <Container className='py-4 flex items-center justify-between'>

        {/* LOGO */}
        <Link href='/'>
          <Image
            src='/Oxbit_Horizontal_Transparent.svg'
            width={150}
            height={50}
            alt='Oxbit Logo' />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className='hidden md:flex items-center gap-8'>
          {links.map(link => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300
                  ${isActive
                    ? 'text-[var(--md-sys-color-primary)]'
                    : 'text-[var(--md-sys-color-on-surface)] hover:text-[var(--md-sys-color-primary)]'
                  }`}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/*RIGHT SIDE */}
        <div className='flex items-center gap-3'>

          {/* CONTACT BUTTON - HIDDEN ON MOBILE */}
          <Link
            href='/contact'
            className='hidden sm:flex px-6 py-3 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-full shadow-lg transition-all duration-300 hover:scale-102 hover:brightness-105 active:scale-95 items-center gap-2 font-medium text-sm'>
            <span className='material-symbols-outlined text-[18px]' style={{ fontVariationSettings: '"FILL" 1' }}>call</span>
            Contact Us
          </Link>

          {/* HAMBURGER - MOBILE ONLY */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-full items-center'
            aria-label='Toggle menu'>
            <span className={`block w-5 h-0.5 bg-[var(--md-sys-color-on-surface)] origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--md-sys-color-on-surface)] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--md-sys-color-on-surface)] origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </Container>


      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>

        <Container className='pt-2 pb-4 flex flex-col gap-1'>

          {/* MENU ITEMS */}
          {links.map(link => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive
                    ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-primary)]'
                    : 'text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-variant)]'
                  }`}>
                {link.label}
              </Link>
            )
          })}

          {/* CONTACT BUTTON INSIDE MOBILE MENU */}
          <Link
            href='/contact'
            className='mt-2 sm:hidden px-6 py-3 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-full text-center font-medium text-sm'>
            Contact Us
          </Link>
        </Container>

      </div>

    </header>
  )
}
