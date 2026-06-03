import {NavLink} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
import CardStrip from '../components/CardStrip'

const items = [
        {
            icon: "🛡️", 
            title: "Safe & Licensed", 
            subtext: "Assisted living act child care licensed facilities with full safety protocols", 
            color: "border-[#5BA4B5] shadow-[#4A8A9A]", 
            background: "bg-[#5BA4B5]"
        },
        {
            icon: "🎓", 
            title: "Qualified Staff", 
            subtext: "ECE-certified staff with years of experience", 
            color: "border-[#C4D65E] shadow-[#B5C254]", 
            background: "bg-[#C4D65E]"
        },
        {
            icon: "💛", 
            title: "Caring Environment", 
            subtext: "Warm, nurturing spaces designed for little ones", 
            color: "border-[#E8A562] shadow-[#D89350]", 
            background: "bg-[#E8A562]"
        },
        {
            icon: "🌿", 
            title: "Community Focused", 
            subtext: "Proudly serving Ucluelet families since 2001", 
            color: "border-[#C4D65E] shadow-[#B5C254]", 
            background: "bg-[#C4D65E]"
        },

    ]

/* Home page with CTA, programs intro, photo, calendar, slogan */
function Home() {
    
    return (
    <div className = "flex flex-col items-center p-10 mx-auto z-0 max-w-7xl">

        <div className = "flex flex-row mt-10 items-center">
            
            <div className = "flex flex-col gap-6">
                <h1 className = "font-nunito font-bold text-7xl text-[#5BA4B5]">
                    Your Child's Journey Begins Here
                </h1>
                <p className = "text-justify text-[#5B6820] opacity-75 p-4 tracking-wide text-2xl font-semibold">
                    Affordable · Inclusive · Nurturing
                </p>
                <div className = "flex flex-row gap-5">
                    <NavLink 
                    to = "/waitlist" 
                    className = "rounded-md flex items-center justify-center gap-1 p-5 bg-uaccs_orange border-3 border-solid border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                        Join Our Waitlist
                        <ArrowRight/>
                    </NavLink>
                    <NavLink
                    className = "rounded-md justify-center flex items-center gap-1 p-5 px-10 bg-uaccs_orange border-3 border-solid  border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                        Learn More
                        <ArrowRight/>
                    </NavLink>
                </div>
                <div className = "flex gap-15 mt-10">
                    {[
                        {value: "20+", label: "Years of Care"},
                        {value: "$10", label: "Per Day Rate"},
                        {value: "200+", label: "Happy Families"}
                    ].map(stat => (
                        <div key = {stat.label}>
                            <div className = "font-nunito text-3xl font-extrabold text-[#5BA4B5]">{stat.value}</div>
                            <div className = "text-md text-black">{stat.label}</div>

                        </div>
                    ))}

                </div>
            </div>

            <div className = "flex shadow-2xl">
                <img 
                    src = "/test_img.jpg" 
                    alt = "test image" 
                    className = "pointer-events-none select-none h-150 rounded-lg object-cover"
                />
            </div>
        </div>
        <CardStrip items = {items} />
    </div>
    )

}


export default Home;