/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client";

import React from 'react';
import { Bell, User as UserIcon, Settings, LogOut, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/shadcn/button"
import { HeaderLinks, HeaderLinksContainer } from './HeaderLinks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu"
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar"
import HeaderSearch from './HeaderSearch';

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

          <HeaderSearch />
        </div>

        {/* Right side - Notifications and User Profile */}
        <div className="flex items-center gap-4">
          <HeaderLinksContainer>
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

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-fit gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden flex-col items-start md:flex">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-xs text-muted-foreground">{user.role}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.role}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header;