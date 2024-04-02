import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { EditProfileWithData } from "../actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function EditProfile() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Edit className="mr-2 size-4" />
                    Atualizar seu perfil
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-medium text-zinc-950 dark:text-zinc-100">Atualize seus dados</DialogTitle>
                    <DialogDescription className="font-normal text-zinc-800 dark:text-zinc-200">
                        Vincule seu novo compressor ao modelo dele.
                    </DialogDescription>
                </DialogHeader>
                <form action={EditProfileWithData} method="POST" id="create-compressor">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className='dark:text-white text-black' htmlFor="name">Nome</Label>
                            <Input
                                className="border-r dark:border-white dark:text-white border-black text-black col-span-3"
                                name="name"
                                id="name"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className='dark:text-white text-black' htmlFor="email">E-mail</Label>
                            <Input
                                className="border-r dark:border-white dark:text-white border-black text-black col-span-3"
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className='dark:text-white text-black' htmlFor="email">CPF</Label>
                            <Input
                                className="border-r dark:border-white dark:text-white border-black text-black col-span-3"
                                name="cpf"
                                id="cpf"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className='dark:text-white text-black' htmlFor="email">Contato</Label>
                            <Input
                                className="border-r dark:border-white dark:text-white border-black text-black col-span-3"
                                name="contact"
                                id="contact"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex">
                        <Button type="submit" className="ml-auto">Salvar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>

    )
}