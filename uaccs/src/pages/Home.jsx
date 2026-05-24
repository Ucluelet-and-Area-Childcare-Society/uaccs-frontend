import {NavLink} from 'react-router-dom'
import {ArrowRight, School, Shapes} from 'lucide-react'

/* Home page with CTA, programs intro, photo, calendar, slogan */
function Home() {

    const programs = [
        {
            title: "Ucluelet Children's Centre",
            icon: Shapes,
            ages: "Ages: x - y",
            textColor: "text-[#5BA4B5]",
            borderColor: "border-[#5BA4B5]",
            shadowColor: "shadow-uaccs_blue"
        },
        {
            title: "Little Beans Infant Toddler Centre",
            icon: Shapes,
            ages: "Ages: 0 - 36 months",
            textColor: "text-uaccs_green ",
            borderColor: "border-uaccs_green",
            shadowColor: "shadow=[#A8BA4E]"
        },
        {
            title: "After-school Care",
            icon: School,
            ages: "Ages: 5 - 12",
            textColor: "text-uaccs_orange",
            borderColor: "border-uaccs_orange",
            shadowColor: "shadow-[#D89350]"
        }

    ]

    return (
       <div className = "flex flex-col items-center p-10 mx-auto z-0 w-full">
        <h1 className = "font-dancing font-bold text-[#A8BA4E] text-[38px]">
            Committed to providing affordable, inclusive, safe, and nurturing childcare.
        </h1>
        <div className = "flex flex-row mt-20 gap-30 justify-center">
            <img 
            src = "/test_img.jpg" 
            alt = "test image" 
            width = "550" 
            height = "550" 
            className = "border-5 border-uaccs_green outline-2 outline-[#5BA4B5] outline-offset-10 shrink-0"
            />
            <div className = "mt-10 w-1/3 flex flex-col gap-9">
                <h2 className = "font-dancing font-semibold text-3xl text-[#5BA4B5]">
                    Some Call to Action here...
                </h2>
                <p className = "text-justify opacity-75 text-gray-700 tracking-wide leading-6">
                    At UACCS, we believe that every child deserves the opportunity to thrive, 
                    and it is our privilege and honour to play a part in shaping a brighter future 
                    for the next generation of Ucluelet residents. 
                </p>
                <NavLink 
                    to = "/waitlist" 
                    className = "flex items-center gap-0.5 p-4 w-1/2 bg-uaccs_orange border-3 border-solid border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                    Join Our Waitlist
                    <ArrowRight/>
                </NavLink>
            </div>
        </div>


        <div className = "grid grid-cols-3 grid-rows-1 max-w-6xl gap-15 w-full mt-20 text-center font-dancing text-2xl">
            <div className = "bg-white h-64 border-6 border-[#5BA4B5] shadow-custom_shadow shadow-uaccs_blue text-[#5BA4B5] py-5">
                Ucluelet Children's Centre
            </div>
            <div className = "bg-white border-6 border-uaccs_green shadow-custom_shadow shadow-[#A8BA4E] text-uaccs_green py-5 flex flex-col items-center justify-between">
                Little Beans Infant Toddler Centre
                <Shapes size = {36} />
                <div className = "text-gray-700 font-extralight text-[18px] font-serif">
                    Ages: 0 - 36 months
                </div>
            </div>
            <div className = "bg-white border-6 border-uaccs_orange shadow-custom_shadow shadow-[#D89350] text-uaccs_orange py-5 flex flex-col items-center justify-between">
                After-school Care
                <School size = {36}/>
                <div className = "text-gray-700 font-extralight text-[18px] font-serif">
                    Ages: 5 - 12
                </div>
            </div>
        </div>  
       </div>
    )

}

export default Home;