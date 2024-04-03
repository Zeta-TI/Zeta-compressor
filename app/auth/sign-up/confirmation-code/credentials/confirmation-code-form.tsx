'use client'

import { toast } from "sonner";
import { ConfirmationCodeAction } from "../actions";
import { ConfirmationCodeButton } from "./button-confirmation-code";
import { InputsForm } from "./inputs";

export function ConfirmationCodeWithEmail() {
    return (
        <form
            action={
                async (FormData) => {
                    const res = await ConfirmationCodeAction(FormData)

                    if (res) {
                        toast.success('Confirmação realizada com sucesso!')
                    }

                    toast.error('Não foi possível realizar a confirmação. Tente novamente mais tade!')
                }
            }
        >
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <InputsForm />
                    <ConfirmationCodeButton />
                </div>
            </div>
        </form>
    )
}