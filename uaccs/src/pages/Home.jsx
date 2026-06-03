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
        <div className = "flex flex-row mt-10 gap-30 justify-center items-center">

            <div className = "w-1/3 flex flex-col gap-6">
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
                    className = "w-145 pointer-events-none h-150 rounded-lg object-cover"
                />
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