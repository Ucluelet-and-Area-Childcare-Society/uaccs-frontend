import {Menu} from 'lucide-react'
import Umbrella from '../assets/umbrella-logo.svg'
import {NavLink} from 'react-router'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    return (
        <header className = "relative z-20 w-full px-6 py-4 flex flex-row bg-[#4A8A9A] border-b-3 border-[#3A6A77] justify-between">
            <div className='flex items-center gap-3 select-none'>
                <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16"/>
                <div className='tracking-wider'>
                    <div className='text-[18px] text-white font-bold'>
                        UCLUELET &amp; AREA
                    </div>
                    <div className='text-[11px] text-[#C4D65E] font-semibold'>
                        CHILDCARE SOCIETY
                    </div>
                </div>
            </div>

        </header>
    )



}

export default Header;