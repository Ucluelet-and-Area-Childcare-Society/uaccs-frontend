
const phrase = "$10 per day";

/* Returns a div with the specified coordinates and layout*/
function createWatermark(i, x, y, rotation) {
    return (
        <div
        key = {i}
        className = "fixed pointer-events-none overflow-hidden z-0"
        style = {{
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 600,
            fontSize: "13px",
            color: "#D4C5A9",
            opacity: 0.35
        }}
        >
            {phrase}
        </div>

    );

}



/* Background component for randomly layed out phrase as a watermark */
function Background({children}) {
    const elements = []

    for (let i = 0; i < 150; i++) {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const rotation = Math.floor((Math.random() * 60) - 30); // -30 -- 30 degrees
        
        elements.push(createWatermark(i, x, y, rotation));



    }



    return (
        <div className = "min-h-screen bg-[#F7F5F0] overflow-hidden ">
            {children}
        </div>
    );

}

export default Background;