
import { Metadata } from 'next'
import Image from 'next/image'

import { Avatar } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { auth } from '@/packages/auth'
import { Button } from '@/components/ui/button'
import { EditProfile } from './credentials/edit-profile'

export const metadata: Metadata = {
  title: 'Perfil',
}

export default async function ProfilePage() {
  const session = await auth()

  if (!session || !session.user) {
    throw new Error('Invalid session data.')
  }

  const { user } = session

  return (
    <Card>
      <CardHeader>
        <CardTitle>Perfil</CardTitle>
        <CardDescription>Informações do seu perfil.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              name="name"
              id="name"
              defaultValue={user.name ?? ''}
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              defaultValue={user.email ?? ''}
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              type="text"
              id="cpf"
              defaultValue={user.cpf ?? ''}
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contato</Label>
            <Input
              type="text"
              id="contact"
              defaultValue={user.contact ?? ''}
              disabled
            />
          </div>

          <Separator />

          <EditProfile />

        </form>
      </CardContent>
    </Card>
  )
}