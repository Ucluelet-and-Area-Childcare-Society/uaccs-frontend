import {NavLink} from 'react-router-dom'
import {Menu} from '@base-ui/react/menu'
import {ChevronDown} from 'lucide-react'

/* DropdownMenu component, takes in a label & array of dropdown items */
function DropdownMenu({label, items}) {

    return (
        <Menu.Root>
            <Menu.Trigger openOnHover delay = {100} className = "flex items-center gap-1 hover:text-uaccs_green pointer-events-none">
                {label}
                <ChevronDown size={18}/>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner side = "bottom" align = "start" sideOffset={4} className = "z-50" >
                    <Menu.Popup className = "shadow-md bg-white border-2 p-3">
                        {items.map(item => (
                            <Menu.Item className = "data-highlighted:opacity-50">{item.label}</Menu.Item>
                        ))}
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    )

}

export default DropdownMenu;