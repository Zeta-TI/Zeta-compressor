import { redirect } from 'next/navigation'

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  return redirect('/settings/profile')
}