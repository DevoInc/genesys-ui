import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  // VFlex,
  FlexItem,
  Button,
  // Typography,
  // ToastContainer,
  toast,
  // ToastProps,
} from '../';
// import { ToastStatus } from './declarations';

const meta: Meta<typeof toast> = {
  title: 'Components/Core/Feedback/Toast',
  component: Button,
  args: {
    alignItems: 'flex-start',
    childrenFitFullWidth: true,
    childrenFitFullHeight: false,
    inline: false,
    justifyContent: 'flex-start',
    spacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof toast>;

const lorem01 =
  'Phasellus hendrerit lacus ac nisl laoreet vulputate. Vestibulum vitae enim magna. Integer malesuada lacus et urna pellentesque, quis hendrerit purus sodales. Phasellus sagittis leo nec ornare congue. Quisque blandit tristique turpis, eget pretium orci bibendum sed. Aliquam imperdiet ultrices scelerisque. Vestibulum sit amet lorem cursus, auctor purus et, pretium velit.';
// const lorem02 =
//   'Cras magna nulla, sodales a feugiat ut, dapibus vel magna. In purus odio, volutpat vel tincidunt ornare, vulputate eu lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam molestie lacus quis massa ullamcorper, vel convallis urna tristique. Suspendisse quis luctus turpis. Donec aliquam est accumsan urna mattis, id tincidunt turpis tristique. Nulla magna velit, feugiat et tincidunt ac, ullamcorper sit amet neque. Aenean feugiat mauris at tortor euismod, vel lacinia diam laoreet.';
// const lorem03 =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra nulla a felis fringilla venenatis. Morbi eu massa dictum neque malesuada pharetra in quis mi. Integer hendrerit lacus lacus, eu vulputate augue porta quis. Nunc libero elit, tincidunt ut lacus non, porttitor tristique arcu. Mauris sit amet diam non ex efficitur sagittis in quis nisl. Morbi hendrerit arcu mauris, sagittis tempus felis finibus ut. Nullam a mattis elit. Nam sodales vulputate metus in venenatis. Curabitur convallis posuere efficitur. Sed lobortis eget elit et molestie.';

// const statusToast: ToastStatus[] = ['error', 'info', 'success', 'warning'];

export const Base: Story = {
  args: {
    accent: false,
    actionApply: undefined,
    actionReject: undefined,
    collapsable: false,
    id: 'default-toast',
    maxHeight: undefined,
    content: lorem01,
    subtitle: 'Toasts notifications are useful',
    title: 'Notification title',
    status: 'into',
  },
  render: (args) =>
    ((args) => (
      <FlexItem key={'default-toast--info'} id={'default-toast--info'}>
        <Button
          colorScheme={'info'}
          onClick={() => {
            toast({
              ...args,
              status: 'info',
              id: 'default-toast--info',
              accent: false,
              actionApply: undefined,
              actionReject: undefined,
              collapsable: false,
              maxHeight: undefined,
              content: lorem01,
              subtitle: 'Toasts notifications are useful',
              title: 'Notification title',
            });
          }}
        >
          Open info notification
        </Button>
      </FlexItem>
    ))(args),
};

// const Template: Story<ToastProps> = (args) => (
//   <>
//     <ToastContainer />
//   </>
// );

// export const AccentHigh = Template.bind({});
// AccentHigh.args = {
//   ...Default.args,
//   accent: true,
//   subtitle: 'A high visibility notification toast',
//   title: 'Notification accent title',
// };

// export const WithActions = Template.bind({});
// WithActions.args = {
//   ...Default.args,
//   actionApply: { label: 'Apply', action: () => alert('Action applied') }, // eslint-disable-line no-alert
//   actionReject: { label: 'Cancel', action: () => alert('Action rejected') }, // eslint-disable-line no-alert
//   subtitle: 'You should choose an action to close',
//   title: 'Notification with actions',
// };

// export const AccentHighWithActions = Template.bind({});
// AccentHighWithActions.args = { ...WithActions.args, accent: true };

// export const WithScroll = Template.bind({});
// WithScroll.args = {
//   ...Default.args,
//   subtitle: '30rem height limit (configurable) to avoid to big notifications',
//   content: (
//     <>
//       <Typography.Paragraph>{lorem01}</Typography.Paragraph>
//       <Typography.Paragraph>{lorem02}</Typography.Paragraph>
//       <Typography.Paragraph>{lorem03}</Typography.Paragraph>
//     </>
//   ),
//   title: 'Scrollable notification',
// };

// export const WithScrollAndActions = Template.bind({});
// WithScrollAndActions.args = {
//   ...WithScroll.args,
//   actionApply: { label: 'Apply', action: () => alert('Action applied') }, // eslint-disable-line no-alert
//   actionReject: { label: 'Cancel', action: () => alert('Action rejected') }, // eslint-disable-line no-alert
// };

// export const Collapsed = Template.bind({});
// Collapsed.args = {
//   ...Default.args,
//   collapsable: true,
//   subtitle: 'Show only the headline',
//   title: 'Collapsed notification',
// };

// export const CollapsedAndActions = Template.bind({});
// CollapsedAndActions.args = {
//   ...Collapsed.args,
//   actionApply: { label: 'Apply', action: () => alert('Action applied') }, // eslint-disable-line no-alert
//   actionReject: { label: 'Cancel', action: () => alert('Action rejected') }, // eslint-disable-line no-alert
//   content: (
//     <>
//       <Typography.Paragraph>{lorem01}</Typography.Paragraph>
//       <Typography.Paragraph>{lorem02}</Typography.Paragraph>
//       <Typography.Paragraph>{lorem03}</Typography.Paragraph>
//     </>
//   ),
// };
