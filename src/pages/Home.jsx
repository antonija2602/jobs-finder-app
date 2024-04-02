import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Recommended from "../components/Recommended"
import TopCompany from "../components/TopCompany"
import FeaturedJobs from "../components/FeaturedJobs"
import Testimonials from "../components/Testimonials"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Recommended />
            <TopCompany />
            <FeaturedJobs />
            <Testimonials />
        </div>
    )
}

//light
{
    /* <button className="rounded-full bg-slate-50 border border-slate-200  text-lg text-slate-900 font-bold px-8 py-3   hover:bg-slate-200 duration-200">
Sign Up
</button>

//purple
<button className="rounded-full bg-purple-900 text-lg text-slate-100  font-bold px-8 py-3  hover:opacity-90 duration-200 ">
Sign In
</button> */
}
