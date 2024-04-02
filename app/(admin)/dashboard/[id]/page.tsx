
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
import DashboardSwitcher from '@/components/summary/dashboards-switcher';
import { auth } from '../../../../packages/auth';
import CompressorLogs from '@/controllers/compressorLogs';
import { CalendarDateRangePicker } from '@/components/header-dashboard/date-range-picker';

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
    <>
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      {/* <DashboardSwitcher /> */}
      <CalendarDateRangePicker />
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2">
          <Suspense fallback={<Loading />}>
            <EletricalSwitching />
          </Suspense>
        </div>
        <div className="col-span-2">
          <Suspense fallback={<Loading />}>
            <WorkedHours compressorId={params.id} />
          </Suspense>
        </div>
        <div className="col-span-2">
          <Suspense fallback={<Loading />}>
            <LifeCompressor compressorId={params.id} />
          </Suspense>
        </div>

        <div className="col-span-2">
          <Suspense fallback={<Loading />}>
            <VerifyCompressor compressorId={params.id} />
          </Suspense>
        </div>

        <Separator className='col-span-8' />
      </div>

      <div className='mx-auto items-center justify-center mt-4 mb-4'>
        <Suspense fallback={<Loading />}>
          <RecentSales />
        </Suspense>
      </div>

      <div className="grid grid-cols-8 gap-4">

        <Separator className='col-span-8' />

        <div className='col-span-4 mt-4'>
          <Suspense fallback={<Loading />}>
            <OperationAccumulated
              CompressorId={params.id}
            />
          </Suspense>
        </div>

        <div className='col-span-4 mt-4'>
          <Suspense fallback={<Loading />}>
            <UsageTime
              CompressorId={params.id}
            />
          </Suspense>
        </div>

        {/* <Separator className='col-span-8' /> */}

        {/* <div className='col-span-4 mt-4'>
          <Suspense fallback={<Loading />}>
            <CalendarManutencion />
          </Suspense>
        </div>

        <div className='col-span-4 mt-4'>
          <Suspense fallback={<Loading />}>
            <Hero />
          </Suspense>
        </div> */}

      </div>
    </>
  )
}
