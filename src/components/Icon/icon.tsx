import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames";



export type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props;
    const classes = classNames('custom-icon', className, {
        [`icon-${theme}`]: theme
    });
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}
export default Icon;