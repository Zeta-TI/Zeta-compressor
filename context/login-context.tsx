'use client'

import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export default function LoginContext() {

  const router = useRouter();
  // =========================================== 

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e: any) => {
    e.preventDefault();
    signIn('credentials', {
      ...data,
      redirect: false,
    })

      toast.success('Logado com sucesso!')
      router.push('/home', { scroll: false });
  }
  return (
    
    <>
      <form onSubmit={loginUser} className='space-y-6'>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">

            <label className=" text-sm font-medium text-gray-300 block" htmlFor="email">Email</label>
            <input name='email' id="email" type="text" onChange={(e) => {
              setData({ ...data, email: e.target.value })
            }} className="form-input w-full text-gray-300" placeholder="you@gmail.com" required />

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Senha</label>
            <input name='password' id="password" type="password" onChange={(e) => {
              setData({ ...data, password: e.target.value })
            }} className="form-input w-full text-gray-300" placeholder="Senha (pelo menos 10 caracteres)" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <div className="flex justify-between">
              <Link href="#" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Esqueceu sua senha?</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button
              type='submit'
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
          </div>
        </div>
      </form>
    </>
  )
}