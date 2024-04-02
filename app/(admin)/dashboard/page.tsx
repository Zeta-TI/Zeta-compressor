
import Link from "next/link";
import { BarChart } from 'lucide-react'

import { auth } from '../../../packages/auth'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button";

import { SearchCompressorId } from "@/data/search-compressor-id";

export default async function Dashboard() {

    const session = await auth()

    if (!session || !session.user?.id) {
        throw new Error('Invalid session data.')
    }

    const { user } = session

    const compressorLogs = await SearchCompressorId(user.id as string)

    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Bem vindo, Dr(a) {user.name}</h2>
            <div className="grid grid-cols-8 gap-4">

                {compressorLogs && compressorLogs.map((item, index) => (
                    <div className="col-span-2" key={index}>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">{item.name}</CardTitle>
                                <BarChart className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="space-y-1">
                                <span className="text-2xl font-bold">
                                    Serial: {item.serial_number}
                                </span>
                                <div className="p-4">
                                    <Button
                                        type="submit"
                                        variant={"outline"}
                                        className=""
                                    >
                                        <Link href={`dashboard/${item.id}`}>Dashboard</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )

}