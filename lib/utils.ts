/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parse, setDate } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const updateDatePart = (month: Date, newDay: Date): Date => {
  return setDate(month, newDay.getDate())
}
