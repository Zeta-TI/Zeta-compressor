'use client'

import React, { Suspense } from 'react'
import { useRouter } from 'next/navigation'

import SessionStatus from '@/services/SessionStatus';
import Header from "../../../components/header";
import Hero from "../../../components/pages/home-page/hero-home";
import SkeletonCard from './Skeleton';
import SessionIdUser from '@/services/SessionID';
import ConfigCard from '@/components/pages/home-page/config-card';

export default function Home() {

  const session = SessionIdUser()
  const status = SessionStatus()
  const router = useRouter();

  // ---------------------------------------

  if (status === 'unauthenticated') {
    router.push('/sign-in', { scroll: false })
  }

  // ---------------------------------------

  if (status === 'authenticated') {
    return (
      <>
        <section className="flex bg-gray-100">
          <div className="flex-grow text-gray-800">
            <Header />
            <main className="p-10 sm:p-10 space-y-8 ">
              <Suspense fallback={<SkeletonCard session={session} />}>
                <Hero session={session}/>
                <ConfigCard session={session} />
              </Suspense>
            </main>
          </div>
        </section>
      </>
    )
  }
}
