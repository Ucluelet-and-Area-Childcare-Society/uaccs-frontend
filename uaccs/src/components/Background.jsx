

/* Background component for randomly layed out phrase as a watermark */
function Background({children}) {

    return (
        <div className = "min-h-screen bg-[#F7F5F0] overflow-hidden ">
            {children}
        </div>
    )

}

export default Background;