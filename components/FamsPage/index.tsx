"use client";
import React, { Suspense, useMemo, useState } from "react";
import { briefFamsData } from "@/modules/fams-data";
import { Card } from "./components/Card";
import { SearchCriteria } from "./components/types";
import { SearchBar } from "./components/SearchBar";

const FamsPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>();
  const filteredFams = useMemo(() => {
    return briefFamsData.filter(
      (entry) =>
        (!searchCriteria?.major || entry["major"] === searchCriteria.major) &&
        (!searchCriteria?.name ||
          !searchCriteria.name
            .toLowerCase()
            .split(" ")
            .map((e) =>
              entry["full-name"]
                .toLowerCase()
                .split(" ")
                .map((word) => word.startsWith(e))
                .includes(true)
            )
            .includes(false))
    );
  }, [searchCriteria]);

  return (
    <Suspense>
      <div className="flex flex-col h-fit w-full max-md:pt-[160px] md:pt-[300px] px-8 items-center">
        <div className="flex flex-col items-center max-md:mb-4 md:mb-[60px]">
          <h1 className="max-md:hidden md:block text-6xl font-sfPro text-white">
            Check Out Our Friends!
          </h1>
          <h3 className="max-md:block md:hidden text-xl font-sfPro text-white font-extrabold">
            Check Out
          </h3>
          <h2 className="max-md:block md:hidden text-3xl font-sfPro text-white font-extrabold">
            Our Friends!
          </h2>
        </div>
        <SearchBar onChange={setSearchCriteria} />
        <div className="h-full grid max-[350px]:grid-cols-1 max-sm:grid-cols-2 sm:max-lg:grid-cols-3 lg:grid-cols-4 max-sm:gap-4 sm:gap-x-10 sm:gap-y-14 max-md:mt-14 md:mt-36">
          {filteredFams.map((entry) => (
            <Card entry={entry} key={entry.id} />
          ))}
        </div>
        {!filteredFams.length && (
          <h1 className="text-3xl font-sfPro text-white">
            No results found for your search criteria
          </h1>
        )}
      </div>
    </Suspense>
  );
};

export default FamsPage;
