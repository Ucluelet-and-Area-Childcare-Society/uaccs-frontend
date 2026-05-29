import {NavLink} from 'react-router-dom'
import {ArrowRight, School, Shapes, Backpack} from 'lucide-react'

/* Home page with CTA, programs intro, photo, calendar, slogan */
function Home() {
    const programs = [
        {
            title: "Ucluelet Children's Centre",
            icon: Backpack,
            ages: "Ages: 0 - 12 years",
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
            shadowColor: "shadow-[#A8BA4E]"
        },
        {
            title: "After-school Care",
            icon: School,
            ages: "Ages: 5 - 12 years",
            textColor: "text-uaccs_orange",
            borderColor: "border-uaccs_orange",
            shadowColor: "shadow-[#D89350]"
        }

    ]

    return (
    <div className = "flex flex-col items-center p-10 mx-auto z-0 w-full">
        <h1 className = "font-uaccs font-bold text-[#A8BA4E] text-[50px]">
            Committed to providing affordable, inclusive, safe, and nurturing childcare.
        </h1>
        <div className = "flex flex-row mt-20 gap-30 justify-center">

            <div className = "rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-lg border-6 border-dashed border-uaccs_green">
                <img 
                    src = "/test_img.jpg" 
                    alt = "test image" 
                    width = "550" 
                    height = "550" 
                    className = "pointer-events-none object-cover"
                />
            </div>




            <div className = "mt-10 w-1/3 flex flex-col gap-9">
                <h2 className = "font-uaccs font-semibold text-5xl text-[#5BA4B5]">
                    $10/day Daycare
                </h2>
                <p className = "text-justify opacity-75 text-gray-700 tracking-wide leading-6 font-schoolbell text-2xl">
                    At UACCS, we believe that every child deserves the opportunity to thrive, 
                    and it is our privilege and honour to play a part in shaping a brighter future 
                    for the next generation of Ucluelet residents. 
                </p>
                <NavLink 
                    to = "/waitlist" 
                    className = "font-schoolbell flex items-center gap-0.5 p-4 w-1/2 bg-uaccs_orange border-3 border-solid border-[#D89350] text-white shadow-custom_shadow shadow-[#D89350] transition-all duration-200 hover:translate-y-1 hover:border-b-0 hover:border-r-0">
                    Join Our Waitlist
                    <ArrowRight/>
                </NavLink>
            </div>
        </div>
        <div className = "grid grid-cols-3 grid-rows-1 max-w-6xl gap-15 w-full mt-20 text-center font-dancing text-2xl">
          {programs.map((program, index) => {

            const Icon = program.icon
            return (
                <div 
                key = {index} 
                className = {`bg-white h-64 border-6 py-5 shadow-custom_shadow flex flex-col items-center justify-between ${program.borderColor} ${program.textColor} ${program.shadowColor}`}>
                    <h3 className = "font-uaccs text-3xl" >{program.title}</h3>
                    <Icon size = {36} />
                    <div className = "text-gray-700 font-extralight text-[18px] font-schoolbell">
                        {program.ages}
                    </div>
                </div>
            )
          })}  
        </div>
        <div className = "w-full  mt-20 mb-20">
            <iframe src={import.meta.env.VITE_GOOGLE_CALENDAR_URL} className = "w-full h-150"></iframe>
        </div>
    </div>
    )

}

export default Home;