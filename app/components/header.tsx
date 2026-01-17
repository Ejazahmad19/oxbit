import React from 'react'
import Image from "next/image";

export default function Header() {
  return (
    <header className='w-full p-8 flex items-center justify-between fixed bg-[var(--md-sys-color-surface)]'>

      <Image
        src="/LogoTransparent.svg"
        width={60}
        height={60}
        alt="Oxbit Logo"/>

      <button className='px-6 py-3 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center gap-2 font-medium'>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>call</span>
        Contact Us
      </button>

    </header>
  )
}
