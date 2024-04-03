import { CreateCompressorDialog } from "./create-compressor-dialog"

import { Separator } from '../ui/separator'
import { MenuLink } from './menu-link'
import { ThemeSwitcher } from './theme-switcher'

import { UserProfileButton } from './user-profile-button'
import { LogoImage } from './logo'
import { CalendarDateRangePicker } from './date-range-picker'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Image from "next/image"

export function Header() {

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <LogoImage />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <MenuLink href="/dashboard">Dashboard</MenuLink>
        <MenuLink href="/tasks">Tasks</MenuLink>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="/dashboard" className="hover:text-zinc-700 text-zinc-500">
              Dashboard
            </Link>
            <Link
              href="/tasks"
              className="text-muted-foreground hover:text-foreground"
            >
              Tasks
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <CreateCompressorDialog />
          </div>
        </div>
        <ThemeSwitcher />
        <UserProfileButton />
      </div>
    </header>
  )
}