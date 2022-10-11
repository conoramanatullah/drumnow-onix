import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Avatar} from '../components';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://i.pravatar.cc/500',
  alt: 'Picture of a dog',
  size: 'large',
};
