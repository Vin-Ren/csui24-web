import React from "react";
import Image from "next/image";

const Leader = [
    {
        image : "/leader/leader1.png",
        name : "King Slayer",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
    },
    {
        image : "/leader.png",
        name : "King Slayer",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
    }
]

const BannerHero = ()=>{
    return(
        <>
            <div className=" flex flex-col gap-8 py-36 max-md:py-24 max-sm:py-12">
                <div className="flex justify-center">
                    <div className="text-white font-sfPro text-center text-xl sm:text-2xl lg:text-4xl xl:text-5xl">Messages from Class Leader</div>
                </div>
                
                <div className="flex justify-center">
                    <div className="w-11/12">
                        <div className="flex justify-center gap-7">
                        {/* ITEM 1 */}
                            <div className="max-w-[744px] rounded-[40px] p-[2px] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600" >
                                <div className="w-full h-full bg-custom-gradient rounded-[35px] flex gap-6 justify-center items-center p-8 max-md:flex-col">
                                    <div className="w-fit overflow-hidden">
                                        <Image
                                            src={Leader[0].image} 
                                            alt="A beautiful scenery"
                                            width={200} 
                                            height={200}
                                            className="rounded-[50%]"
                                            priority
                                        />
                                    </div>
                                    <div className="w-[50%] max-md:w-[80%] text-justify max-md:text-center text-base font-[400] text-white font-sfSemi">
                                        <p>{Leader[0].message}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default BannerHero