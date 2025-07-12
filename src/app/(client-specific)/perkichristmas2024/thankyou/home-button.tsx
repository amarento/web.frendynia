"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";

export default function HomeButton() {
  const router = useRouter();
  return (
    <Button
      className="mt-8 flex gap-2 self-start bg-[#e8af30]/90"
      onClick={() => router.push("/perkichristmas2024")}
    >
      <Home className="h-4 w-4" /> Home
    </Button>
  );
}
