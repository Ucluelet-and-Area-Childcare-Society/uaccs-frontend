import {NavLink} from 'react-router-dom'
import {Menu} from '@base-ui/react/menu'
import {ChevronDown} from 'lucide-react'

/* DropdownMenu component, takes in a label & array of dropdown items */
function DropdownMenu({label, items}) {

    return (
        <Menu.Root>
            <Menu.Trigger openOnHover className = "flex items-center gap-1 hover:text-[#C4D65E]">
                {label}
                <ChevronDown size={18}/>
            </Menu.Trigger>


        </Menu.Root>
    )

}

export default DropdownMenu;