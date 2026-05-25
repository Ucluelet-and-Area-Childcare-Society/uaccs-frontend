import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {TimelineItems} from '../../data/TimelineItems'


function WhoWeAre() {

    return (
        <VerticalTimeline lineColor='#5BA4B5'>
            {TimelineItems.map((item, index) => (
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
                    <p className = "text-justify">
                        {item.text}
                    </p>

                </VerticalTimelineElement>
            ))}
        </VerticalTimeline> 
    )

}

export default WhoWeAre;
