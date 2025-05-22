import {
  Plane,
  MailCheck,
  CircleUserRound,
  MessageCircleMore,
  MessageSquareText,
} from "lucide-react";
import Link from "next/link";
import { briefFamsData } from "@/modules/fams-data";
import { Img } from "react-image";
import { MenfessType } from "./types";
import { ReactionBar } from "./reactionBar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import formatRelativeTime from "@/lib/formatRelativeTime";

const CommentSection = ({
  menfess,
  open,
  onOpenChange,
}: {
  menfess: MenfessType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { to, from, message, createdAt, _count } = menfess;
  const { comments } = _count;
  const toIsFam = to.startsWith("fams/");
  const fromIsFam = from.startsWith("fams/");
  const Name = localStorage.getItem("CommentName") || "SipalingAnonym";
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#03045e] h-96 flex flex-col rounded-3xl bg-opacity-30 border border-[#717174] text-white">
        <div className="w-full h-full flex flex-col gap-4 overflow-y-auto">
          {/* From and To */}
          <div className="w-full flex flex-col max-sm:gap-2 gap-4 text-white">
            <div className="w-full flex gap-3 items-center">
              {fromIsFam ? (
                <Img
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
                    className="hover:opacity-80 duration-300 transition-all cursor-pointer"
                    data-umami-event="menfess-redirect-profile"
                    data-umami-event-redirect-to={"/" + from}
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
                <Img
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
                    className="hover:opacity-80 duration-300 transition-all cursor-pointer"
                    data-umami-event="menfess-redirect-profile"
                    data-umami-event-redirect-to={"/" + to}
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
          {/* From and To */}
          <div className="min-h-[0.5px] w-full bg-[#D9D9D9]"></div> {/* Line */}
          {/* Message */}
          <div className="w-full h-36 min-h-36 text-white font-sans flex items-center justify-center px-6 overflow-y-auto max-h-full">
            <p className="text-center break-words w-full h-full">{message}</p>
          </div>
          {/* Message */}
          {/* Bottom */}
          <div className="w-full flex flex-col items-center gap-2 p-6 max-sm:p-3">
            <div className="w-full flex justify-between">
              <ReactionBar
                menfessId={menfess.id}
                initialReactions={menfess.reactions}
              />
              <button className="flex items-center gap-1">
                <MessageCircleMore size={25} />
                <p className="text-sm font-medium">{comments}</p>
              </button>
            </div>
          </div>
          {/* Bottom */}
          <div className="min-h-[0.5px] w-full bg-[#D9D9D9]"></div> {/* Line */}
          {/* Comment Section */}
          <div className="w-full py-2 flex flex-col gap-3">
            <div className="flex gap-[22px]">
              <MessageSquareText className="mt-2" size={20} />
              <div className="bg-blue-800/20 w-full rounded-lg p-4">
                <div className="flex items-center">
                  <span className="font-bold truncate whitespace-nowrap overflow-hidden text-sm">
                    Fauzan
                  </span>
                  <span className="ml-1 text-sm text-gray-300">•</span>
                  <span className="ml-1 truncate whitespace-nowrap overflow-hidden text-xs">
                    {formatRelativeTime(new Date("2025-05-22T12:00:00Z"))}
                  </span>
                </div>
                <p className="text-sm">
                  teteaifjeia teteaifjeia teteaifjeia teteaifjeia teteaifjeia
                  teteaifjeia teteaifjeia teteaifjeia teteaifjeia teteaifjeia
                </p>
              </div>
            </div>

            {/* SEND KOMEN */}
            <div className="flex gap-3 items-center">
              <CircleUserRound size={30} />
              <Input
                className="bg-transparent w-full border-[#717174]"
                type="text"
                placeholder={`Comment as ${Name}.....`}
              />
            </div>
            {/* SEND KOMEN */}
          </div>
          {/* Comment Section */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CommentSection;
