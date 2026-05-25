import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {TimelineItems} from '../../data/TimelineItems'


function WhoWeAre() {

    return (
        <div className = "flex flex-col items-center p-10 mx-auto z-0 w-full">
            <h1 className = "font-dancing text-[#A8BA4E] text-[100px]">Who We Are</h1>
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
                        <h3 className = "vertical-timeline-element-title font-dancing text-3xl text-semi mb-10!">
                            {item.title}
                        </h3>
                        <p className = "text-justify text-gray-700">
                            {item.text}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline> 
        </div>
    )

}

export default WhoWeAre;
