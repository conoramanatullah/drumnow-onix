import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const Default = Template.bind({});

Default.args = {};