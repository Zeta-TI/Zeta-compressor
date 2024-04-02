import { HardDrive, Wrench, Heart } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Progress } from "@/components/ui/progress"

interface Props {
  compressorId: string
}

export async function ProgressCompressor({ compressorId }: Props) {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Saúde do Compressor</CardTitle>
        <Heart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold">
          33%
        </span>
        <Progress value={33} />
      </CardContent>
    </Card>
  )
}