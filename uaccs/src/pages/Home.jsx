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
    <div className = "flex flex-col items-center p-10 mx-auto z-0 w-full">
        <div className = "flex flex-row mt-10 gap-30 justify-center items-center">
            <div className = "max-w-lg flex flex-col gap-6">
                <h1 className = "font-nunito font-bold text-7xl text-[#5BA4B5]">
                    Your Child's Journey Begins Here
                </h1>
                <p className = "text-justify text-[#5B6820] opacity-75 p-4 tracking-wide text-xl font-semibold">
                    Affordable · Inclusive · Nurturing
                </p>
                <div className = "flex flex-row gap-4 w-full">
                    <NavLink 
                    to = "/waitlist" 
                    className = "rounded-md flex items-center w-1/2 justify-center gap-1 p-5 bg-uaccs_orange border-3 border-solid border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                        Join Our Waitlist
                        <ArrowRight/>
                    </NavLink>
                    <NavLink
                    to = "/about/who-we-are"
                    className = "rounded-md justify-center flex items-center w-1/2 gap-1 p-5 bg-uaccs_orange border-3 border-solid  border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                        Learn More
                        <ArrowRight/>
                    </NavLink>
                </div>
                <div className = "flex gap-10 mt-10">
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
                    className = "w-145 pointer-events-none select-none h-150 rounded-lg object-cover"
                />
            </div>
        </div>
        <CardStrip items = {items} />
        <section className = "mt-20 rounded-lg py-10 w-full h-full">
            <h2 className = "text-4xl font-nunito font-bold text-uaccs_blue text-center">Why Parents Choose Us</h2>
            <div className = "grid grid-rows-4 grid-cols-1 gap-10 w-1/2">
                <div className = " mt-10 px-6 py-3 rounded-2xl text-2xl font-black font-nunito bg-uaccs_orange text-white w-5/12">
                💰 Just $10/day!
                </div>
                <h3 className = "font-nunito font-bold text-xl text-[#264D57]">
                    Affordable, Inclusive, Safe, and Nurturing childcare for every family
                </h3>
                <p>
                    Paragraph stuff.....
                </p>
            </div>

        </section>
        

        
    </div>
    )

}


export default Home;