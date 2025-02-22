import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // Import icons

export default function Dropdown() {
  const [selected, setSelected] = React.useState("");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-transparent text-black text-lg p-0 h-auto md:text-sm lg:text-lg"
        >
          Categories
          <ChevronDown className="w-4 h-4" /> {/* Dropdown arrow */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black border p-2 backdrop-blur-md w-56">
        <DropdownMenuLabel>Select Your Desired Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          <Link href="/categories/mobile">
            <DropdownMenuRadioItem value="family-law">
            Mobile Phones
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/categories/laptop">
            <DropdownMenuRadioItem value="corporate-law">
            Laptop
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/categories/tv">
            <DropdownMenuRadioItem value="real-estate-law">
              Tv
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/categories/microprocessors">
            <DropdownMenuRadioItem value="criminal-defense">
              Microprocessors
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
