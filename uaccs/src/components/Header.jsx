import {Menu} from 'lucide-react'
import Umbrella from '../assets/umbrella-logo.svg'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    return (
        <header className = "relative z-20 w-full px-6 py-6 flex flex-row bg-[#2C3D28] border-b-3 border-[#1F2B1C]">
            <img src = {Umbrella} alt = "Umbrella Logo"/>
            <div>NAME</div>
            <Menu size = {28}/>

        </header>
    )



}

export default Header;