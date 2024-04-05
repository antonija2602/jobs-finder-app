import React from "react"
import { HiGlobe } from "react-icons/hi"
import { BiChart } from "react-icons/bi"
import { HiPencilSquare } from "react-icons/hi2"
import { GiHamburger } from "react-icons/gi"
import { FaHeartPulse } from "react-icons/fa6"
import { TbCalculator } from "react-icons/tb"

export default function FeaturedJobs() {
    const Offers = ({
        icon1,
        title,
        position,
        location,
        type,
        company,
        icon2,
        bg1,
        color,
        bg2,
    }) => {
        return (
            <div className="bg-slate-50 shadow-md rounded-[10px] px-6 py-8 flex flex-col justify-center gap-12  hover:bg-slate-200 hover:shadow-lg  duration-300">
                <div className="flex items-center gap-x-4 ">
                    <button
                        className="p-2 rounded-full bg-purple-900 text-4xl"
                        style={{ background: `${bg1}`, color: `${color}` }}>
                        {icon1}
                    </button>
                    <span>
                        <p className="text-2xl font-semibold">{title}</p>
                        <p className="text-lg">20 Opening/s</p>
                    </span>
                </div>
                <div>
                    <p className="text-3xl font-semibold">{position}</p>
                    <span className="flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4">
                        <p className="flex items-center gap-x-2">
                            <HiGlobe className="text-2xl" /> {location}
                        </p>
                        <p className="text-slate-900">{type}</p>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span>
                        <p className="text-slate-900 text-lg">
                            June 8, 2022 by
                        </p>
                        <p className="text-xl font-medium">{company}</p>
                    </span>
                    <button
                        className="rounded-[10px] p-2 text-slate-50"
                        style={{ background: `${bg2}` }}>
                        {icon2}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-6 py-24">
                <div className="md:flex items-center justify-between">
                    <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
                        Featured Job Offers
                    </h2>
                    <button className="rounded-full bg-purple-900 text-lg text-slate-100  font-bold px-8 py-3  hover:opacity-90 duration-200 ">
                        All job offers
                    </button>
                </div>
                <p className="text-2xl mt-4 font-light">
                    Know your worth and find the job that qualify your life
                </p>
                <div className="mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<BiChart size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<BiChart size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<BiChart size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<FaHeartPulse size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<GiHamburger size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                    <Offers
                        bg1="#f4f4ff"
                        color="#69bf40"
                        company="Software"
                        icon1={<TbCalculator size={40} />}
                        location="Darmstadt, HE"
                        position="Financial Analyst"
                        title="Finance"
                        type="Full Time"
                    />
                </div>
            </div>
        </div>
    )
}
