import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button size={ButtonSize.Large}>large button</Button>
                <Icon icon="arrow-down" theme="primary" size="10x"></Icon>
                <Menu mode="vertical" defaultIndex={0} onSelect={(index) => {
                    alert(index)
                }} defaultOpenSubMenus={[2]}>
                    <MenuItem>active</MenuItem>
                    <MenuItem disabled>disabled</MenuItem>
                    <MenuItem>xyz</MenuItem>
                    <SubMenu title="dropdown">
                        <MenuItem>
                            drop1
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
