import Button, {ButtonSize, ButtonType} from "./button";
import {Meta, StoryFn} from "@storybook/react";
import React from "react";


const buttonMeta: Meta<typeof Button> = {
    title: 'Story for Button',
    component: Button,
}

export default buttonMeta;

const Template: StoryFn<typeof Button> = (args) => (
    <Button {...args}></Button>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Default button'
};
Default.storyName = 'Default button style';

export const Large = Template.bind({});
Large.args = {
    size: ButtonSize.Large,
    children: 'Large button'
};
Large.storyName = 'Large Button';

export const Small = Template.bind({});
Small.args = {
    size: ButtonSize.Small,
    children: 'Small button'
};
Small.storyName = 'Small Button';

export const Primary = Template.bind({});
Primary.args = {
    btnType: ButtonType.Primary,
    children: 'Primary button'
};
Primary.storyName = 'Primary Button';

export const Danger = Template.bind({});
Danger.args = {
    btnType: ButtonType.Danger,
    children: 'Danger button'
};
Danger.storyName = 'Danger Button';

export const Link = Template.bind({});
Link.args = {
    btnType: ButtonType.Link,
    children: 'Link button'
};
Danger.storyName = 'Link Button';

