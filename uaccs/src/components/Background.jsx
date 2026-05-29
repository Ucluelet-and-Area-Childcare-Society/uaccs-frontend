import {Square, Circle, Triangle} from 'lucide-react'
import { useRef, useEffect } from 'react';


/* Background component for randomly layed out phrase as a watermark */
function Background() {
    const itemsRef = useRef([])
    const valueRef = useRef()

    // trigger render only once
    useEffect(() => {

    }, [])



    return (
        <div className = "fixed inset-0 pointer-events-none z-0 bg-[#F5F9FA] overflow-hidden ">
            
        </div>
    );

}

export default Background;