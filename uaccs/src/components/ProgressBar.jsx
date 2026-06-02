import {motion, useScroll, useTransform} from 'motion/react'
import {useRef} from 'react'

const steps = [
    {id: 1, title: "Our Mission & Purpose"},
    {id: 2, title: "Vision for the Future"},
    {id: 3, title: "Unique Strengths & Capabilities"},
    {id: 3, title: "Measuring Success"},
    {id: 4, title: "Adaptation & Innovation"},
    {id: 5, title: "Ethical Considerations"}
]

/* Progress bar component to showcase current navigation position */
function ProgressBar() {
    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) // Mapping scroll progress to 0 - 1


    return (
        <div className = "fixed left-5 top-32 bottom-32" ref = {ref}>
            <div className = "absolute top-0 bottom-0 w-2 bg-gray-300"/>
            <motion.div
            style = {height}
            className = "absolute bg-pink-500"
            />
            <div className = "flex flex-col justify-between h-full">
                {steps.map(step => (
                    <></>
                ))}

            </div>






        </div>
    )

}

export default ProgressBar;