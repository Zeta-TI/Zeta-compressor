'use client'

import TableDashboard from "../../materialUi/Table"
import { ButtonMotor } from "./button-motor";
import { useState, useEffect } from "react";
import CompressorLogs from "@/controllers/compressorLogs";
import SpinnerPercent from './spinner-percent';
import { Session } from "next-auth";
import SearchCompressor from "@/controllers/search-compressor";


interface UserCompressor {
  idCompressor: string,
  session: Session,
}

export default function DadosCompressor({ idCompressor, session }:UserCompressor ) {

  const compressorId = idCompressor
  const [IsActive, setActive] = useState<boolean>()

  const [nameCompressor, setNameCompressor] = useState<any>()
  const [serialCompressor, setSerialCompressor] = useState<any>()
  const [percent_lifespan, setLifespan] = useState<any>()

  useEffect(() => {
    async function fetchData() {
      const compressor = await SearchCompressor(compressorId)
      
      setNameCompressor(compressor.name)
      setSerialCompressor(compressor.serial_number)

      // ----------------------------------------- 

      const res = await CompressorLogs(compressorId)
      const percent_lifespans: number = res.percent_lifespan
      const verify: boolean = res.on_motor;

      setLifespan(percent_lifespans)
      setActive(verify)
    };
    fetchData();
  }, [compressorId, session.user.id]);

  return (
    <>
      <section className="grid gap-20">
        <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Dados do compressor</div>
              <div className="p-2 max-w-full mx-auto md:max-w-none h-auto">
                <TableDashboard name={nameCompressor} serial_number={serialCompressor} />
              </div>
            </div>
          </div>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto sm:col-span-2 md:col-span-6 lg:col-span-6 mb-10 bg-white shadow rounded-lg">
            <div className='md:pr-4 lg:pr-12 xl:pr-16'>
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Vida do compressor</div>
              <div className="p-4 max-w-full mx-auto md:max-w-none h-auto">
                <SpinnerPercent value={percent_lifespan} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


