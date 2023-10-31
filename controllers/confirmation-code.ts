import { URL_API } from "../utils/constants"; 

export default async function ConfirmationCode(email: string, confirmCode:string) {

  const res = await fetch(`${URL_API}/clients/auth/confirmation-email`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      confirmationCode: confirmCode,
    }),
  });
  
  return res

}