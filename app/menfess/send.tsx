"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const SendMenfess = () => {
  const [menfess, setMenfess] = useState({
    to: "",
    from: "",
    message: "",
  });
  return (
    <div className="w-full p-10 max-lg:p-8 flex flex-col gap-4 max-sm:p-6 bg-[#03045e] border border-[#717174] bg-opacity-30 rounded-2xl text-white transition-all">
      <h1 className="text-white font-sfPro font-[400] opacity-80 text-base sm:text-lg md:text-xl lg:text-2xl">
        Send Menfess
      </h1>
      <div className="flex max-sm:flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs text-slate-400">To</p>
          <Input
            className="bg-transparent border-[#717174]"
            type="text"
            placeholder="Who’s this for?"
            onChange={(e) => setMenfess({ ...menfess, to: e.target.value })}
            value={menfess.to}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs text-slate-400">From</p>
          <Input
            className="bg-transparent border-[#717174] "
            type="text"
            placeholder="Who’s this from?"
            onChange={(e) => setMenfess({ ...menfess, from: e.target.value })}
            value={menfess.from}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs text-slate-400">Message</p>
        <Textarea
          className="bg-transparent border-[#717174]"
          placeholder="Type your message here."
          onChange={(e) => setMenfess({ ...menfess, message: e.target.value })}
          value={menfess.message}
        />
      </div>
      <Button
        className="w-fit px-6 self-end border bg-slate-400"
        variant={"secondary"}
      >
        <Send size={15} />
        Send
      </Button>
    </div>
  );
};
export default SendMenfess;
