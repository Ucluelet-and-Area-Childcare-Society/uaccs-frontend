import {NavLink} from 'react-router-dom'
import {Menu} from '@base-ui/react/menu'
import {ChevronDown} from 'lucide-react'

/* DropdownMenu component, takes in a label & array of dropdown items */
function DropdownMenu({label, items}) {

    return (
        <Menu.Root>
            <Menu.Trigger openOnHover delay = {100} className = "flex items-center gap-1 hover:text-uaccs_green ">
                {label}
                <ChevronDown size={18}/>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner side = "bottom" align = "start" sideOffset={4} className = "z-50" >
                    <Menu.Popup className = "shadow-md bg-white border-2 p-3 focus:outline-none">
                        {items.map(item => (
                            <Menu.LinkItem className = "flex flex-col data-highlighted:opacity-50 focus:outline-none" render = {<NavLink to = {item.to} /> }>
                                {item.label}
                            </Menu.LinkItem>
                        ))}
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    )

}

export default DropdownMenu;