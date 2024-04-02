
import { BarChart } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Hero() {

    return (
        <div className=''>
            <Card className='h-[320px]'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">Manutenção</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-1">
                    <span className="text-2xl font-bold">
                        Agende a melhor data para a <br /> manutenção de seu compressor.
                    </span>

                    <div className='items-center'>
                        <Button 
                            variant={'outline'}
                        >Testar mensagem</Button>
                    </div>
                </CardContent>
            </Card>
      </div>
    )
}