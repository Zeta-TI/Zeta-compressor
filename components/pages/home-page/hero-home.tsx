'use client'

import { useEffect, useState } from 'react';
import CreateCompressor from './dialog-compressor';

interface Props {
  session: any
}

export default function HeroDashboard( { session }: Props) {
  const [username, setUsername] = useState()

  useEffect(() => {
    async function fetchData() {
      const SessionName = session.user.name
      setUsername(SessionName)
  } 
  fetchData()
}, [session])

  return (
    <>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Bem vindo, Dr(a) {username} <br /> ao Dashboard</h1>
          <h2 className="text-gray-600 ml-0.5">Entre no dashboard de seu compressor</h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <CreateCompressor />
        </div>
      </div>
    </>
  )
}