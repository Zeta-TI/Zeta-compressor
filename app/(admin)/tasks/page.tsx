
import { Metadata } from "next"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { buscarTasks } from "./data/task"

export const metadata: Metadata = {
  title: "Tasks",
}

export const dynamic = "force-dynamic";

export default async function Tasks() {
  const tasks = await buscarTasks()


  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Lista de tarefas</h2>
            <p className="text-muted-foreground">
              Visualize o funcionamento constante dos seus compressores.
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}