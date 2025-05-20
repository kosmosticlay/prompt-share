import { cn } from "~/lib/utils";

export default function LogoSm({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 shrink-0", className)}>
      <img src="/logo.png" alt="logo" className="w-8 h-8" />
    </div>
  );
}
