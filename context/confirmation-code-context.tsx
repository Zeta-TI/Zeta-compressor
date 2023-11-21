'use client'

import ConfirmationCode from "@/controllers/confirmation-code";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ConfirmationCodeContext() {

  const router = useRouter();
  const [confirmCode, setConfirmCode] = useState('');

  const registerUser = async (e: any) => {
    e.preventDefault();
    const email: any = localStorage.getItem("emailUser");
    const resp = await ConfirmationCode(email, confirmCode)

    if (resp.ok) {
      toast.success('Confirmado com sucesso!')
      router.push("/sign-in");
    }
    if (!resp.ok) {
      toast.error('Não possível concluir sua confirmação. Tente novamente mais tarde!')
      router.push('/sign-up')
    }
  }
  
  return (
    <>
      <form onSubmit={registerUser}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Código de Confirmação<span className="text-red-600">*</span></label>
            <input id="confirmation-code" onChange={(e) => setConfirmCode(e.target.value)} type="text" className="form-input w-full text-gray-300" placeholder="Seu telefone" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button type='submit' className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Enviar</button>
          </div>
        </div>
      </form>   
    </>
  )
}