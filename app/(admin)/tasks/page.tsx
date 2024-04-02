
import { Metadata } from "next"
import Image from "next/image"


import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import { buscarTasks } from "./data/task"

export const metadata: Metadata = {
  title: "Tasks",
}

// Simulate a database read for tasks.
async function getTasks() {
  try {
    // const response = await fetch('URL_DA_API_PARA_OBTENÇÃO_DAS_TAREFAS');
    // const tasks = response.data;

    const tasks = await buscarTasks()

    return tasks;
  } catch (error) {
    console.error('Erro ao obter as tarefas:', error);
    throw error;
  }
}

export default async function TaskPage() {
  const tasks = await getTasks()

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