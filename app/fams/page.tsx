"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FamsDataType, Majors, famsData } from "@/modules/fams-data";
import { ChevronDown, ChevronUp, PlusIcon, X } from "lucide-react";


const Card = ({ entry }: { entry: FamsDataType }) => {
  const name_word_count = entry["full-name"].split(" ").length;
  const displayed_name = entry["full-name"]
    .split(" ")
    .slice(0, Math.min(name_word_count, 3))
    .join(" ");

  return (
    <div
      className="col-span-1 p-6 pt-9 w-[185px] h-[237px] bg-[#292929] rounded-[14px] shadow shadow-[#082F49] flex flex-col items-center gap-5 justify-evenly"
      key={entry.id}
    >
      <Image
        src={`/${entry["image-filename"]}`}
        alt={`${entry["full-name"]}s Picture`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-row items-center justify-center">
        <p className="flex-1 text-white font-light text-center font-sfPro">
          {displayed_name}
        </p>
      </div>
    </div>
  );
};


const MajorTag = ({ tagName, active = false, ...props }: { tagName: string, active?: boolean } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className="bg-[#2D2929E5] rounded-2xl flex flex-row justify-between w-fit h-8 py-1 pr-2 pl-3" {...props}>
      <p className="text-white max-md:text-sm">{tagName}</p>
      <PlusIcon className={active ? 'rotate-45' : ''} />
    </div>
  )
}

const MajorSelectDropdown = ({ onChange }: { onChange: (major: Majors | '') => void }) => {
  const [major, setMajor] = useState<Majors | "">("")
  const [majorTagName, setMajorTagName] = useState<"Ilmu Komputer" | "Sistem Informasi" | "KKI" | "">()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    onChange(major)
  }, [major])

  return (
    <div className="flex items-center justify-center w-max h-max">
      {majorTagName
        ? <MajorTag tagName={majorTagName} active={true} onClick={() => { setMajor(''); setMajorTagName('') }} />
        : <button onClick={() => setDropdownOpen((p) => !p)} className="relative bottom-3 right-6">
          <ChevronUp className={`${dropdownOpen ? `scale-0` : `scale-100`}  transition-all absolute p-auto max-md:w-[20px]`} />
          <ChevronDown className={`${dropdownOpen ? `scale-100` : `scale-0`} transition-all absolute p-auto max-md:w-[20px]`} />
        </button>
      }

      <div className="relative">
        <div className={`${dropdownOpen ? 'scale-100' : 'scale-0'} transition-all absolute top-8 right-0 
                        w-[190px] h-auto bg-[#F5F5F5] border-[#D9D9D9] rounded-2xl 
                        flex flex-col items-end gap-3 p-3`}>
          <MajorTag
            tagName="Ilmu Komputer"
            onClick={() => {
              setMajor("Ilmu Komputer Reguler");
              setMajorTagName("Ilmu Komputer");
              setDropdownOpen((p) => false);
            }}
          />
          <MajorTag
            tagName="Sistem Informasi"
            onClick={() => {
              setMajor("Sistem Informasi");
              setMajorTagName("Sistem Informasi");
              setDropdownOpen((p) => false);
            }}
          />
          <MajorTag
            tagName="KKI"
            onClick={() => {
              setMajor("Ilmu Komputer KKI");
              setMajorTagName('KKI');
              setDropdownOpen((p) => false);
            }}
          />
        </div>
      </div>
    </div>
  )

}


const SearchBar = ({ onChange }: { onChange: (searchCriteria: { name: string, major: Majors | '' }) => void }) => {
  const [searchCriteria, setSearchCriteria] = useState<{ name: string, major: Majors | '' }>({ name: "", major: "" })

  useEffect(() => {
    if (!(searchCriteria.name)) {
      onChange(searchCriteria);
      return;
    }
    const timeOutId = setTimeout(() => onChange(searchCriteria), 250);
    return () => clearTimeout(timeOutId);
  }, [searchCriteria])

  return (
    <div className="max-md:mt-4 md:mt-14 max-md:mb-14 md:mb-36 max-md:px-4 md:px-6 max-md:py-2 md:py-3 
                  border border-[#D9D9D9] bg-white rounded-[40px] max-md:w-[290px] md:w-[420px] 
                  max-md:h-[35px] md:h-[50px] opacity-90 flex flex-auto flex-row justify-between items-center max-xs:w-full">
      <input
        type="text"
        className="bg-transparent outline-none max-md:text-xs font-sfPro font-light text-[#B3B3B3]"
        placeholder="Search by name"
        onChange={(e) => setSearchCriteria((p) => ({ major: p.major, name: e.target.value }))}
      />
      <MajorSelectDropdown onChange={(major) => setSearchCriteria((p) => ({ ...p, major }))} />
    </div>
  )
}


const page = () => {
  const [searchCriteria, setSearchCriteria] = useState<{ name: string, major: string }>()
  const [filteredFams, setFilteredFams] = useState<FamsDataType[]>([])

  useEffect(() => {
    setFilteredFams(
      famsData.filter((e) => {
        var valid = true;
        valid &&= !(searchCriteria?.name) || (e["full-name"].toLowerCase().startsWith(searchCriteria.name.toLowerCase()))
        valid &&= !(searchCriteria?.major) || (e["major"] === searchCriteria.major)
        return valid;
      })
    )
  }, [searchCriteria])

  return (
    <div className="h-fit w-full bg-black">
      <div className="flex flex-col h-fit w-full max-md:pt-14 md:pt-72 px-8 items-center">
        <div className="flex flex-col items-center">
          <h1 className="max-md:scale-0 md:scale-100 text-6xl text-white font-sfPro">
            Check Out Our Friends!
          </h1>
          <h1 className="max-md:scale-100 md:scale-0 text-xl text-white font-sfPro font-extrabold">
            Check Out
          </h1>
          <h1 className="max-md:scale-100 md:scale-0 text-3xl text-white font-sfPro font-extrabold">
            Our Friends!
          </h1>
        </div>
        <SearchBar onChange={setSearchCriteria} />
        <div className="h-full grid max-md:grid-cols-2 max-md:gap-4 md:grid-cols-4 md:gap-x-10 md:gap-y-14">
          {filteredFams.map((entry) => <Card entry={entry} />)}
        </div>
        {filteredFams.length > 0 || <h1 className="text-3xl font-sfPro text-white">There's no one here that meets your search criteria</h1>}
      </div>
    </div>
  );
};

export default page;
