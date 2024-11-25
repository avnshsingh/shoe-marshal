import React from "react";
import { DashboardNavigation } from "../components/dashboard/DashboardNavigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon } from "lucide-react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant="outline"
              size="icon"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              {/* Aded title & description for accessibility */}
              <SheetTitle className="hidden">Menu</SheetTitle>
              <SheetDescription className="hidden">
                Mobile menu
              </SheetDescription>
              <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
                <DashboardNavigation />
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Logout</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
    </div>
  );
};

export default DashboardLayout;
