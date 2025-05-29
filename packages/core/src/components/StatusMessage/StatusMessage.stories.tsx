import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { StatusMessage } from './StatusMessage';
import { VFlex } from '../VFlex';
import {
  GIAboutQuestionFaqHelpFilled,
  GIAttentionErrorAlertCautionFilled,
  GICheckOkRoundedFilled,
  GIErrorWarningDangerStopFilled,
  GIInfoRoundFilled,
} from '@devoinc/genesys-icons';

const meta: Meta<typeof StatusMessage> = {
  title: 'Components/Feedback/StatusMessage',
  component: StatusMessage,
  args: {
    title: 'No data available',
    description:
      "Great turbulent clouds muse about a mote of dust suspended in a sunbeam dream of the mind's eye prime number preserve and cherish that pale blue dot. Hearts of the stars with pretty stories for which there's little good evidence the carbon in our apple pies Sea of Tranquility invent the universe Apollonius of Perga.",
  },
};

export default meta;
type Story = StoryObj<typeof StatusMessage>;

export const Playground: Story = {};

export const Bordered: Story = {
  tags: ['isHidden'],
  args: {
    bordered: true,
  },
};

export const WithVector: Story = {
  tags: ['isHidden'],
  args: {
    title: 'With a custom SVG image',
    icon: (
      <img
        alt="Archive"
        width="64"
        src="https://cdn.iconscout.com/icon/free/png-512/free-report-icon-download-in-svg-png-gif-file-formats--business-paper-document-office-icons-pack-456731.png?f=webp&w=512"
      />
    ),
  },
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <VFlex>
          <StatusMessage {...props} title="This is an empty state" />
          <StatusMessage
            {...props}
            status="error"
            title="This is an error message"
            icon={<GIErrorWarningDangerStopFilled />}
          />
          <StatusMessage
            {...props}
            icon={<GICheckOkRoundedFilled />}
            title="This is a success message"
            status="success"
          />
          <StatusMessage
            {...props}
            status="warning"
            title="This is a warning message"
            icon={<GIAttentionErrorAlertCautionFilled />}
          />
          <StatusMessage
            {...props}
            icon={<GIInfoRoundFilled />}
            title="This is an info message"
            status="info"
          />
          <StatusMessage
            {...props}
            icon={<GIAboutQuestionFaqHelpFilled />}
            title="This is a help message"
            status="help"
          />
        </VFlex>
      );
    })(args),
};
