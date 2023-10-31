import React  from "react"

import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@radix-ui/themes/styles.css';

import { SkeletonTheme } from "react-loading-skeleton";
import { Theme } from '@radix-ui/themes';
import { Inter, Architects_Daughter } from 'next/font/google'

import { AuthProvider } from "@/provider/AuthProvider";
import RootProgress from "@/config-layout/nprogress";
import ConfigAos from "@/config-layout/config-aos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Compressor",
  description: "Página home do compressor inteligente"
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
  session,

}: {
  children: React.ReactNode,
  session: any
}){

  return (
    <html lang="en">
      <SkeletonTheme baseColor="#534c4c" highlightColor="#444">
        <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
          <Theme>
            <div className="flex flex-col min-h-screen overflow-hidden">
              <main className="grow">
                <ConfigAos />
                <RootProgress />
                <AuthProvider session={session}>{children}</AuthProvider>
              </main>
            </div>
          </Theme>
        </body>
      </SkeletonTheme>
    </html>
  )
}
 