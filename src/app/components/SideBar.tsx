import { Button } from "@/components/ui/button";
import {Menu} from 'lucide-react'
import { Sheet,SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
const navItems=[
    {name:"Home",href:"/"},
    {name:"Contestants",href:"/contestants"},
    {name:"Battles",href:"/battles"},
]


export const SideBar = () => {
  return (
    <div>
        {/* Boton para móviles*/}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6"></Menu>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" 
            className="w-64 bg-blue-800 text-white">
                <div className="p-4 space-y-4">
                    <h2 className="text-2xl font-bold">My site</h2>
                </div>
                <nav className="space-y-2">
                    {
                        navItems.map((item)=>(
                            <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded hover:bg-blue-600">
                                {item.name}
                            </Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
        {/* Menú fijo para pantallas grandes */}
        <div className="hidden md:block fixed top-0 left-0 w-64 p-4 space-y-4 bg-gray-700 text-white
        h-screen">
            <nav className="space-y-2">
                {navItems.map((item)=>(
                    <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded hover:bg-blue-600">
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    </div>
  )
}
