
import { Boxes, Target, Files, Rocket, CalendarClock, LayoutDashboard, Settings } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Project & Tasks',
    icon: Target,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Products Spec',
    icon: Boxes,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Meetings',
    icon: CalendarClock,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: '/image',
  },
  {
    label: 'Docs',
    icon: Files,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Product Launch Brief',
    icon: Rocket,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
