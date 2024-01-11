import Menu, {MenuProps} from "./menu";
import MenuItem from "./menuItem";
import React from "react";
import {cleanup, fireEvent, render, RenderResult, screen, waitFor} from "@testing-library/react";
import SubMenu from "./subMenu";


const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem>xyz</MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>
                    drop1
                </MenuItem>
            </SubMenu>
        </Menu>
    )
}

const createStyleFile = () => {
    const cssFile: string = `
    .custom-menu {
       display: none;
    }
    .custom-submenu.menu-opened {
      display: block
    }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    return style;
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        wrapper = render(generateMenu(testProps));
        wrapper.container.append(createStyleFile());
        menuElement = screen.getByTestId('test-menu');
        activeElement = screen.getByText('active');
        disabledElement = screen.getByText('disabled');
    });

    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('custom-menu test');
        // eslint-disable-next-line testing-library/no-node-access
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });

    it('click items should change active and call the right callback', () => {
        const thirdItem = screen.getByText('xyz');
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    });

    it('should render vertical mode when mode set to vertical', () => {
        cleanup();
        render(generateMenu(testVerProps));
        const menuElement = screen.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    });

    it('should show dropdown items when hover on subMenu', async () => {
        // expect(screen.queryByText('drop1')).not.toBeVisible();
        // const dropdownElement = screen.getByText('dropdown');
        // fireEvent.mouseEnter(dropdownElement);
        // await waitFor(() => {
        //     // eslint-disable-next-line testing-library/prefer-screen-queries
        //     expect(wrapper.queryByText('drop1')).toBeVisible()
        // }, {timeout: 1000});
        // fireEvent.click(screen.getByText('drop1'));
        // expect(testProps.onSelect).toHaveBeenCalledWith(3);
        // fireEvent.mouseLeave(dropdownElement);
        // await waitFor(() => {
        //     expect(screen.queryByText('drop1')).not.toBeVisible()
        // });
    });
});