import { BarChart } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export async function EletricalSwitching() {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Chaveamentos</CardTitle>
        <BarChart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold">
          5 chaveamentos
        </span>
        <p className="text-xs text-muted-foreground">
          Chaveamentos elétricos realizados
        </p>
      </CardContent>
    </Card>
  )
}