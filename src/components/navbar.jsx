import Link from "next/link"
import InputSearch from "./input"

export default function Navbar() {
    return (
        <nav className="flex justify-around items-center p-8 mb-2 bg-orange-500">
            <Link href="/" className="text-5xl font-bold"><img src="/logo.png" alt="" className="w-48" /></Link>
            <InputSearch />
        </nav>
    )
}
