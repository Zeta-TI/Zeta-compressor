import React from "react";
import { ToastContainer } from 'react-toastify';
import ConfirmationCodeContext from './../../../../context/confirmation-code-context';

export default function ConfirmCode() {

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 text-white">Verifique seu e-mail e insira o código abaixo</h1>
            </div>

            <div className="max-w-sm mx-auto">
              {/* FORMULÁRIO */}
              <ConfirmationCodeContext />
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}