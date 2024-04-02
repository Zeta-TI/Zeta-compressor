'use client'

import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export function ButtonSignOut() {
    return (
        <DropdownMenuItem className="flex items-center gap-2" asChild>
            <Button type="submit" className="w-full" onClick={() => signOut()}>
              <LogOut className="size-4" />
              Sign out
            </Button>
          </DropdownMenuItem>
    )
}