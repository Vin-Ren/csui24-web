"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Importing Lucide Icons
import { Home, Earth, HardHat, Clapperboard, Compass } from "lucide-react";

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname(); // Get the current path

  // Menu items with icons
  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={15} /> },
    { name: "Fams", path: "/fams", icon: <Earth size={15} /> },
    { name: "CS Team", path: "/cs-team", icon: <HardHat size={15} /> },
    {
      name: "Documentation",
      path: "/documentation",
      icon: <Clapperboard size={15} />,
    },
    { name: "CS Corner", path: "/cs-corner", icon: <Compass size={15} /> },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={cn("fixed top-14 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <nav className="relative rounded-full bg-[#1D1D1D] bg-opacity-75 border-2 border-[#717174] backdrop-blur-sm shadow-input flex justify-center space-x-4 px-8 py-6">
        <ul className="w-full flex justify-around text-white transition-opacity text-xs md:text-sm font-sfPro  font-extrabold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={cn(
                  "hover:opacity-100 opacity-45 transition-opacity flex items-center space-x-2",
                  isActive(item.path) ? "opacity-100" : ""
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
