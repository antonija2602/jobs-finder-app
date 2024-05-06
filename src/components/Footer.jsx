import React from "react"
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className="text-slate-100">
            <div className="bg-slate-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="lg:text-4xl  text-center font-semibold">
                        Ready For Your Next Hire With Us?
                    </h2>
                    <p className="lg:w-1/2 mx-auto text-center text-xl py-8">
                        Along with conventional advertising & below the line
                        activities & organizations have come to realize that
                        they need to invest
                    </p>
                    <div className="flex justify-center py-8">
                        <button className="rounded-full bg-slate-50 border border-slate-200  text-lg text-slate-900 font-bold px-8 py-3   hover:bg-slate-200 duration-200">
                            Login to Community
                        </button>
                    </div>
                    <section className="flex flex-wrap pt-16 justify-between gap-8">
                        <div className="flex flex-col justify-between">
                            <span className="flex items-center lg:text-5xl text-3xl">
                                <button className="rounded-full py-1  bg-purple-900 lg:text-5xl text-3xl outline-none border-none ">
                                    Jo
                                </button>
                                <p className="font-semibold leading-tight ">
                                    bline
                                </p>
                            </span>
                            <p className="text-lg">Call us</p>
                            <p>(123) 456-7890</p>
                            <p className=" text-lg">
                                Dohrntwiete 20, 3rd Floor <br />
                                Hamburg, 22529 <br />
                                office@jobline.com
                            </p>
                        </div>

                        <div>
                            <h6 className=" text-2xl pb-6">Community</h6>
                            <ul className="flex flex-col gap-6 text-lg">
                                <a
                                    href="#"
                                    className=" no-underline hover:text-slate-300">
                                    Against Discrimination
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Invite friends
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Gift cards
                                </a>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-2xl pb-6">Bookings support</h6>
                            <ul className="flex flex-col gap-6 text-lg">
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    COVID-19
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Help Center
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Support
                                </a>
                                <a
                                    className="no-underline hover:text-slate-300"
                                    href="#">
                                    Trust & Safety
                                </a>
                            </ul>
                        </div>
                        <div>
                            <h6 className=" text-2xl pb-6">About</h6>
                            <ul className="flex flex-col gap-6 text-lg">
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    How it works
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Careers
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    About us
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Media
                                </a>
                            </ul>
                        </div>
                        <div>
                            <h6 className=" text-2xl pb-6">
                                Become an employer
                            </h6>
                            <ul className="flex flex-col gap-6 text-lg">
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Post your job
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Business account
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Resource Center
                                </a>
                                <a
                                    className=" no-underline hover:text-slate-300"
                                    href="#">
                                    Community
                                </a>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="flex justify-center items-center gap-16 mt-40 ">
                    <p>Created by AZ. {year}</p>
                    <span className="flex gap-5">
                        <a
                            href="https://www.facebook.com/spin2602"
                            target="_blank">
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/antonija-zrno-az/"
                            target="_blank">
                            <FaLinkedin size={30} />
                        </a>

                        <a
                            href="https://github.com/antonija2602"
                            target="_blank">
                            <FaGithub size={30} />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
