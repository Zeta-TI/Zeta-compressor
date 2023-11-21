'use client'

import { useSession } from 'next-auth/react';

export default function PersonalInformationContext() {

  const { data: session } = useSession()
  
  return (
    <div>
      <li className="flex border-y py-2">
        <span className="font-bold w-24">Nome:</span>
        <span className="text-gray-700">{session?.user.name}</span>
      </li>
      <li className="flex border-b py-2">
        <span className="font-bold w-24">Telefone:</span>
        <span className="text-gray-700">{session?.user.contact}</span>
      </li>
      <li className="flex border-b py-2">
        <span className="font-bold w-24">Email:</span>
        <span className="text-gray-700">{session?.user.email}</span>
      </li>
      <li className="flex border-b py-2">
        <span className="font-bold w-24">CPF:</span>
        <span className="text-gray-700">{session?.user.cpf}</span>
      </li>
    </div>
  )
}