import React from "react";
import Image from "next/image";
import {FamsDataType, famsData} from "@/modules/fams-data"


const Card = ({entry}: {entry: FamsDataType}) => {
  const name_word_count = entry['full-name'].split(' ').length
  const displayed_name = entry['full-name'].split(' ').slice(0,Math.min(name_word_count,3)).join(' ')

  return (
    <div className="col-span-1 p-6 pt-9 w-[185px] h-[237px] bg-[#292929] bg-repeat-round rounded-[14px] flex flex-col items-center gap-5 justify-evenly" key={entry.id}>
      <Image 
        src={`/${entry['image-filename']}`} alt={`${entry['full-name']}s Picture`} 
        width={100} 
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-row items-center justify-center">
        <p className="flex-1 text-white text-center font-sfPro">{displayed_name}</p>
      </div>
    </div>
  )
}


const page = () => {
  return (
    <div className="h-full w-full bg-black absolute">
      <div className="flex flex-col h-screen w-full pt-72 px-8 items-center">
        <h1 className="text-6xl text-white font-sfPro">Check Out Our Friends!</h1>
        <div className="my-12 border border-white bg-white rounded-md">
          <p className="text-2xl font-bold">Search component</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {famsData.map((entry) => <Card entry={entry}/>)}
        </div>
      </div>
    </div>
  );
};


export default page;
