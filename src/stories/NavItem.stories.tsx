import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavItem } from '../components';

export default {
  title: 'NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

export const Icon = Template.bind({});
export const NoIcon = Template.bind({});

Icon.args = {
  children: 'Home',
  icon: 'arrow',
};

NoIcon.args = {
  children: 'Recommended',
  icon: '',
}