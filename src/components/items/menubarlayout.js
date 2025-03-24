import React from "react";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
  } from '@/components/ui/menubar';
  

export default function Menu() {
    return (
        <>
      <Menubar className="p-2 bg-gray-100 mt-4 flex align-middle items-center justify-center rounded-lg shadow-md">
      {/* Home Menu */}
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
      </MenubarMenu>
      
      {/* About Menu */}
      <MenubarMenu>
        <MenubarTrigger>About</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Our Story</MenubarItem>
          <MenubarItem>Team</MenubarItem>
          <MenubarItem>Careers</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
      </>
    )
}