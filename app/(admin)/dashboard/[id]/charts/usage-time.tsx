
import { Eye } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { URL_API } from '@/utils/constants'

const UsageTimeChart = dynamic(() => import('./usage-time-chart'), {
  ssr: false,
})

interface Props {
  CompressorId: string;
}

export async function UsageTime({ CompressorId }: Props) {

  const resp = await fetch(`${URL_API}/compressors/${CompressorId}/logs`, {
    next: {
      revalidate: 300,
    },
  })

  if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }
  const resposta = await resp.json()

  // const { arrayDeDatasFormatadas, arrayDeValores } = resposta.arrayDailyRuntimes
  // const { arrayDatasFormatadas, arrayValores } = resposta.arrayDailyRuntimeAccumulated

  return (
    <Card className='col-span-2'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          Tempo de Operação Acumulado{' '}
          <span className="text-xs text-muted-foreground">(por dia)</span>
        </CardTitle>
        <Eye className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="h-[350px] p-0">
        <UsageTimeChart accumulated={[40, 30, 40, 10, 20, 50, 30, 20, 50, 90]}
          date={['07 Mar', '10 Mar', '12 Mar', '15 Mar', '20 Mar', '21 Mar', '23 Mar', '25 Mar', '27 Mar', '28 Mar']} />
      </CardContent>
    </Card>
  )
}