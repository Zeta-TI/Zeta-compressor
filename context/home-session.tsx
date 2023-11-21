'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

import Hero from "@/components/pages/home-page/hero-home";
import ConfigCard from '@/components/pages/home-page/config-card';

export default function SessionHome() {
  const { data: session, status } = useSession()
  const router = useRouter();

  // ---------------------------------------

  if (status === 'unauthenticated') {
    router.push('/sign-in', { scroll: false })
  }

  // ---------------------------------------

  if (status === 'authenticated') {
    return (
      <section className="flex bg-gray-100">
        <div className="flex-grow text-gray-800">
          <main className="p-10 sm:p-10 space-y-8 ">
            <Hero session={session}/>
            <ConfigCard session={session} />
          </main>
        </div>
      </section>
    )
  }
}
