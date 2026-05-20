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
        <div className = {} onClick = {onClose}/>

        <div 
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 
        right-0 h-full bg-[#2C3D28] w-96 z-50 transition duration-300 ease-in-out border-l-4 border-solid border-[#C9B896]
        shadow-[-8px_0_24px_rgba(0,0,0,0.3)] shadow-black/30`}>

        </div>
        </>
    )
}

export default NavigationSidebar;