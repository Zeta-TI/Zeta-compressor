import { CreateCompressorDialog } from "./create-compressor-dialog"

import { Separator } from '../ui/separator'
import { MenuLink } from './menu-link'
import { ThemeSwitcher } from './theme-switcher'

import { UserProfileButton } from './user-profile-button'
import { LogoImage } from './logo'
import { CalendarDateRangePicker } from './date-range-picker'

export function Header() {

  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center space-x-4">

          <LogoImage />

          <Separator orientation="vertical" className="h-6" />

          <nav className="flex items-center space-x-2 lg:space-x-3">
            <MenuLink href="/dashboard">Dashboard</MenuLink>
            <MenuLink href="/tasks">Tasks</MenuLink>
          </nav>
        </div>

        <div className="flex items-center space-x-4">

          <CreateCompressorDialog />

          <Separator orientation="vertical" className="h-6" />

          <ThemeSwitcher />
          <UserProfileButton />
        </div>
      </div>
    </div>
  )
}