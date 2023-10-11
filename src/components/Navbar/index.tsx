import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Link from "next/link";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="fixed backdrop-blur-md z-50 flex w-full items-center py-3 px-8 border-b border-b-input">
      <div className="flex lg:container items-center w-full justify-between">
        <Link href="/">
          {/* <Bot className="w-[2rem] h-[2rem]" /> */}
          DevHost23
        </Link>
        <div className="flex gap-x-5">
          <Theme />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
