import {Menu} from 'lucide-react'
import Umbrella from '../assets/umbrella-logo.svg'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    return (
        <header className = "relative z-20 w-full px-6 py-4 flex flex-row bg-[#2C3D28] border-b-3 border-[#1F2B1C] justify-between">
            <div className='flex items-center gap-3'>
                <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16"/>
                <div className='tracking-wider'>
                    <div className='text-[18px] text-white font-bold'>
                        UCLELET &amp; AREA
                    </div>
                    <div className='text-[11px] text-[#C9B896] font-semibold'>
                        CHILDCARE SOCIETY
                    </div>
                </div>
            </div>
            <button 
            className ='text-white hover:opacity-70 hover:translate-y-1 hover:scale-120 transition delay-150 duration-300 ease-in-out'
            onClick = {...}> {/* on click event handling to open and close NavigationSidebar */}
                <Menu size = {32}/>
            </button>

        </header>
    )



}

export default Header;