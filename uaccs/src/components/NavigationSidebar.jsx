import {X, House, Users, Phone, Calendar, Info, Heart, ClipboardList, Book} from 'lucide-react'

/* NavigationSidebar component to enable navigation between web pages */
function NavigationSidebar({isOpen, onClose}) {
    // array of options to map over to create NavigationBar
    const navOptions = [
        {icon: House, label: "Home"},
        {icon: Info, label: "Who We Are"},
        {icon: ClipboardList, label: "Waitlist"},
        {icon: Users, label: "Our Programs"},
        {icon: Heart, label: "Get Involved"},
        {icon: Book, label: "Resources"},
        {icon: Calendar, label: "Calendar"},
        {icon: Phone, label: "Conact"},
    ]
    
    return (
       <>
       </> 
    )
}

export default NavigationSidebar;