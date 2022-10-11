import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Typography} from '../components';

export default {
  title: 'Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography type="display" size="large" weight="bold">
      Display Large Semibold
    </Typography>
    <Typography type="display" size="large">
      Display Large
    </Typography>
    <br />
    <Typography type="display" size="medium" weight="bold">
      Display Medium Semibold
    </Typography>
    <Typography type="display" size="medium">
      Display Medium
    </Typography>
    <br />
    <Typography type="headline" size="large" weight="bold">
      Headline Large Semibold
    </Typography>
    <Typography type="headline" size="large">
      Headline Large
    </Typography>
  </>
);

export const All = Template.bind({});
