import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextMenu } from '../components';

export default {
  title: 'ContextMenu',
  component: ContextMenu,
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => (
  <ContextMenu {...args} />
);

export const Default = Template.bind({});

Default.args = {};