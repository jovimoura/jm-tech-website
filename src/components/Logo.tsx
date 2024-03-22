import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

import { Link } from "react-router-dom";

interface Props {
  link?: string;
  className?: string;
}

export const Logo = ({ link, className }: Props) => {
  return (
    <Link to={link || "/"} className={cn("btn btn-ghost normal-case text-xl flex items-center gap-1.5", className)}>
      <Icons.logo color="#2564eb" />
      <h1 className={cn("text-2xl font-bold")}>
        JM<span className="text-primary">Tech</span>
      </h1>
    </Link>
  );
};
