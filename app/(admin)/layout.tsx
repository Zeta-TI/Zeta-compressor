import React  from "react"


import { Metadata } from "next";

import Header from "../../components/header";

export default function AdminLayout({children}: {children: React.ReactNode}) {

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
 