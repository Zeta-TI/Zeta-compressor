'use client'

import CompressorsClient from "@/controllers/data-compressor";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";

interface Props {
  session: any
}

interface Compressor {
  id: number,
  name: string,
  id_model: string,
  serial_number: number
}

export default function SkeletonCard( { session }: Props) {

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
    <section className="flex bg-gray-100">
          <div className="flex-grow text-gray-800">
            <main className="p-10 sm:p-10 space-y-8 ">
              <div style={{ marginBottom: '20px' }}>
                <Skeleton 
                  variant="text" 
                  width={600} 
                  height={60} 
                  animation="pulse" 
                />
                <Skeleton 
                  variant="text" 
                  width={300} 
                  height={60} 
                  animation="pulse" 
                />
                <Skeleton 
                  variant="text" 
                  width={350} 
                  height={20} 
                  animation="pulse" 
                  style={{ marginTop: '20px' }} 
                />
              </div>
              <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {
                  compressores?.map((item, index) => (
                    <div className="rounded-xl" key={index}>
                      <Skeleton 
                        variant="rectangular" 
                        width={350} 
                        height={120} 
                        animation="pulse" 
                      />
                    </div>
                  ))
                }
              </section>
            </main>
          </div>
        </section>
      
  )
}