'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import LoginContext from "./login-context";

export default function StatusLoginContext() {

  const { status } = useSession()
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/home')
  }

  if (status === 'unauthenticated') {
    return (
      <>
        <div>
          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 shadowrounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20 p-6 sm:p-8 lg:p-16 space-y-8">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
                  <h1 className="h2 text-gray-100 mt-10">Bem vindo de volta! Efetue seu Login abaixo.</h1>
                </div>
                {/* Form */}
                <div className="max-w-sm mx-auto">
                  {/* FORMULARIO */}
                  <LoginContext />
                  <div className="text-gray-400 text-center mt-6">
                    Você não tem uma conta? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </section>
        </div>
      </>
    );
  }
}