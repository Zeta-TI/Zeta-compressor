'use client'
import LineChart from "./line-chart";
import AreaChart from "./area-chart";
import { useEffect, useState } from "react";
import CompressorLogs from "@/controllers/compressorLogs";

interface Logs {
  dates: string[],
  runtimes: number[]
}

interface UserCompressor {
  idCompressor: string
}

export default function GraficosDashboard( { idCompressor }: UserCompressor) {

  const compressorId: string = idCompressor
  const [dailyDate, setDailyDate] = useState()
  const [dailyValue, setDailyValue] = useState()

  const [accumulatedDate, setAccumulatedDate] = useState<any[]>()
  const [accumulatedValue, setAccumulatedValue] = useState<any[]>()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await CompressorLogs(compressorId)
      const arrayDailyDates: any = resp.arrayDailyRuntimes.arrayDeDatasFormatadas
      const arrayDailyValues: any = resp.arrayDailyRuntimes.arrayDeValores

      const arrayAccumulatedDates: any = resp.arrayDailyRuntimeAccumulated.arrayDeDatasFormatadas
      const arrayAccumulatedValues: any = resp.arrayDailyRuntimeAccumulated.arrayDeValores

      setDailyDate(arrayDailyDates)
      setDailyValue(arrayDailyValues)

      setAccumulatedDate(arrayAccumulatedDates)
      setAccumulatedValue(arrayAccumulatedValues)

    };
    fetchData();
  }, [compressorId]);

  return (
    <>
      <section className="grid gap-20">
        <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Tempo de operação acumulado</div>
              <div className="p-2 max-w-full mx-auto md:max-w-none h-auto">
                <AreaChart accumulated={accumulatedValue} date={accumulatedDate} />
              </div>
            </div>
          </div>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Tempo de utilização por hora</div>
              <div className="p-2 max-w-full mx-auto md:max-w-none h-auto">
                <LineChart daily_runtime={dailyValue} log_date={dailyDate} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}