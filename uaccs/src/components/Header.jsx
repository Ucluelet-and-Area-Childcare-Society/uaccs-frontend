import Umbrella from '../assets/umbrella-logo.svg'
import {NavLink} from 'react-router'
import DropdownMenu from './DropdownMenu'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    const navLinks = [
        { to: "/about", label: "About"},
        { to: "/programs", label: "Programs"},
        { to: "/resources", label: "Resources"},
        { to: "/GetInvolved", label: "Get Involved"},
        { to: "/contact", label: "Contact"},
    ]

    return (
        <header className = "relative z-20 w-full px-6 py-4 flex flex-row bg-[#4A8A9A] border-b-3 border-[#3A6A77] justify-between">
            <div className='flex items-center gap-3 select-none'>
                <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16 "/>
                <div className='tracking-wider'>
                    <div className='text-[18px] text-white font-bold'>
                        UCLUELET &amp; AREA
                    </div>
                    <div className='text-[11px] text-[#C4D65E] font-semibold'>
                        CHILDCARE SOCIETY
                    </div>
                </div>
            </div>
            <nav className = "flex items-center gap-5 text-white">
                {navLinks.map((link) => (
                    <NavLink key = {link.to} to = {link.to} className = 'transition-all duration-300 ease-in-out hover:text-[#C4D65E] hover:-translate-y-1'> {link.label} </NavLink>
                ))}
                <NavLink to = "/waitlist" className = 'bg-[#E8A562] p-2 rounded-md hover:text-[#E8A562] hover:bg-white transition-all duration-300 ease-in-out hover:-translate-y-1'> Waitlist </NavLink>
            </nav>

        </header>
    )



}

export default Header;