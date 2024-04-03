import Link from "next/link";
import { Nfc } from 'lucide-react'

import { SearchCompressorId } from "@/data/search-compressor-id";
import { auth } from '../../../packages/auth'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function Dashboard() {

    const session = await auth()

    if (!session || !session.user?.id) {
        throw new Error('Invalid session data.')
    }

    const { user } = session

    const compressorLogs = await SearchCompressorId(user.id as string)

    return (
        <div>
            <div className="w-full max-w-6xl gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Bem vindo Dr(a) {session.user.name}</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-2">

                {compressorLogs && compressorLogs.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {item.name}
                            </CardTitle>
                            <Nfc className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Serial: {item.serial_number}</div>
                            <Button
                                type="submit"
                                variant={"outline"}
                            >
                                <Link href={`dashboard/${item.id}`}>Dashboard</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )

}