import {motion, useScroll, useTransform} from 'motion/react'
import {useRef} from 'react'

const steps = [
    {id: 1, title: "Our Mission & Purpose"},
    {id: 2, title: "Vision for the Future"},
    {id: 3, title: "Unique Strengths & Capabilities"},
    {id: 4, title: "Measuring Success"},
    {id: 5, title: "Adaptation & Innovation"},
    {id: 6, title: "Ethical Considerations"}
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
            <div className = "absolute top-0 bottom-0 w-1.5 bg-gray-300">
                <motion.div
                style = {{height}}
                className = "w-full absolute top-0 left-0 bg-uaccs_green origin-top"
                />

                <div className = "relative z-20 flex flex-col justify-between h-full -translate-x-1/2 -left-1/2">
                    {steps.map(step => (
                        <Step step = {step} key = {step.id} scrollYProgress={scrollYProgress}/>
                    ))}
                </div>
            </div>






        </div>
    )

}

function Step({step, scrollYProgress}) {

    
    return (
        <div className = "flex items-center gap-">
            <div className = "relative w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 bg-white">
                <motion.div className = "bg-uaccs_green" style = {{}}>

                </motion.div>
            </div>
            <div className = "text-sm text-gray-500 whitespace-nowrap">{step.title}</div>
        </div>
    )

}

export default ProgressBar;