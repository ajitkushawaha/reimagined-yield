"use client"

import React from "react"
import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {

  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-inter">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="bg-black">
        {children}
      </main>

      <Footer />
    </div>
  )
}
