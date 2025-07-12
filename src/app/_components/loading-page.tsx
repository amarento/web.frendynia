import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-1">
      <Loader2 className="h-4 w-4 animate-spin" />
      <p className="-mb-1 text-sm">Loading ...</p>
    </div>
  );
}
