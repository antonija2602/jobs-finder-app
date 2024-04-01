import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Recommended from "../components/Recommended"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Recommended />
        </div>
    )
}
