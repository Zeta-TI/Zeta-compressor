import { HardDrive, HardDriveDownload, Wrench } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CompressorLogs from '@/controllers/compressorLogs'

interface Props {
  compressorId: string
}

export async function VerifyCompressor({ compressorId }: Props) {

  // const resp = await CompressorLogs(compressorId)
  // const { eletricalSwitching, workedHours, on_motor } = resp

  const motor = false

  return (
    <Card data-state={motor} className=' group data-[state=true]:bg-blue-400 data-[state=false]:bg-white data-[state=true]:dark:bg-blue-600'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Compressor</CardTitle>
        <HardDriveDownload className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold">
          {motor ? 'Ligado' : 'Desligado'}
        </span>
        <p className="text-xs text-muted-foreground">
          { motor ?  'Compressor encontra-se em funcionamento.' : 'Compressor encontra-se desligado.'}
        </p>
      </CardContent>
    </Card>
  )
}