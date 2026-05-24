import {NavLink} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'

/* Home page with CTA, programs intro, photo, calendar, slogan */
function Home() {

    return (
       <div className = "flex flex-col items-start p-10 mx-auto z-0">
        <h1 className = "font-dancing font-bold text-[#A8BA4E] text-[38px]">
            Committed to providing affordable, inclusive, safe, and nurturing childcare.
        </h1>
        <div className = "flex flex-row mt-20 gap-25">
            <img 
            src = "/test_img.jpg" 
            alt = "test image" 
            width = "500" 
            height = "500" 
            className = "border-5 border-uaccs_green outline-2 outline-[#5BA4B5] outline-offset-10 shrink-0"
            />
            <div className = "mt-10 w-1/3 flex flex-col gap-7">
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
                    className = "flex items-center gap-0.5 p-4 w-1/2 bg-uaccs_orange border-3 border-solid border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all active:translate-y-1 active:border-b-0 active:border-r-0">
                    Join Our Waitlist
                    <ArrowRight/>
                </NavLink>
            </div>
        </div>
        
       
       
       
       
       </div>
    )

}

export default Home;