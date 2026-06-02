import Umbrella from '../assets/umbrella-logo.svg'
import {NavLink} from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

/* Header component for Logo, Company Name, Navigation Menu Button */
function Header() {

    const navLinks = [
        {to: "/programs", label: "Programs"},
        { to: "/resources", label: "Resources"},
        { to: "/GetInvolved", label: "Get Involved"},
        { to: "/contact", label: "Contact"},
    ]

    const aboutLinks = [
        {label: "Who We Are", to: "/about/who-we-are"},
        {label: "Meet Our Staff", to: "/about/meet-our-staff"},
        {label: "Meet Our Board of Directors", to: "/about/meet-our-bod"}
    ]

    return (
        <header className = "sticky top-0 z-50 w-full pt-4 px-6 flex flex-row justify-between">
            <NavLink to = "/">
                <img src = {Umbrella} alt = "Umbrella Logo" className= "w-16 h-16 "/>
            </NavLink>

            <nav className = "flex items-center gap-7 text-white font-schoolbell text-md">
                <DropdownMenu label = "About" items = {aboutLinks} />
                {navLinks.map((link) => (
                    <NavLink key = {link.to} to = {link.to} className = 'transition-all duration-300 ease-in-out hover:text-uaccs_green hover:-translate-y-1'> {link.label} </NavLink>
                ))}
                <NavLink to = "/waitlist" className = 'bg-uaccs_orange p-2 rounded-md hover:text-uaccs_orange hover:bg-white transition-all duration-300 ease-in-out hover:-translate-y-1'> Waitlist </NavLink>
            </nav>

            <div className = "absolute top-0 left-0 w-full -z-10">
                <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio='none'
                className = "w-full h-30" 
                >
                    <path 
                    fill="#4A8A9A" 
                    fill-opacity="1"
                    d="M0,288L40,266.7C80,245,160,203,240,192C320,181,400,203,480,229.3C560,256,640,288,720,298.7C800,309,880,299,960,272C1040,245,1120,203,1200,202.7C1280,203,1360,245,1400,266.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>

                </svg>

            </div>
            

        </header>
    )



}

export default Header;