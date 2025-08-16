import { Options } from 'nuqs'
import { ChangeEvent } from 'react'

interface nuqsHandler {
  e: ChangeEvent<HTMLInputElement>
  setValue: setValue
}

type setValue = (
  value: string | ((old: string | null) => string | null) | null,
  options?: Options,
) => Promise<URLSearchParams>

export function nuqsHandler(e: ChangeEvent<HTMLInputElement>, setValue: setValue) {
  const { value } = e.target
  if (value === '') {
    setValue(null)
  }
  setValue(value)
}
