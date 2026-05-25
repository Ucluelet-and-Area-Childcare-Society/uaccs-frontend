import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {Compass, Telescope, Award, Flag, Lightbulb, Scale} from 'lucide-react'

function WhoWeAre() {

    const items = [
        {title: "Our Mission & Purpose", icon: Compass, border_icon_color: "#5BA4B5", text: "some text here"},
        {title: "Vision For The Future", icon: Telescope, border_icon_color: "#E8A562", text: "some more text"},
        {title: 'Unique Strengths & Capabilities', icon: Award, border_icon_color: "#C4D65E", text: "yet more text..."},
        {title: "Measuring Success", icon: Flag, border_icon_color: "#5BA4B5", text: "more text,,,"},
        {title: "Adaptation & Innovation", icon: Lightbulb, border_icon_color: "#E8A562", text: "bleh bleh bleh"},
        {title: "Ethical Considerations", icon: Scale, border_icon_color: "#C4D65E", text: "again again again"}
    ]
   
    return (
        <VerticalTimeline lineColor='#5BA4B5'>
            {items.map((item, index) => (
                <VerticalTimelineElement
                key = {index}
                contentStyle = {{
                    border: `8px double ${item.border_icon_color}`
                }}
                contentArrowStyle={{
                display: 'none'
                }}
                icon = {<item.icon />}
                iconStyle={{
                background: '#FFFFFF',
                color: `${item.border_icon_color}`,
                }}
                >
                    <h3 className = "vertical-timeline-element-title font-dancing text-2xl text-semibold">
                        {item.title}
                    </h3>
                    <p>
                        {item.text}
                    </p>

                </VerticalTimelineElement>
            ))}






        </VerticalTimeline> 
    )

}

export default WhoWeAre;
