'use client'

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle } from "lucide-react"

const compressorDataSchema = z.object({
    name: z.string(),
    model: z.string(),
    serial: z.coerce.number()
})

type CompressorsSchema = z.infer<typeof compressorDataSchema>

export function CreateCompressorDialog() {

    const { register, handleSubmit } = useForm<CompressorsSchema>({
        resolver: zodResolver(compressorDataSchema)
    })

    function handleCreateCompressor(data: CompressorsSchema) {
        console.log(data)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button>
                        <PlusCircle className="mr-2 size-4" />
                        Criar compressor
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-medium text-zinc-950 dark:text-zinc-100">Crie um novo compressor</DialogTitle>
                    <DialogDescription className="font-normal text-zinc-800 dark:text-zinc-200">
                        Vincule seu novo compressor ao modelo dele.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCreateCompressor)} id="create-compressor">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nome
                            </Label>
                            <Input
                                className="col-span-3"
                                {...register('name')}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Modelo
                            </Label>
                            <Input
                                className="col-span-3"
                                {...register('model')}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                className="col-span-3"
                                {...register('serial')}
                            />
                        </div>
                    </div>

                    <div className="flex">
                        <Button type="submit" className="ml-auto" >Salvar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>

    )
}