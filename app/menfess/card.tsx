import { Plane, MailCheck, CalendarDays } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const MenfessCard = ({
  menfess,
}: {
  menfess: {
    to: string;
    from: string;
    message: string;
    date: string;
  };
}) => {
  const { to, from, message, date } = menfess;
  return (
    <div className="w-full h-96 rounded-xl bg-[#03045e] flex flex-col  bg-opacity-30 border border-[#717174]">
      <div className="h-fit p-6 flex flex-col gap-2">
        <div className="w-full flex max-sm:flex-col max-sm:gap-2 gap-4 text-white">
          <div className="w-full flex gap-3 items-center">
            <div className="flex justify-center items-center p-2 rounded-full border border-[#717174] ">
              <Plane size={14} />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xs">From</p>
              <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                {from}
              </p>
            </div>
          </div>
          <div className="w-full flex gap-3 items-center">
            <div className="flex justify-center items-center p-2 rounded-full border border-[#717174] ">
              <MailCheck size={14} />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xs">To</p>
              <p className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-full">
                {to}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-[#D9D9D9]"></div>
      </div>
      <div className="w-full h-full text-white font-sans flex items-center justify-center px-6 overflow-y-auto max-h-full">
        <p className="text-center break-words w-full">{message}</p>
      </div>
      <div className="w-full flex flex-row-reverse p-6">
        <div className="flex gap-1 items-center">
          <div className="flex justify-center items-center p-1 rounded-full border border-[#717174] ">
            <CalendarDays size={14} />
          </div>
          <p className="text-xs">
            {new Date(date).toLocaleString("id-ID", {
              timeZone: "Asia/Jakarta",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            WIB
          </p>
        </div>
      </div>
    </div>
  );
};
export default MenfessCard;
