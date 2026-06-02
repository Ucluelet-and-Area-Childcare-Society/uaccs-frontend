import {motion} from 'motion'

const steps = [
    {id: 1, title: "Our Mission & Purpose"},
    {id: 2, title: "Vision for the Future"},
    {id: 3, title: "Unique Strengths & Capabilities"},
    {id: 3, title: "Measuring Success"},
    {id: 4, title: "Adaptation & Innovation"},
    {id: 5, title: "Ethical Considerations"}
]

/* Progress bar component to showcase current navigation position */
function ProgressBar({activeStep}) {

    return (
        <div className = "fixed left-5 top-32 bottom-32">
            <div className = "absolute top-0 bottom-0 w-2 border-2 border-black rounded-md"/>






        </div>
    )

}

export default ProgressBar;