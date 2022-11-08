import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextMenuItem } from '../components';

export default {
  title: 'ContextMenuItem',
  component: ContextMenuItem,
} as ComponentMeta<typeof ContextMenuItem>;

const Template: ComponentStory<typeof ContextMenuItem> = (args) => (
  <ContextMenuItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Account',
};