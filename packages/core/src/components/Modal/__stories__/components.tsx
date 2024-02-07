import * as React from 'react';
import { Banner, Typography, VFlex } from '../../../components';
import { Input } from '@devoinc/genesys-ui-form';

export const ModalDemoContent = (
  <VFlex alignItems="stretch">
    <Typography.Paragraph>
      A still more glorious dawn awaits finite but unbounded Hypatia Cambrian
      explosion white dwarf the carbon in our apple pies. Vanquish the
      impossible the sky calls to us Flatland two ghostly white figures in
      coveralls and helmets are softly dancing are creatures of the cosmos
      tendrils of gossamer clouds?
    </Typography.Paragraph>
    <Banner
      title="Demo banner"
      content="A still more glorious dawn awaits finite but unbounded Hypatia Cambrian
      explosion white dwarf the carbon in our apple pies."
    />
    <Input label="Demo input" id="demo-input" />
  </VFlex>
);
