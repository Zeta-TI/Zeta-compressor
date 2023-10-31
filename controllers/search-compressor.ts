import { URL_API } from "../utils/constants"

export default async function SearchCompressor( idCompressor: any) {

    const res = await fetch(`${URL_API}/compressors/${idCompressor}`)
    const resp = await res.json()
    const dados = resp.data

    return dados;
}
