import { FileImage, GlobeLock, Menu, PackageSearch } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky bg-white backdrop-opacity-10 top-0 z-50 shadow-sm ">
      <div className="flex container h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <img src="/logo_adiarko.jpg" className="w-6 h-6 mb-auto" alt="" />
          <span className="font-semibold text-xl">Adiarko</span>
        </Link>
        <nav className="hidden lg:gap-8 lg:flex">
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/#service"
          >
            Service
          </Link>
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-normal text-sm hover:font-semibold"
            href="/career"
          >
            Career
          </Link>
        </nav>
        <div className="hidden lg:flex">
          <Link href="/get-started">
            <div className="rounded-3xl text-xs py-2 px-4 bg-black text-white cursor-pointer hover:bg-gray-800">
              Contact Us
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen rounded-xl p-4 md:mx-4">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-base">
                  Menu
                </DropdownMenuLabel>
                <Link href="/#service">
                  <DropdownMenuItem>
                    <PackageSearch className="mr-2 h-5 w-5" />
                    <span className="text-base">Service</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/#portfolio">
                  <DropdownMenuItem>
                    <FileImage className="mr-2 h-5 w-5" />
                    <span className="text-base">Portfolio</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/career">
                  <DropdownMenuItem>
                    <GlobeLock className="mr-2 h-5 w-5" />
                    <span className="text-base">Career</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <Link href="/get-started">
                <DropdownMenuItem>
                  <div className="rounded-3xl text-xs py-2 px-4 bg-black text-white cursor-pointer hover:bg-gray-800yarn">
                    Contact Us
                  </div>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
