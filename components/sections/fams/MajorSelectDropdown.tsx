import { ChevronDown, ChevronUp } from "lucide-react"
import { MajorTag } from "./MajorTag"
import { useEffect, useState } from "react"
import { OptionalMajors } from "@/modules/fams-data"
import { OptionalMajorTagNames } from "./types"


type MajorOption = {
  major: OptionalMajors,
  tagName: OptionalMajorTagNames,
}

const majors: MajorOption[] = [
  { major: 'Ilmu Komputer Reguler', tagName: "Ilmu Komputer" },
  { major: "Sistem Informasi", tagName: "Sistem Informasi" },
  { major: "Ilmu Komputer KKI", tagName: "KKI" }
]


export const MajorSelectDropdown = ({
  onChange
}: {
  onChange: (major: OptionalMajors) => void
}) => {
  const [major, setMajor] = useState<OptionalMajors>("")
  const [majorTagName, setMajorTagName] = useState<OptionalMajorTagNames>()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    onChange(major)
  }, [major])

  return (
    <div className="flex-auto flex justify-end max-w-fit max-md:w-fit">
      {majorTagName
        ? <div className="w-max h-max flex place-content-start">
          <MajorTag
            tagName={majorTagName}
            active={true}
            onClick={() => {
              setMajor('');
              setMajorTagName('');
            }}
            className="flex-1"
          />
        </div>
        : <button onClick={() => setDropdownOpen((p) => !p)} className="relative bottom-3 right-6">
          <ChevronDown className={`${dropdownOpen ? `scale-0` : `scale-100`}  transition-all absolute p-auto max-md:w-[20px]`} />
          <ChevronUp className={`${dropdownOpen ? `scale-100` : `scale-0`} transition-all absolute p-auto max-md:w-[20px]`} />
        </button>
      }

      <div className="relative">
        <div className={`${dropdownOpen ? 'scale-100' : 'scale-0'} transition-all absolute top-8 right-0 
                        bg-[#F5F5F5] border-[#D9D9D9] rounded-2xl 
                          flex flex-col items-end gap-3 p-3`}>
          {majors.map((e) => (
            <MajorTag
              tagName={e.tagName}
              onClick={() => {
                setMajor(e.major);
                setMajorTagName(e.tagName);
                setDropdownOpen(() => false);
              }}
            />))
          }
        </div>
      </div>
    </div>
  )
}
