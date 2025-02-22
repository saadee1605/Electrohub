"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-6 w-1/3" />
    </div>
  );
}
