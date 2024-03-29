import classNames from "classnames";
import React, {createContext, useState} from "react";
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical';
type selectCallback = (selectedIndex: number) => void;
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallback
    children?: React.ReactNode;
    defaultOpenSubMenus?: number[];
}

export interface IMenuContext {
    index: number;
    onSelect?: selectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: number[];
}
export const MenuContext = createContext<IMenuContext>({
    index: 0
})
export const Menu: React.FC<MenuProps> = (props) => {
    const {className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus} = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames('custom-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    const passedContext = {
        index: currentActive ? currentActive : 0,
        onSelect: (index: number) => {
            setActive(index);
            if (onSelect) {
                onSelect(index);
            }
        },
        mode,
        defaultOpenSubMenus
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'Submenu') {
                return React.cloneElement(childElement, {
                    index
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component');
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: "horizontal",
    defaultOpenSubMenus: []
}

export default Menu;