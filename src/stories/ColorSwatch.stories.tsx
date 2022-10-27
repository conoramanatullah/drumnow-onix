import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorSwatch } from '../components';

export default {
  title: 'ColorSwatch',
  component: ColorSwatch,
} as ComponentMeta<typeof ColorSwatch>;

const Template: ComponentStory<typeof ColorSwatch> = (args) => (
  <ColorSwatch {...args} />
);

export const Default = Template.bind({});

Default.args = {};