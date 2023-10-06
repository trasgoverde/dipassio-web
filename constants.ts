"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Boxes, Target, Files, Rocket, CalendarClock, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Project & Tasks',
    icon: Target,
    href: '/projects',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Time Diagram',
    icon: Boxes,
    href: '/product',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'Meetings',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/meetings',
  },
  {
    label: 'Docs',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/docs',
  },
  {
    label: 'Product Launch Brief',
    icon: Rocket,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: '/launch',
  },
];

export const pools = [
  {
    label: 'Project Proponsal',
    icon: Target,
    href: '/projects',
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: 'Requirements',
    icon: Boxes,
    href: '/product',
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    label: 'ToDo',
    icon: CalendarClock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: '/meetings',
  },
  {
    label: 'Contracts',
    icon: Files,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: '/docs',
  },
];