'use client'

import { Calendar } from "@/components/ui/calendar"
import { URL_API } from "@/utils/constants"
import { useState } from "react"

export function CalendarManutencion() {

    const [date, setDate] = useState<Date | undefined>(new Date())

    async function handleCalendar() {
        const resp = await fetch(`${URL_API}/teste `)
    }

    return (
        <div className="items-center justify-center flex">
            <form action="" onSubmit={handleCalendar}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </form>
        </div>
    )
}