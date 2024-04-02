import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { HiOutlineHeart } from "react-icons/hi"
import { HiStar } from "react-icons/hi"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

export default function TopCompany() {
    const Jobs = ({ type, img, title, color, bg_color }) => {
        return (
            <div className="shadow-lg rounded lg:w-[95%] mt-12 mx-2">
                <div className="bg-slate-50 rounded-t-md px-6 py-8 flex flex-col items-center">
                    <span className="flex items-center justify-between w-full">
                        <button
                            className="rounded-full bg-transparent text-lg text-slate-900 px-8 py-2  hover:bg-slate-200 duration-200 "
                            style={{ border: `3px solid ${color}` }}>
                            {type}
                        </button>
                        <HiOutlineHeart className="text-3xl" />
                    </span>
                    <img
                        className="w-28 h-28 rounded-full my-8"
                        src={img}
                        alt=""
                    />
                </div>
                <div
                    className="rounded-b-md px-6 py-8 "
                    style={{ backgroundColor: `${bg_color}` }}>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="py-2 text-lg">803 46th St Brooklin, NY</p>
                    <div className="pb-4 flex ">
                        {[...Array(5)].map((_, index) => {
                            return (
                                <HiStar
                                    key={index}
                                    className="text-yellow-500 text-2xl"
                                />
                            )
                        })}
                    </div>
                    <div className="p-2 rounded-md flex justify-between border border-slate-200 text-sm">
                        <p>Salary</p>
                        <p>3345 EUR</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-6 py-24">
                <div className="md:flex items-center justify-between">
                    <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
                        Top Company Registered
                    </h2>
                    <span className="md:flex gap-x-4">
                        <button className="rounded-full md:my-0 my-4 bg-purple-900 text-lg text-slate-100 font-bold px-8 py-3 hover:opacity-90   duration-200">
                            Browse Jobs
                        </button>
                        <button className="rounded-full bg-slate-50 border border-slate-200  text-lg text-slate-900 font-bold px-8 py-3   hover:bg-slate-200 duration-200">
                            See all Companies
                        </button>
                    </span>
                </div>
                <p className="text-2xl mt-4 font-light ">
                    Know your worth and find the job that qualify your life
                </p>
                <div className="relative">
                    <Carousel
                        className="gd-carousel"
                        arrows={true}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        <Jobs
                            bg_color="#f1f5f9"
                            color="#93c5fd"
                            img="src\assets\google.png"
                            title="Product Design"
                            type="Internship"
                        />
                        <Jobs
                            bg_color="#f1f5f9"
                            color="#93c5fd"
                            img="src\assets\pinterest.png"
                            title=" Product Mockup"
                            type="Internship"
                        />
                        <Jobs
                            bg_color="#f1f5f9"
                            color="#fdba74"
                            img="src\assets\spotify.png"
                            title="Web Mainenance"
                            type="Full Time"
                        />
                        <Jobs
                            bg_color="#f1f5f9"
                            color="#86efac"
                            img="src\assets\dribble.png"
                            title="PHP Developer"
                            type="Remote"
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
