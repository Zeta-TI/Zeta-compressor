import React from "react";
import { ConfirmationCodeWithEmail } from "./credentials/confirmation-code-form";
import { ResendEmailCode } from "./resend-email/resend-email-code";

export const dynamic = "force-dynamic";

export default function ConfirmationCode() {

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
              <h1 className="text-white text-2xl">Verifique seu e-mail e insira o código abaixo.</h1>
            </div>

            <div className="max-w-sm mx-auto">
              {/* FORMULÁRIO */}
              <ConfirmationCodeWithEmail />
              <ResendEmailCode />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}