import { PlusIcon } from "lucide-react"
import { MajorTagProps } from "./types"
import { cn } from "@/lib/utils"


export const MajorTag = ({
  tagName,
  active = false,
  className = '',
  ...props
}: MajorTagProps) => {
  return (
    <div className={cn("bg-[#2D2929E5] rounded-2xl flex flex-row justify-between max-md:h-6 md:h-8 py-0.5 pr-2 pl-3 gap-2 items-center", className)} {...props}>
      <p className="text-white max-md:text-sm text-nowrap">{tagName}</p>
      <PlusIcon className={`${active ? 'rotate-45' : ''} max-md:w-4`} color="white" />
    </div>
  )
}
