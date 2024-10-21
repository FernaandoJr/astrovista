import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ButtonLink({ path, name }: { path: string; name: string }): JSX.Element {
  return (
    <Button asChild variant="link">
      <Link href={path}>{name}</Link>
    </Button>
  )
}
