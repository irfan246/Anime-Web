"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
export default function InputSearch() {
    const seacrhRef = useRef()
    const router = useRouter()

    const handelSearch = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            const keyword = seacrhRef.current.value
            router.push(`/search/${keyword}`)
        }
    }
    return (
        <input type="text"
            placeholder="Search Anime"
            ref={seacrhRef}
            onKeyDown={handelSearch}
            className="outline-none bg-orange-900 border-none w-[30em] py-2 px-4 rounded-full focus:bg-transparent focus:outline-[#171717] text-slate-50 placeholder-slate-50" />

    )
}
