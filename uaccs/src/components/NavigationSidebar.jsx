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
        right-0 h-full bg-[#1E3A5A] w-96 z-50 transition duration-300 ease-in-out border-l-4 border-solid border-white/10
        shadow-[-8px_0_24px_rgba(0,0,0,0.3)] shadow-black/30`}>

            <div className = 'flex justify-between items-center border-b-2 bg-[#D35400] border-[#416252] p-7'>
                <div className='tracking-wider text-[32px] font-dancing text-[#EAE6DF] font-light'>
                    Menu
                </div>
                <button onClick = {onClose} className = "text-white transition-all p-2 rounded-md border-2 border-white hover:rotate-90">
                    <X size = {32} strokeWidth = {2} />
                </button>
            </div>

        </div>
        </>
    )
}

export default NavigationSidebar;