import React from "react"
import { HiSearch } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5"

export default function Hero() {
    return (
        <div className="bg-slate-50 pt-24">
            <div className="flex flex-col items-center justify-center min-h[60vh] py-16 px-6">
                <h1 className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal font-bold text-center">
                    Find your{" "}
                    <span className="bg-purple-900 text-slate-100 whitespace-pre px-1 ">
                        dream jobs
                    </span>{" "}
                    in <br /> Germany
                </h1>
                <p className="text-2xl lg:w-1/2 text-center leading-10 my-8 font-medium">
                    When you are searching for a job, there are a few things you
                    can do to get the most of your search
                </p>
                <div className="flex items-center border-2 border-solid border-slate-300 rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4">
                    <input
                        type="text"
                        placeholder="Job title or keyword"
                        className="bg-transparent h-full w-full outline-none absolute px-20 xl:text-2xl text-base"
                    />
                    <button className=" flex items-center justify-center bg-purple-900 rounded-full text-slate-100 w-12 h-12  absolute left-2  ">
                        <HiSearch className="text-2xl" />
                    </button>
                    <button className="flex items-center bg-slate-200 absolute right-1 rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2 ">
                        <IoLocationOutline className="text-slate-900 lg:text-2xl" />{" "}
                        Any location
                    </button>
                </div>
            </div>
        </div>
    )
}
