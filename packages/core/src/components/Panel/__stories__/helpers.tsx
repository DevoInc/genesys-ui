import * as React from 'react';
import { Typography } from '../../Typography';
import { lorem, lorem2, lorem3 } from '../../../../stories/utils/fillerTexts';

export const TextBlock = (
  <>
    <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
    <Typography.Paragraph gutterBottom="cmp-md">{lorem2}</Typography.Paragraph>
    <Typography.Paragraph gutterBottom="cmp-md">{lorem3}</Typography.Paragraph>
    <Typography.Paragraph>{lorem2}</Typography.Paragraph>
  </>
);
