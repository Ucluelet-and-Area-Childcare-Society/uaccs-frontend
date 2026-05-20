
const phrase = "$10 per day";

/* Returns a div with the specified coordinates and layout*/
function createWatermark(key, x, y, rotation) {
    return (
        <div
        key = {key}
        className = "absolute pointer-events-none overflow-hidden z-0"
        style = {{
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 300,
            fontSize: "14px",
            color: "#D4C5A9",
            opacity: 0.35,
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            transform: `rotate(${rotation}deg)`,
            whiteSpace: "nowrap",
        }}
        >
            {phrase}
        </div>

    );

}


/* Background component for randomly layed out phrase as a watermark */
function Background({children}) {
    const elements = [];
    const rows = 15;
    const cols = 12;
    let key = 0;

    // randomize element position within its own grid cell to reduce overlap
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // x and y coordinate should be within its own grid position
            const x = 
            const y = 
            const rotation = Math.floor((Math.random() * 60) - 30) // -30 -- 30 degrees;

            elements.push(createWatermark(key, x, y, rotation));
            key++;
        }

    }



    return (
        <div className = "min-h-screen bg-[#F7F5F0] overflow-hidden ">
            {elements}
            {children}
        </div>
    );

}

export default Background;