import {Square, Circle, Triangle} from 'lucide-react'
import { useRef, useEffect } from 'react';


/* Background component for randomly layed out phrase as a watermark */
function Background() {
    const itemsRef = useRef([])
    const valueRef = useRef()
    const NUM_ELEMENTS = 100
    const boundary = 50


    // trigger render only once
    useEffect(() => {
        itemsRef.current = Array.from({length : NUM_ELEMENTS}).map(() => ({
            elem: null,
            x: Math.random() * (window.innerWidth - boundary),
            y: Math.random() * (window.innerHeight - boundary),
            dx: (Math.random() > 0.5 ? 1 : -1),
            dy: (Math.random() > 0.5 ? 1 : -1),
        }))
    }, [])

    const animate = () => {
        itemsRef.current.forEach((item) => {
            item.x += item.dx
            item.y += item.dy

            // swap direction if exceeds bounds
            if (item.x <= 0 || item.x + boundary >= window.innerWidth) {
                item.dx *= -1

            }

            if (item.y <= 0 || item.y + boundary >= window.innerHeight) {
                item.dy *= -1

            }  
        });

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