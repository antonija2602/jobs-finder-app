import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { MdClose } from "react-icons/md"

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)

    const showDropdown = () => {
        setDropdown((prevState) => !prevState)
    }
    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center bg-slate-100 fixed z-20">
            <div className="container mx-auto lg:px-6">
                <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center lg:text-5xl text-3xl">
                                <button className="rounded-full py-1 text-slate-100 bg-purple-900 lg:text-5xl text-3xl outline-none border-none ">
                                    Jo
                                </button>
                                <p className="font-semibold leading-tight text-slate-900">
                                    bline
                                </p>
                            </span>
                        </div>
                    </div>
                    <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
                        <a
                            href="#"
                            className="leading-normal no-underline text-slate-900 font-bold text-lg hover:text-purple-900 ">
                            Find jobs
                        </a>
                        <a
                            href="#"
                            className="leading-normal no-underline text-slate-900 font-bold text-lg hover:text-purple-900">
                            People
                        </a>
                        <a
                            href="#"
                            className="leading-normal no-underline text-slate-900 font-bold text-lg hover:text-purple-900">
                            Hiring site
                        </a>
                        <a
                            href="#"
                            className="leading-normal no-underline text-slate-900 font-bold text-lg hover:text-purple-900">
                            Resume
                        </a>
                    </ul>
                    <div className="flex max-lg:hidden gap-x-4">
                        <button className="rounded-full bg-slate-50 border border-slate-200  text-lg text-slate-900 font-bold px-8 py-3   hover:bg-slate-200 duration-200">
                            Sign Up
                        </button>
                        <button className="rounded-full bg-purple-900 text-lg text-slate-100  font-bold px-8 py-3  hover:opacity-90 duration-200 ">
                            Sign In
                        </button>
                    </div>
                    {dropdown ? (
                        <div
                            onClick={showDropdown}
                            className="lg:hidden text-[22px] cursor-pointer text-slate-900 ">
                            <MdClose />
                        </div>
                    ) : (
                        <div
                            onClick={showDropdown}
                            className="lg:hidden text-[22px] cursor-pointer text-slate-900">
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown ? (
                    <div
                        onClick={showDropdown}
                        className="lg:hidden w-full h-[100vh] fixed top-24 bg-slate-800 ease-in-out duration-100">
                        <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                            <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                                <a
                                    href="#"
                                    className="leading-normal no-underline text-slate-100 font-bold text-lg hover:text-purple-900  duration-150">
                                    Find jobs
                                </a>
                                <a
                                    href="#"
                                    className="leading-normal no-underline text-slate-100 font-bold text-lg hover:text-purple-900  duration-150">
                                    People
                                </a>
                                <a
                                    href="#"
                                    className="leading-normal no-underline text-slate-100 font-bold text-lg hover:text-purple-900 duration-150">
                                    Hiring
                                </a>
                                <a
                                    href="#"
                                    className="leading-normal no-underline text-slate-100 font-bold text-lg hover:text-purple-900 duration-150">
                                    Resume
                                </a>
                            </ul>
                            <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                                <button className="rounded-full bg-slate-200 text-lg text-slate-900  font-bold px-8 py-3 hover:opacity-90 duration-200">
                                    Sign Up
                                </button>
                                <button className="rounded-full bg-purple-900 text-lg text-slate-100  font-bold px-8 py-3 hover:opacity-90 duration-200">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    )
}
