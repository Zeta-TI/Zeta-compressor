'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Card from '../../../../components/pages/dashboard/card-dashboard'
import DadosCompressor from "../../../../components/pages/dashboard/dados-compressor";
import Grafico from "../../../../components/pages/dashboard/Charts";

import SessionStatus from '@/services/session-status';
import SessionIdUser from '@/services/session-id';

export default function Dashboard({ params }: any) {

  const status = SessionStatus()
  const session: any = SessionIdUser()
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
            <main className="p-6 sm:p-12 space-y-6 ">
                <Card 
                    idCompressor={params.id} 
                />
                <DadosCompressor 
                    idCompressor={params.id}
                    session={session}
                />
                <Grafico 
                    idCompressor={params.id} 
                />
            </main>
          </div>
        </section>
      </>
    )
  }
}
