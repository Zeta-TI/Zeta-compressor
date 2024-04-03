import { Heart } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CompressorLogs from '@/controllers/compressorLogs'

import { Progress } from '@/components/ui/progress'

interface Props {
  compressorId: string
}

export async function LifeCompressor({ compressorId }: Props) {

  // const resp = await CompressorLogs(compressorId)
  // const { eletricalSwitching, workedHours, on_motor } = resp

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Saúde do compressor
        </CardTitle>
        <Heart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">33%</div>
        <Progress value={33} />
        <p className="text-xs text-muted-foreground">
          Compressor encontra-se com saúde.
        </p>
      </CardContent>
    </Card>
  )
}