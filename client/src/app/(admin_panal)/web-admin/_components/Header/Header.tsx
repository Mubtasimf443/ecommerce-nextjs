/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client";

import React from 'react';
import { Bell, Search, User as UserIcon, Settings, LogOut, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/shadcn/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/shadcn/command";
import { HeaderLinks, HeaderLinksContainer } from './HeaderLinks';

interface HeaderProps {
  user?: {
    name: string;
    role: string;
    image?: string;
  };
}

const Header = ({ user = {
  name: "Mubtasim F",
  role: "Admin",
  image: "/avatars/admin-avatar.png"
} }: HeaderProps) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left side - Brand & Search */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          {/* Brand */}
          <h2 className="text-2xl font-bold tracking-tight">
            E-Commerce&nbsp;
            <span className="text-primary">Admin</span>
          </h2>

          {/* Search Trigger */}
          <Button
            variant="outline"
            className="relative h-9 w-9 p-0 xl:h-10 xl:w-80 xl:justify-start xl:px-3 xl:py-2"
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4 xl:mr-2" />
            <span className="hidden xl:inline-flex">Search products...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type to search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Products">
                  <CommandItem>
                    <span>iPhone 14 Pro</span>
                  </CommandItem>
                  <CommandItem>
                    <span>MacBook Pro</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Categories">
                  <CommandItem>
                    <span>Electronics</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Clothing</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
        </div>

        <HeaderLinksContainer >

          <HeaderLinks
            href='/web-admin/messages'
            Icon={MessageSquare}
            BadgeNumber={4}
            title='Messages'
          />

          <HeaderLinks
            href='/web-admin/notifications'
            Icon={Bell}
            BadgeNumber={2}
            title='Notifications'
          />

      
        </HeaderLinksContainer>
      </div>
    </header>
  )
}

export default Header;