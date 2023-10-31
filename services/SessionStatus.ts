'use client'

import { useSession } from "next-auth/react"

export default function SessionStatus() {
  const { status } = useSession()
  return status;
}