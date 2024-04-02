import React from "react"

import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';

import { Toaster } from "../components/ui/toaster";
import { Inter, Architects_Daughter } from 'next/font/google'

import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: '%s | Zeta',
    absolute: 'Zeta',
  },
  description: 'The all-in-one video solution for online learning.',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (

    <html lang="pt" className={`${inter.variable} ${architects_daughter}`} >
      <body className="antialiased bg-gray-900 text-gray-200 tracking-tight">
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="grow">
              {children}
              <Toaster />
            </main>
          </div>
        </Providers>
      </body>
    </html>

  )
}
