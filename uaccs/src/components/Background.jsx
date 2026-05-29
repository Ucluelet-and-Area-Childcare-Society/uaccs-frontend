import {Square, Circle, Triangle} from 'lucide-react'
import { useRef, useEffect } from 'react';


/* Background component for randomly layed out phrase as a watermark */
function Background() {
    const itemsRef = useRef([])
    const valueRef = useRef()
    const NUM_ELEMENTS = 100


    // trigger render only once
    useEffect(() => {
        itemsRef.current = Array.from({length : NUM_ELEMENTS}).map(() => ({
            elem: null,
            x: Math.random() * (window.innerWidth - 50),
            y: Math.random() * (window.innerHeight - 50),
            dx: (Math.random() > 0.5 ? 1 : -1),
            dy: (Math.random() > 0.5 ? 1 : -1),
        }))
    }, [])

    const animate = () => {


        valueRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        valueRef.current = requestAnimationFrame(animate) // start the animation
        return () => cancelAnimationFrame(valueRef.current)
    }, [])


    return (
        <div className = "fixed inset-0 pointer-events-none z-0 bg-[#F5F9FA] overflow-hidden ">
            
        </div>
    );

}

export default Background;