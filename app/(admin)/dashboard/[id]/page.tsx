
import React, { Suspense } from 'react'
import { Metadata } from 'next';
import { Loading } from '@/components/summary/loading';

import { ProgressCompressor } from '@/components/summary/progress-compressor';
import { Separator } from '@/components/ui/separator';
import { CalendarManutencion } from '@/components/summary/calendar';
import { Hero } from '@/components/summary/hero';
import { RecentSales } from '@/components/summary/recent-sales';

import { UsageTime } from './charts/usage-time';
import { OperationAccumulated } from './charts/operation-accumulated';
import { LifeCompressor } from './cards/life-compressor';

import { WorkedHours } from '@/app/(admin)/dashboard/[id]/cards/worked-hours';
import { EletricalSwitching } from '@/app/(admin)/dashboard/[id]/cards/eletrical-switching';
import { VerifyCompressor } from '@/app/(admin)/dashboard/[id]/cards/verify-compressor';

export const metadata: Metadata = {
  title: 'Dashboard',
}

interface Props {
  params: {
    id: string
  }
}

export const revalidate = 900

export default async function Compressors({ params }: Props) {

  // const session = await auth()

  // if (!session || !session.user?.id) {
  //   throw new Error('Invalid session data.')
  // }

  // const { user } = session

  // const compressorsData = await CompressorLogs(params.id)

  // console.log(compressorsData)

  return (

    <div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

        <Suspense fallback={<Loading />}>
          <EletricalSwitching />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <WorkedHours compressorId={params.id} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <LifeCompressor compressorId={params.id} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <VerifyCompressor compressorId={params.id} />
        </Suspense>

      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-6">
        <Suspense fallback={<Loading />}>
          <OperationAccumulated
            CompressorId={params.id}
          />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <UsageTime
            CompressorId={params.id}
          />
        </Suspense>
      </div>
    </div>
  )
}
