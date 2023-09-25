"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Boxes, Target, Files, Rocket, CalendarClock, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";


const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Projects & Tasks',
    icon: Target,
    href: '/project',
    color: "text-green-500",
  },
  {
    label: 'Product Spec',
    icon: Boxes,
    color: "text-pink-400",
    href: '/image',
  },
  {
    label: 'Meetings',
    icon: CalendarClock,
    color: "text-orange-500",
    href: '/video',
  },
  {
    label: 'Docs',
    icon: Files,
    color: "text-yellow-500",
    href: '/docs',
  },
  {
    label: 'Product Launch Brief',
    icon: Rocket,
    color: "text-green-500",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname(); 

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#6366f1] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/rhinologo best.svg" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            DIPASSIO
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-white-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar