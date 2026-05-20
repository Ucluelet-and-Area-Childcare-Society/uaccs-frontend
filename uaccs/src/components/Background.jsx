

/* Background component for randomly layed out phrase as a watermark */
function Background({Children}) {

    return (
        <div className = "min-h-screen bg-[#F7F5F0] overflow-hidden ">
            {Children}
        </div>
    )

}

export default Background;