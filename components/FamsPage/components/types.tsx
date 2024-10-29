import { BriefFamsDataType, OptionalMajors } from "@/modules/fams-data";

export interface SearchCriteria {
  name: string,
  major: OptionalMajors
}

export type OptionalMajorTagNames = "Ilmu Komputer" | "Sistem Informasi" | "KKI" | ""

export type MajorOption = {
  major: OptionalMajors,
  tagName: OptionalMajorTagNames,
}

export type CardProps = {
  entry: BriefFamsDataType,
  className?: string
}

export type MajorTagProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  tagName: string,
  active?: boolean
}

