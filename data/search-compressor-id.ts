import { URL_API } from "@/utils/constants"

export interface CompressorLogs {
    id: number,
    name: string,
    id_model: string,
    serial_number: number
}

export async function SearchCompressorId(sessionId: string): Promise<CompressorLogs[]> {

    const res = await fetch(`${URL_API}/compressors/client/${sessionId}`)
    const resp = await res.json()

    return resp.data
}