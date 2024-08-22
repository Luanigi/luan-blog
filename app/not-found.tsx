import Link from "next/link"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

export default function NotFound() {
  return (
    <main className="text-center dark:text-white h-[100dvh] bg-yellow-100 dark:bg-zinc-900 transition duration-300 ease-in-out">
        <NavBar />
        <h2 className="text-5xl pt-20">Es gibt ein <b>Problem</b>.</h2>
        <p className="text-xl">Wir konnten die gesuchte Seite nicht finden!</p>
        <p className="text-xl">Gehe zurück zur <Link href="/" className="text-yellow-500 drop-shadow-lg">Startseite</Link></p>
        <Footer />
    </main>
  )
}
