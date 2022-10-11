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
    <br />
    <Typography type="headline" size="large" weight="bold">
      Headline Large Semibold
    </Typography>
    <Typography type="headline" size="large">
      Headline Large
    </Typography>
    <br />
    <Typography type="headline" size="medium" weight="bold">
      Headline Medium Semibold
    </Typography>
    <Typography type="headline" size="medium">
      Headline Medium
    </Typography>
    <br />
    <Typography type="headline" size="small" weight="bold">
      Headline Small Semibold
    </Typography>
    <Typography type="headline" size="small">
      Headline Small
    </Typography>
    <br />
    <br />
    <Typography type="body" size="large" weight="bold">
      Body Large Semibold
    </Typography>
    <Typography type="body" size="large">
      Body Large
    </Typography>
    <br />
    <Typography type="body" size="medium" weight="bold">
      Body Medium Semibold
    </Typography>
    <Typography type="body" size="medium">
      Body Medium
    </Typography>
    <br />
    <Typography type="body" size="small" weight="bold">
      Body Small Semibold
    </Typography>
    <Typography type="body" size="small">
      Body Small
    </Typography>
    <br />
    <br />
    <Typography type="label" size="default" weight="bold">
      Label Semibold
    </Typography>
    <Typography type="label" size="default">
      Label 
    </Typography>
    <br />
    <Typography type="caption" size="default" weight="bold">
      Caption Semibold
    </Typography>
    <Typography type="caption" size="default">
      Caption 
    </Typography>
  </>
);

export const All = Template.bind({});
