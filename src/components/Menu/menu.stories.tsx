import Menu from "./menu";
import {Meta, StoryFn} from "@storybook/react";
import React from "react";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";


const menuMeta: Meta<typeof Menu> = {
    title: 'Story for Menu',
    id: 'menu',
    component: Menu,
}

export default menuMeta;

const Template: StoryFn<typeof Menu> = (args) => (
    <Menu {...args}>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="dropdown">
            <MenuItem>
                drop1
            </MenuItem>
        </SubMenu>
    </Menu>
);


export const DefaultMenu = Template.bind({});
DefaultMenu.storyName = 'Default Menu';

export const ClickMenu = Template.bind({});
ClickMenu.args = {
    mode: 'vertical'
}
ClickMenu.storyName = 'Vertical Menu';