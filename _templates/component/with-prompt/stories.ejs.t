---
to: src/stories/<%= name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= name %> } from '../components';

export default {
  title: '<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => (
  <<%= name %> {...args} />
);

export const Default = Template.bind({});

Default.args = {};