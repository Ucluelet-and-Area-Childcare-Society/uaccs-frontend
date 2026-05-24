
/* Home page with CTA, programs intro, photo, calendar, slogan */
function Home() {

    return (
       <div className = "flex flex-col items-start p-10 mx-auto">
        <h1 className = "z-0 font-dancing font-bold text-[#A8BA4E] text-4xl">
            Committed to providing affordable, inclusive, safe, and nurturing childcare.
        </h1>
        <img 
        src = "/test_img.jpg" 
        alt = "test image" 
        width = "500" 
        height = "500" 
        className = "mt-20 z-0 border-5 border-uaccs_green outline-2 outline-[#5BA4B5] outline-offset-10"
        />
       
       
       
       
       </div>
    )

}

export default Home;