import * as React from 'react';
import { Typography } from '../../Typography';
import { lorem, lorem2, lorem3 } from '../../../../stories/utils/fillerTexts';

export const TextBlock = (
  <>
    <Typography.Paragraph>{lorem}</Typography.Paragraph>
    <Typography.Paragraph>{lorem2}</Typography.Paragraph>
    <Typography.Paragraph>{lorem3}</Typography.Paragraph>
    <Typography.Paragraph>{lorem2}</Typography.Paragraph>
  </>
);
