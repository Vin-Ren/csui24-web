import { cn } from "@/lib/utils";
import { Clapperboard, Compass, Earth, HardHat, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={15} /> },
    { name: "Fams!", path: "/fams", icon: <Earth size={15} /> },
    { name: "CS Team", path: "/cs-team", icon: <HardHat size={15} /> },
    {
      name: "Documentation",
      path: "/documentation",
      icon: <Clapperboard size={15} />,
    },
    { name: "CS Corner", path: "/cs-corner", icon: <Compass size={15} /> },
  ];

  const socialItems = [
    { title: "Our Social Media", path: "/", content: "@csui24_cosmos" },
    { title: "Contact Us", path: "/", content: "csui24Sigma@cs.ui.ac.id" },
  ];

  return (
    <div
      className="flex bg-center bg-cover w-full h-screen justify-around px-11 py-14 overflow-hidden items-end"
      style={{
        backgroundImage: "url('footer.png')",
      }}
    >
      <div className="logo">
        <h1 className="text-white text-6xl font-monumentExt">
          <span>
            CS
            <br />
            UI 24
          </span>
        </h1>
      </div>
      <div className="menu">
        <ul className="flex flex-col gap-2  justify-around w-full text-white text-xs md:text-sm font-sfSemi font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={cn(
                  "opacity-100 hover:opacity-45 transition-opacity flex items-center space-x-2"
                )}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-96 justify-between py-10 text-white text-xs md:text-sm font-sfSemi ">
        {socialItems.map((item) => (
          <div>
            <h1 className="font-bold">{item.title}</h1>
            <Link href={item.path}>{item.content}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
