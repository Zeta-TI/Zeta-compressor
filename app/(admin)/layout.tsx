import React from "react"
import { Header } from "@/components/header-dashboard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">{children}</div>
    </div>
  )
}
