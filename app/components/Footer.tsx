import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="footer m-auto">
          <Link href={"/"} className=" transition duration-300 ease-in-out text-md hover:text-zinc-500 dark:hover:text-neutral-300 rounded-md dark:text-white pl-4 pr-4 mb-4">
              Luan Ajeti
          </Link>

          <Link href={"/blog"} className="transition duration-300 ease-in-out text-md hover:text-zinc-500 dark:hover:text-neutral-300 rounded-md dark:text-white pl-4 pr-4 mb-4">
              Artikel
          </Link>
          <p className="dark:text-white text-black p-4">© 2024 Luan Blog</p>
    </div>
  )
}