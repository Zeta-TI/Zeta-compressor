'use client'

import createUser from "@/controllers/createUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUpContext() {

  const router = useRouter();

  // variáveis utilizadas

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e: any) => {
    e.preventDefault();

    const resp = await createUser(name, email, cpf, password, contact )

    if(resp.status === 404){
      toast.error('Não foi possível realizar o cadastro. Tente novamente')
    }
    if (resp.ok) {
      router.push("/signup/confirmCode");
    }
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nome<span className="text-red-600">*</span></label>
            <input id="full-name" onChange={(e) => setName(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Primeiro nome e sobrenome" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-300" placeholder="you@gmail.com" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Cpf <span className="text-red-600">*</span></label>
            <input id="company-name" onChange={(e) => setCpf(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu CPF" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Telefone <span className="text-red-600">*</span></label>
            <input id="company-name" onChange={(e) => setContact(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu telefone" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className="form-input w-full text-gray-300" placeholder="Senha (10 caracteres)" required />
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center">
          Concordo em ser contatado pela Zeta Tecnologia sobre esta oferta de acordo com a Política de Privacidade da Zeta. <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Política de Privacidade</Link>.
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button type='submit' className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
          </div>
        </div>
      </form>
    
    </>
  )
}