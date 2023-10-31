import { URL_API } from "@/utils/constants";

export default async function createUser(name: string, email: string, cpf: string, password: string, contact: string) {

  const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN;
  const region = process.env.NEXT_PUBLIC_AWS_REGION ?? '';

  const res = await fetch(`${URL_API}/clients`, {
    method: 'POST',
    headers: {
      'Content-type': 'application-json',
      "region": region ?? '',
      "origin": Origin ?? ''
    },

    body: JSON.stringify({
      name,
      email,
      cpf,
      password,
      contact: '+55' + contact,
    })
  });

  return res

}