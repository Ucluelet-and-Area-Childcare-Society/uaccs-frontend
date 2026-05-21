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
        <div className = {`fixed inset-0 bg-black z-40 ${isOpen ? "opacity-40" : "opacity-0 pointer-events-none"}`} onClick = {onClose}/>

        <div 
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 
        right-0 h-full bg-[#C4D65E] w-96 z-50 transition duration-300 ease-in-out border-l-4 border-solid border-[#849236]
        shadow-[-8px_0_24px_rgba(0,0,0,0.3)] shadow-black/30`}>

            <div className = 'flex justify-between items-center border-b-2 border-[#C9B896] bg-linear-to-b from-[#2C3D28] from-0% to-[#253324] to-100%'>
                <div className='tracking-wider text-[32px] font-dancing text-[#C9B896] font-light'>
                    Menu
                </div>
                <button onClick = {onClose}>
                    <X size = {28} strokeWidth = {2.5}/>
                </button>
            </div>

        </div>
        </>
    )
}

export default NavigationSidebar;