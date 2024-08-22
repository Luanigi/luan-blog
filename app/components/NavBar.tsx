import React from 'react'
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function NavBar() {
  return (
    <div className="flex flex-col items-center justify-between">
    <nav className="flex h-20 place-items-center m-0">

        <Link href={"/"} className="transition duration-300 ease-in-out text-3xl hover:bg-black dark:hover:bg-opacity-20 dark:hover:bg-white hover:bg-opacity-20 p-1 mt-4 rounded-md dark:text-white pl-4 pr-4">
            Luan Ajeti
        </Link>

        <Link href={"/blogs"} className="transition duration-300 ease-in-out text-3xl hover:bg-black dark:hover:bg-opacity-20 dark:hover:bg-white hover:bg-opacity-20 p-1 mt-4 rounded-md dark:text-white pl-4 pr-4">
            Artikel
        </Link>

        <ThemeToggle />
    </nav>
    </div>
    
  )
}
