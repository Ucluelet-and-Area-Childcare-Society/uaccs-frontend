import Umbrella from '../assets/umbrella-logo.svg'
import {NavLink} from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    const navLinks = [
        { to: "/resources", label: "Resources"},
        { to: "/GetInvolved", label: "Get Involved"},
        { to: "/contact", label: "Contact"},
    ]

    const aboutLinks = [
        {label: "Who We Are", to: "/about/who-we-are"},
        {label: "Meet Our Staff", to: "/about/meet-our-staff"},
        {label: "Meet Our Board of Directors", to: "/about/meet-our-bod"}
    ]

    const programsLinks = []

    return (
        <header className = "relative z-20 w-full px-6 py-4 flex flex-row bg-uaccs_blue border-b-3 border-[#3A6A77] justify-between">
            <div className='flex items-center gap-3 select-none'>
                <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16 "/>
                <div className='tracking-wider'>
                    <div className='text-[18px] text-white font-bold'>
                        UCLUELET &amp; AREA
                    </div>
                    <div className='text-[11px] text-uaccs_green font-semibold'>
                        CHILDCARE SOCIETY
                    </div>
                </div>
            </div>
            <nav className = "flex items-center gap-5 text-white">
                <DropdownMenu label = "About" items = {aboutLinks} />
                {navLinks.map((link) => (
                    <NavLink key = {link.to} to = {link.to} className = 'transition-all duration-300 ease-in-out hover:text-uaccs_green hover:-translate-y-1'> {link.label} </NavLink>
                ))}
                <NavLink to = "/waitlist" className = 'bg-uaccs_orange p-2 rounded-md hover:text-uaccs_orange hover:bg-white transition-all duration-300 ease-in-out hover:-translate-y-1'> Waitlist </NavLink>
            </nav>

        </header>
    )



}

export default Header;