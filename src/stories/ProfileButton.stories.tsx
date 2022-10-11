import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ProfileButton} from '../components';

export default {
  title: 'ProfileButton',
  component: ProfileButton,
} as ComponentMeta<typeof ProfileButton>;

const Template: ComponentStory<typeof ProfileButton> = (args) => (
  <ProfileButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: 'Eugene Johnson',
  credits: 100,
  avatarSrc: 'https://i.pravatar.cc/500',
};
