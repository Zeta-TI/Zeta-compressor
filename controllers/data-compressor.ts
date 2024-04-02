import { URL_API } from "@/utils/constants"

interface Compressor {
    id: number,
    name: string,
    id_model: string,
    serial_number: number
}

export default async function CompressorsClient(session: any) {

    const res = await fetch(`${URL_API}/compressors/client/${session}`)
    const resp = await res.json()
    const compressores: Compressor[] = resp.data.map((item: any) => {
        return {
            id: item.id,
            name: item.name,
            id_model: item.id_model,
            serial_number: item.serial_number
        }
    })

    return compressores;
}

