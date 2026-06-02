import {motion, useScroll, useTransform} from 'motion/react'

const steps = [
    {id: 1, title: "Our Mission & Purpose"},
    {id: 2, title: "Vision for the Future"},
    {id: 3, title: "Unique Strengths & Capabilities"},
    {id: 4, title: "Measuring Success"},
    {id: 5, title: "Adaptation & Innovation"},
    {id: 6, title: "Ethical Considerations"}
]

/* Progress bar component to showcase current navigation position */
function ProgressBar({containerRef}) {

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) // Mapping scroll progress to 0 - 1


    return (
        <div className = "fixed left-5 top-38 bottom-32">
            <div className = "absolute top-0 bottom-0 w-1.5 bg-gray-300">
                <motion.div
                style = {{height}}
                className = "w-full absolute top-0 left-0 bg-[#4F8A3A] origin-top"
                />

                <div className = "relative z-20 flex flex-col justify-between h-full -translate-x-1/2 -left-1/2">
                    {steps.map((step, index) => (
                        <Step step = {step} key = {step.id} index = {index} scrollYProgress={scrollYProgress}/>
                    ))}
                </div>
            </div>






        </div>
    )

}

/* Step component represents dots along progress bar indicating user position relative to overall page */
function Step({step, scrollYProgress, index}) {

    const target = index / (steps.length - 1)

    const fillAmt = useTransform(
        scrollYProgress,
        [target - 0.02, target],
        [0, 1],
     )

     const color = useTransform(
        scrollYProgress,
        [target - 0.02, target],
        ["#a0aec0", "#4F8A3A"]
     )


    return (
        <div className = "flex items-center gap-2">
            <div className = "relative w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 bg-white justify-center">
                <motion.div className = "absolute rounded-full inset-px bg-[#4F8A3A] duration-200" style = {{scale: fillAmt}}/>
            </div>
            <motion.div style = {{color: color}} className = "text-sm whitespace-nowrap">
                {step.title}
            </motion.div>
        </div>
    )

}

export default ProgressBar;