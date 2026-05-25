import Timeline from '../../components/Timeline'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {Compass} from 'lucide-react'

function WhoWeAre() {

    const items = [
        {title: "Our Mission & Purpose", icon: Compass, border_icon_color: "#5BA4B5", text: "some text here"}
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
