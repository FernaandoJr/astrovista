import { MediaType } from '@/lib/types/mediaType'
import { Options } from 'nuqs'
import { ChangeEvent } from 'react'

interface nuqsHandler {
  e: ChangeEvent<HTMLInputElement>
  setValue: setValue
}

type fieldValuesType = string | MediaType

type setValue = (
  value: string | ((old: fieldValuesType | null) => fieldValuesType | null) | null,
  options?: Options,
) => Promise<URLSearchParams>

export function nuqsHandler(e: unknown, setValue: setValue) {
  if (e === '') {
    setValue(null)
  }

  if (typeof e === 'string') {
    setValue(e)
  }
}
