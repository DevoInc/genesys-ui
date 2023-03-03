import * as React from 'react';

import { Typography } from '../../Typography';
import { lorem, lorem2, lorem3 } from '../../../../stories/utils/fillerTexts';

export const inlineMessageContentFS = (
  <>
    <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68573aed-e59f-418e-98f7-36f2ae503a1f/5-stacked-bar-chart-large-opt.png" />
    <Typography.Paragraph>{lorem}</Typography.Paragraph>
    <Typography.Paragraph>{lorem2}</Typography.Paragraph>
    <Typography.Paragraph>{lorem3}</Typography.Paragraph>
  </>
);
