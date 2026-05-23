import {Menu, Button} from '@mantine/core'
import {NavLink} from 'react-router'

/* DropdownMenu component, takes in a label & array of dropdown items */
function DropdownMenu({label, items}) {

    return (
        <Menu shadow = "md" width = {200}>

            <Menu.Target>
                <Button>{label}</Button>
            </Menu.Target>

            <Menu.Dropdown>
                {items.map((item) => (
                    <Menu.Item key = {item.to} component = {NavLink} to = {item.to} >{item.label}</Menu.Item>
                ))}
            </Menu.Dropdown>

        </Menu>
    )

}

export default DropdownMenu;