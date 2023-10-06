"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { pools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Project Dashboard
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Let&apos;s Get Started, !!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
         Enjoy the Experience - Just Upload your Assets, Logos and Info regarding your Project/s
        </p>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Collaborate on shared projects, track progress, and manage budgeting from one dashboard. - All in one
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {pools.map((pool) => (
          <Card onClick={() => router.push(pool.href)} key={pool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", pool.bgColor)}>
                <pool.icon className={cn("w-8 h-8", pool.color)} />
              </div>
              <div className="font-semibold">
                {pool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
