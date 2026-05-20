
const phrase = "$10 per day";

/* Returns a div with the specified coordinates and layout*/
function createWatermark(key, x, y, rotation) {
    return (
        <div
        key = {key}
        className = "font-dancing absolute pointer-events-none overflow-hidden z-0"
        style = {{
            fontWeight: 400,
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
function Background() {
    const elements = []
    const rows = 25
    const cols = 15
    let key = 0

    // randomize element position within its own grid cell to reduce overlap
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const xStart = (j / cols) * 100
            const yStart = (i / rows) * 100

            // x and y coordinate should be within its own grid position
            const x = xStart + (Math.random() * (100 / cols))
            const y = yStart + (Math.random() * (100 / rows))
            const rotation = Math.floor((Math.random() * 40) - 20) // -20 to 20 degrees;

            elements.push(createWatermark(key, x, y, rotation))
            key++
        }

    }


    return (
        <div className = " ixed inset-0 pointer-events-none z-0 bg-[#F7F5F0] overflow-hidden ">
            {elements}
        </div>
    );

}

export default Background;