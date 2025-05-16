import { Plane, MailCheck, CalendarDays } from "lucide-react";
import formatRelativeTime from "@/lib/formatRelativeTime";
import Link from "next/link";
import { briefFamsData } from "@/modules/fams-data";
import Image from "next/image";

const MenfessCard = ({
  menfess,
}: {
  menfess: {
    to: string;
    from: string;
    message: string;
    createdAt: string;
  };
}) => {
  const { to, from, message, createdAt } = menfess;
  const toIsFam = to.startsWith("fams/");
  const fromIsFam = from.startsWith("fams/");

  return (
    <div className="w-full h-96 rounded-xl bg-[#03045e] flex flex-col  bg-opacity-30 border border-[#717174] overflow-hidden">
      <div className="h-fit p-6 max-sm:p-3 flex flex-col gap-2">
        <div className="w-full flex flex-col max-sm:gap-2 gap-4 text-white">
          <div className="w-full flex gap-3 items-center">
            {fromIsFam ? (
              <Image
                src={
                  "/" +
                    briefFamsData.find(
                      (fam) => fam.id === from.replace("fams/", "")
                    )?.["image-filename"] || ""
                }
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center p-2 rounded-full border border-[#717174] ">
                <Plane size={14} />
              </div>
            )}
            <div className="w-full flex flex-col">
              <p className="text-xs">From</p>
              {fromIsFam ? (
                <Link
                  href={"/" + from}
                  className="hover:opacity-80 cursor-pointer"
                >
                  <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                    {
                      briefFamsData.find(
                        (fam) => fam.id === from.replace("fams/", "")
                      )?.["displayed-name"]
                    }
                  </p>
                </Link>
              ) : (
                <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                  {from}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex gap-3 items-center">
            {toIsFam ? (
              <Image
                src={
                  "/" +
                    briefFamsData.find(
                      (fam) => fam.id === to.replace("fams/", "")
                    )?.["image-filename"] || ""
                }
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center p-2 rounded-full border border-[#717174] ">
                <MailCheck size={14} />
              </div>
            )}
            <div className="w-full flex flex-col">
              <p className="text-xs">To</p>
              {toIsFam ? (
                <Link
                  href={"/" + to}
                  className="hover:opacity-80 cursor-pointer"
                >
                  <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                    {
                      briefFamsData.find(
                        (fam) => fam.id === to.replace("fams/", "")
                      )?.["displayed-name"]
                    }
                  </p>
                </Link>
              ) : (
                <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                  {to}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-[#D9D9D9]"></div>
      </div>
      <div className="w-full h-full text-white font-sans flex items-center justify-center px-6 overflow-y-auto max-h-full">
        <p className="text-center break-words w-full">{message}</p>
      </div>
      <div className="w-full flex flex-row-reverse p-6 max-sm:p-3">
        <div className="flex gap-1 items-center">
          <div className="flex justify-center items-center p-1 rounded-full border border-[#717174] ">
            <CalendarDays size={14} />
          </div>
          <p className="text-xs">{formatRelativeTime(new Date(createdAt))}</p>
        </div>
      </div>
    </div>
  );
};
export default MenfessCard;
