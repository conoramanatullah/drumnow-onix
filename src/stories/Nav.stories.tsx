import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from '../components';

export default {
  title: 'Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args} />
);

export const Default = Template.bind({});

Default.args = {};