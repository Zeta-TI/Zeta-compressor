import { Wrench } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CompressorLogs from '@/controllers/compressorLogs'

interface Props {
  compressorId: string
}

export async function WorkedHours({ compressorId }: Props) {

  // const resp = await CompressorLogs(compressorId)
  // const { eletricalSwitching, workedHours, on_motor } = resp

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Horas Trabalhadas</CardTitle>
        <Wrench className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold">
          08:52
        </span>
        <p className="text-xs text-muted-foreground">
          Horas trabalhadas pelo compressor
        </p>
      </CardContent>
    </Card>
  )
}