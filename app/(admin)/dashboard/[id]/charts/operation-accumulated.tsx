
import { Eye } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { URL_API } from '@/utils/constants'

const OperationAccumulatedChart = dynamic(() => import('./operation-accumulated-chart'), {
  ssr: false,
})

interface Props {
  CompressorId: string;
}

function analisarDados(dados: any[]) {

  const chaves = Object.keys(dados);
  const valores = Object.values(dados);

  const arrayDeDatasFormatadas = chaves.map(data => {
    const [ano, mes, dia] = data.split('T')[0].split('-'); // Divide a parte da data no caractere '-'
    return `${dia}-${mes}-${ano}`; // Reorganiza as partes no formato 'DD-MM-YYYY'
  });

  // Extrair apenas os minutos
  const arrayMinutos = valores.map(valor => valor.split(':')[1]);
  const arrayDeValores = arrayMinutos.map(valor => parseInt(valor, 10))

  // Extrair apenas as horas
  // const arrayDeValores = valores.map(valor => valor.split(':')[0]);

  return {
    arrayDeDatasFormatadas,
    arrayDeValores
  }
}

export async function OperationAccumulated({ CompressorId }: Props) {

  const resp = await fetch(`${URL_API}/compressors/${CompressorId}/logs`, {
    next: {
      revalidate: 300,
    },
  })

  if (!resp.ok) {
    throw new Error('Failed to fetch data')
  }
  const resposta = await resp.json()

  const { daily_runtime_accumulated, daily_runtime } = resposta

  // const arrayDailyRuntimeAccumulated = analisarDados(daily_runtime_accumulated);
  // const arrayDailyRuntimes = analisarDados(daily_runtime);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          Tempo de Operação Acumulado{' '}
          <span className="text-xs text-muted-foreground">(em minutos)</span>
        </CardTitle>
        <Eye className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="h-[250px] p-0">
        <OperationAccumulatedChart accumulated={[40, 30, 40, 10, 20, 50, 30]}
          date={['15-03-2024, 17:00', '20', '10', '3', '1', '7', '20']} />
      </CardContent>
    </Card>
  )
}