"use client"

import HeaderExp from '../../../../components/pages/landing-page/header-sign'

import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import ConfirmationCode from '@/controllers/confirmation-code';

export default function ConfirmCode() {

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
      <HeaderExp />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 text-white">Verifique seu e-mail e insira o código abaixo</h1>
            </div>

            <div className="max-w-sm mx-auto">
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
            </div>

          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}