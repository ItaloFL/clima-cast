import { Bell, Pin, SquareLibrary } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import ImgProfileTest from "../assets/foto-poker.jpg";

export function Header() {
  return (
    <header className="border-b border-b-muted-foreground/10">
      <div className="flex h-20 items-center justify-around gap-4 px-8">
        <div className="flex items-center gap-10">
<<<<<<< HEAD
          <div className="flex gap-4">  
=======
          <div className="flex gap-4">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
            <button className="bg-muted-foreground/10 p-3 rounded-full transition-colors cursor-pointer hover:bg-muted-foreground/20">
              <SquareLibrary size={20} />
            </button>

            <button className="bg-muted-foreground/10 p-3 rounded-full transition-colors cursor-pointer hover:bg-muted-foreground/20">
              <Bell size={20} />
            </button>
          </div>

<<<<<<< HEAD
          <div className="hidden gap-2 items-center xl:flex">
=======
          <div className="flex gap-2 items-center">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
            <Pin />
            <span className="text-lg">Rio Branco, AC</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ModeToggle />

          <div>
            <img src={ImgProfileTest} className="size-10 rounded-full" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
