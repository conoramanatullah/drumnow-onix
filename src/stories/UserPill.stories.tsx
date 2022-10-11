import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserPill } from '../components';

export default {
  title: 'UserPill',
  component: UserPill,
} as ComponentMeta<typeof UserPill>;

const Template: ComponentStory<typeof UserPill> = (args) => (
  <UserPill {...args} />
);

export const Default = Template.bind({});

Default.args = {};