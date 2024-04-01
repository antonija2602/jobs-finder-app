import React from "react"
import { FcAutomotive } from "react-icons/fc"
import { PiHeartbeat } from "react-icons/pi"
import { LuConstruction } from "react-icons/lu"
import { FcSportsMode } from "react-icons/fc"
import { LiaIndustrySolid } from "react-icons/lia"
import { GrAnnounce } from "react-icons/gr"
import { HiOutlineHeart } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5"
import { LiaDotCircle } from "react-icons/lia"

export default function Recommended() {
    const Categories = ({ image, title, opening }) => {
        return (
            <div className="bg-slate-50 rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
                <span className="flex items-center gap-x-4">
                    {typeof image === "string" ? (
                        <img
                            src={image}
                            alt=""
                            width={30}
                        />
                    ) : (
                        image
                    )}
                    <p>{title}</p>
                </span>
                <p>{opening} Opening/s</p>
            </div>
        )
    }

    const Recommended = ({
        time,
        type,
        title,
        amount,
        country,
        job,
        bgColor,
        color,
    }) => {
        return (
            <div
                className="w-full rounded-[15px] shadow    "
                style={{ borderLeft: `7px solid ${color}` }}>
                <div className="bg-slate-50 w-full p-8 rounded-t-[10px]">
                    <span className="flex items-start justify-between">
                        <span className="flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg">
                            <button
                                className="p-4 rounded-md outline-none md:mb-0 mb-4 hidden md:flex"
                                style={{ backgroundColor: `${bgColor}` }}>
                                <GrAnnounce
                                    size={30}
                                    style={{ color: `${color}` }}
                                />
                            </button>
                            <p>Type : {type}</p>
                            <p>Time : {time} years ago</p>
                        </span>
                        <HiOutlineHeart className="text-2xl" />
                    </span>
                    <div className="md:pl-24">
                        <p className="text-2xl font-semibold md:mt-0 mt-4">
                            {title}
                        </p>
                        <p className="text-xl pt-4">Euro {amount} / yearly</p>
                    </div>
                </div>
                <div
                    className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px]  "
                    style={{ backgroundColor: `${bgColor}` }}>
                    <div className="flex-1 md:flex items-center gap-x-8 text-2xl">
                        <span className="flex items-center gap-x-3">
                            <IoLocationOutline
                                className="text-2xl"
                                style={{ color: `${color}` }}
                            />
                            <p className="text-xl">{country}</p>
                        </span>
                        <span className="flex items-center gap-x-3 lg:py-0 py-4">
                            <LiaDotCircle
                                className="text-2xl"
                                style={{ color: `${color}` }}
                            />

                            <p className="text-xl ">{job}</p>
                        </span>
                    </div>
                    <button className="rounded-full bg-slate-50 border border-slate-300  text-lg text-slate-900 font-bold px-8 py-3 outline-none  hover:bg-slate-200 duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-6 py-24 ">
                <div className="md:flex items-center justify-between ">
                    <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
                        Recommended jobs
                    </h2>
                    <span className="md:flex gap-x-4">
                        <button className="rounded-full md:my-0 my-4 bg-purple-900 text-lg text-slate-100 font-bold px-8 py-3  hover:opacity-90   duration-200 ">
                            Latest Job
                        </button>
                        <button className="rounded-full  text-lg text-slate-900 font-bold px-8 py-3  bg-transparent border border-purple-300  shadow-lg shadow-purple-200  hover:border-purple-500 hover:shadow-purple-200 duration-200">
                            Premium Jobs
                        </button>
                    </span>
                </div>
                <p className="text-2xl mt-4 font-light">
                    Explore suggested job searches
                </p>
                <div className="xl:flex xl:justify-evenly mt-16 gap-6">
                    <div className="xl:w-2/5">
                        <div className="bg-slate-50 rounded-[10px] py-8 pl-6 mb-4">
                            <h2 className="text-4xl font-semibold">
                                Job Categories
                            </h2>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <Categories
                                image={<FcAutomotive />}
                                opening="3"
                                title="Automotive"
                            />
                            <Categories
                                image={<PiHeartbeat />}
                                opening="1"
                                title="Health and care"
                            />
                            <Categories
                                image={<LuConstruction />}
                                opening="2"
                                title="Construction"
                            />
                            <Categories
                                image={<FcSportsMode />}
                                opening="1"
                                title="Fitness Trainer"
                            />
                            <Categories
                                image={<LiaIndustrySolid />}
                                opening="0"
                                title="Industry"
                            />
                            <Categories
                                image={<LuConstruction />}
                                opening="2"
                                title="Construction"
                            />
                            <Categories
                                image={<FcSportsMode />}
                                opening="1"
                                title="Fitness Trainer"
                            />
                            <Categories
                                image={<LiaIndustrySolid />}
                                opening="0"
                                title="Industry"
                            />
                        </div>
                    </div>
                    <div className="xl:w-3/5 flex flex-col gap-y-4 xl:mt-0 mt-4 ">
                        <Recommended
                            amount="3000-4000"
                            bgColor="#f4f4ff"
                            color="#4b4b4b"
                            country="Germany"
                            job="Construction"
                            time="4"
                            title="Project manager"
                            type="Temporary"
                        />
                        <Recommended
                            amount="3000-4000"
                            bgColor="#E4D9CD"
                            color="#B3532b"
                            country="Germany"
                            job="Construction"
                            time="4"
                            title="Project manager"
                            type="Temporary"
                        />
                        <Recommended
                            amount="3000-4000"
                            bgColor="#D8e6d1"
                            color="#69bf40"
                            country="Germany"
                            job="Construction"
                            time="4"
                            title="Project manager"
                            type="Temporary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
