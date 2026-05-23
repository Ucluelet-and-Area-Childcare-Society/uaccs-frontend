import {NavLink} from 'react-router-dom'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'

/* DropdownMenu component, takes in a label & array of dropdown items */
function DropdownMenu({label, items}) {

    return (
        <Menu>
            <MenuButton className = 'transition-all duration-300 ease-in-out hover:text-[#C4D65E] hover:-translate-y-1'>About</MenuButton>
            




        </Menu>
    )

}

export default DropdownMenu;