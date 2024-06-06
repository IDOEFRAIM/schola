import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar =async ({ className }: Props) => {
  const session = await getServerSession(authOptions)
  
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      <Link href="/accueil">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/boy.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Educ Connect
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Accueil" 
          href="accueil"
          iconSrc="/home.svg"
        />
        <SidebarItem 
          label="Blog" 
          href="blog"
          iconSrc="/bookOpen.svg"
        />
        {
          session?.user && (
            <SidebarItem 
            label="Profile" 
            href="dashboard"
            iconSrc="/user.svg"
          />
          )
        }
            <SidebarItem 
            label="Interview" 
            href="interviews"
            iconSrc="/messageQuestion.svg"
          />
      </div>

    </div>
  );
};