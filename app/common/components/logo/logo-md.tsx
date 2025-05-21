import { Link } from "react-router";
import { cn } from "~/lib/utils";

export default function LogoMedium({ className }: { className?: string }) {
  return (
    <h1 className="">
      <Link
        to="/"
        className={cn(
          "flex items-center gap-2 leading-none w-fit cursor-pointer",
          className
        )}
      >
        <img className="w-8 h-8" src="/logo.png" alt="logo" />
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-none ">PromptShare</span>
          <span className="text-sm text-gray-500 leading-none">
            Custom Prompts with GUI
          </span>
        </div>
      </Link>
    </h1>
  );
}
