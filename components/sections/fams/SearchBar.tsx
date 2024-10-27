import { useEffect, useState } from "react";
import { MajorSelectDropdown } from "./MajorSelectDropdown";
import { SearchCriteria } from "./types";

export const SearchBar = ({
  onChange,
}: {
  onChange: (searchCriteria: SearchCriteria) => void;
}) => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    name: "",
    major: "",
  });

  useEffect(() => {
    if (!searchCriteria.name) {
      onChange(searchCriteria);
      return;
    }
    const timeOutId = setTimeout(() => onChange(searchCriteria), 250);
    return () => clearTimeout(timeOutId);
  }, [searchCriteria]);

  return (
    <div
      className="max-md:pl-3 max-md:pr-2 md:pl-6 md:pr-3 py-3 
                    border border-[#D9D9D9] bg-white rounded-[40px] max-md:w-[290px] md:w-[420px] 
                    max-md:h-[35px] md:h-[50px] opacity-90 flex flex-row justify-stretch items-center max-xs:w-full
                    max-md:max-w-[290px]"
    >
      <input
        type="text"
        className="flex-1 max-md:min-w-24 md:min-w-28 w-max bg-transparent outline-none max-md:text-xs font-sfReg text-[#B3B3B3]"
        placeholder="Search by name"
        onChange={(e) =>
          setSearchCriteria((p) => ({ major: p.major, name: e.target.value }))
        }
      />
      <MajorSelectDropdown
        onChange={(major) => setSearchCriteria((p) => ({ ...p, major }))}
      />
    </div>
  );
};
