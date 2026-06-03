import {Square, Circle, Triangle} from 'lucide-react'
import {motion} from 'motion/react'

/* Returns a div with the specified coordinates and layout*/
function createWatermark(key, x, y, rotation, color, Icon) {
    return (
        <div
        key = {key}
        className = "absolute pointer-events-none overflow-hidden z-0"
        style = {{
            color: color,
            opacity: 0.20,
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            transform: `rotate(${rotation}deg)`,
            whiteSpace: "nowrap",
        }}
        >
            <Icon size = {48} strokeWidth = {1.5} fill = {color}/>
        </div>

    );

}


/* Background component for randomly layed out phrase as a watermark */
function Background() {
    const elements = []
    const colors = ['#5BA4B5', '#C4D65E', '#E8A562']
    const icons = [Square, Circle, Triangle]
    const rows = 10
    const cols = 6
    let key = 0

    // randomize element position within its own grid cell to reduce overlap
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const xStart = (j / cols) * 100
            const yStart = (i / rows) * 100

            // x and y coordinate should be within its own grid position
            const x = xStart + (Math.random() * (100 / cols))
            const y = yStart + (Math.random() * (100 / rows))
            const rotation = Math.floor((Math.random() * 90) - 45) // -45 to 45 degrees;
            const color = colors[Math.floor(Math.random() * colors.length)]
            const icon = icons[Math.floor(Math.random() * icons.length)]

            elements.push(createWatermark(key, x, y, rotation, color, icon))
            key++
        }

    }


    return (
        <div className = "absolute inset-0 pointer-events-none z-0 bg-[#F5F9FA] overflow-hidden ">
            {elements}
        </div>
    );

}

export default Background;