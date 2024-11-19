"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { updateDatePart } from "@/lib/utils"

export default function SampleDatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="w-full mt-24 absolute pr-1 sm:pr-4  ">
      <DatePicker className="w-[100px] sm:w-1/4 lg:w-48" date={date} setDate={setDate} />
    </div>
  )
}

type DatePickerProps = {
  className: string
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const DatePicker = ({ className, date, setDate }: DatePickerProps) => {
  const [month, setMonth] = useState<Date | undefined>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn("overflow-hidden   dark:text-white", !date && "text-muted-foreground", className)}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? <span>{window.innerWidth > 1024 ? format(updateDatePart(month as Date, date), "PPP") : format(updateDatePart(month as Date, date), "d MMM")}</span> : <span className="hidden sm:block">Pick a date</span>}
          <ChevronsUpDown className="sm:ml-2 h-4 w-4 shrink-0 opacity-50 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          month={month}
          onMonthChange={(month) => setMonth(month)}
          selected={date}
          onSelect={(e) => {
            setDate(e)
            setIsCalendarOpen(false)
          }}
          initialFocus
          captionLayout="dropdown-buttons"
          fromYear={1990}
          toYear={2025}
        />
      </PopoverContent>
    </Popover>
  )
}
