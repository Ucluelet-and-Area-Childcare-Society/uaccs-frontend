import Timeline from '../../components/Timeline'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {Compass} from 'lucide-react'

function WhoWeAre() {
   
    return (
        <VerticalTimeline lineColor='#5BA4B5'>
            <VerticalTimelineElement
            contentStyle = {{
                border: '8px double #5BA4B5'
            }}
            contentArrowStyle={{
                display: 'none'
            }}
            >
                <h3 className = "vertical-timeline-element-title font-dancing text-2xl text-semibold">Our Mission & Purpose</h3>
                <p>
                    Some paragraph content here...
                </p>
            </VerticalTimelineElement>







        </VerticalTimeline> 
    )

}

export default WhoWeAre;