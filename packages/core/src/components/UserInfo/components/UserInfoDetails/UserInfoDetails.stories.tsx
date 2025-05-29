import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  GIBusinessBuildingSkyscraperOffice,
  GIIdentityCardPhotoUserProfile,
} from '@devoinc/genesys-icons';
import { UserInfoDetails } from './UserInfoDetails';

const meta: Meta<typeof UserInfoDetails> = {
  title: 'Components/Feedback/UserInfo/Components/UserInfoDetails',
  component: UserInfoDetails,
  args: {
    role: 'Admin',
    email: 'rick.sanchez@devo.com',
    job: 'UX-UI designer',
  },
};

export default meta;
type Story = StoryObj<typeof UserInfoDetails>;

export const Playground: Story = {};

export const CustomInfo: Story = {
  tags: ['isHidden'],
  args: {
    customInfo: [
      {
        supportingVisual: <GIBusinessBuildingSkyscraperOffice />,
        value: 'Three Center Plaza (3CP), Suite 302, Boston, MA 02108',
      },
      {
        supportingVisual: <GIIdentityCardPhotoUserProfile />,
        value: 'ES-KWD-34896',
      },
    ],
  },
};

export const WithKeys: Story = {
  tags: ['isHidden'],
  args: {
    roleKey: 'Role:',
    emailKey: 'Email:',
    jobKey: 'Position:',
    customInfo: [
      {
        key: 'Address:',
        supportingVisual: <GIBusinessBuildingSkyscraperOffice />,
        value: 'Three Center Plaza (3CP), Suite 302, Boston, MA 02108',
      },
      {
        key: 'Company ID:',
        supportingVisual: <GIIdentityCardPhotoUserProfile />,
        value: 'ES-KWD-34896',
      },
    ],
  },
};
