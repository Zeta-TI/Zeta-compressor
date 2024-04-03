import { BarChart, Nfc } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function EletricalSwitching() {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Chaveamentos
        </CardTitle>
        <Nfc className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">5 chaveamentos</div>
        <p className="text-xs text-muted-foreground">
          Chaveamentos elétricos realizados
        </p>
      </CardContent>
    </Card>
  )
}