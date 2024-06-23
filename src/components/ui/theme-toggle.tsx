"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import switchOnFx from "@/assets/switch-on.mp3"
import switchOffFx from "@/assets/switch-off.mp3"
import useSound from 'use-sound';


export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [play] = useSound(switchOnFx);
  const [playOff] = useSound(switchOffFx);

  const setThemeWithSound = (selectedTheme: string) => {
    console.log(theme);
    console.log(selectedTheme);
    if(selectedTheme === "dark"){
      playOff();
    } else {
      play();
    }

    setTheme(selectedTheme);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeWithSound("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeWithSound("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeWithSound("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
