import * as React from 'react';
import { Typography } from '../../Typography';
import { lorem, lorem2, lorem3 } from '../../../../stories/utils/fillerTexts';

export const TextBlock = [
  <Typography.Paragraph key={'p-01'} gutterBottom="cmp-md">
    {lorem}
  </Typography.Paragraph>,
  <Typography.Paragraph key={'p-02'} gutterBottom="cmp-md">
    {lorem2}
  </Typography.Paragraph>,
  <Typography.Paragraph key={'p-03'} gutterBottom="cmp-md">
    {lorem3}
  </Typography.Paragraph>,
  <Typography.Paragraph key={'p-04'}>{lorem2}</Typography.Paragraph>,
];

export const TextBlockSM = [
  <Typography.Paragraph key={'p-01'} gutterBottom="cmp-md">
    {lorem}
  </Typography.Paragraph>,
  <Typography.Paragraph key={'p-02'} gutterBottom="cmp-md">
    {lorem2}
  </Typography.Paragraph>,
];
