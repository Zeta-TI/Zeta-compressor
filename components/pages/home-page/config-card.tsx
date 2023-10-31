'use client'

import CompressorsClient from "@/controllers/data-compressor"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Props {
  session: any
}

interface Compressor {
  id: number,
  name: string,
  id_model: string,
  serial_number: number
}

export default function ConfigCard({ session }: Props) {

  const [compressores, setCompressor] = useState<Compressor[]>()

  useEffect(() => {
    async function fetchData(){
      const sessionUser = session.user.id
      const compressor = await CompressorsClient(sessionUser)

      setCompressor(compressor)
    }
      fetchData()
  }, [session.user.id])
  return (
    <>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {
          compressores?.map((item, index) => (
            <div className="flex items-center  p-10 bg-white shadow rounded-xl" key={index}>
              <div>
                <span className="block text-2xl font-bold"><Link href={`/dashboard/${item.id}`}>{item.name}</Link></span>
              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}