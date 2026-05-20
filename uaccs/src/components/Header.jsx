import {Menu} from 'lucide-react'
import Umbrella from '../assets/umbrella-logo.svg'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    return (
        <header className = "relative z-20 w-full px-6 py-6 flex flex-row bg-[#2C3D28] border-b-3 border-[#1F2B1C]">
            <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16"/>
            <div>
                <div>
                    Ucluelet and Area
                </div>
                <div>
                    Childcare Society
                </div>
            </div>

        </header>
    )



}

export default Header;