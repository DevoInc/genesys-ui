import * as React from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { StatusMessage } from '../StatusMessage';
import { GINoData } from '@devoinc/genesys-icons';
import { KeyValue } from '../KeyValue';
import { Typography } from '../Typography';
import { HFlex } from '../HFlex';
import { VFlex } from '../VFlex';

export interface EmptyStateProps
  extends IStyledPolymorphic,
    IStyledOverloadCss {
  /** The content block usually used for related actions as 'Create', 'reload'...etc. */
  actions?: React.ReactNode;
  /** The format for the component: only text, icon + text or featured, which is like a StatusMessage component. */
  format?: 'text' | 'icon' | 'featured';
  /** The main text block which is used as a heading in the 'featured' format, as the key content in the 'icon' one and as a paragraph block in the 'text' one. */
  primaryText?: React.ReactNode;
  /** The secondary text block which is used as a paragraph in the 'featured' format, as the value content in the 'icon' one and as a caption block in the 'text' one. */
  secondaryText?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  actions,
  as,
  format,
  primaryText,
  secondaryText,
  style,
}) => {
  const contentBlock =
    format === 'featured' ? (
      <StatusMessage
        as={as}
        title={primaryText}
        description={secondaryText}
        icon={<GINoData />}
        style={style}
      />
    ) : format === 'icon' ? (
      <KeyValue
        as={as}
        format="base"
        keyContent={primaryText}
        valueContent={secondaryText}
        supportingVisual={<GINoData />}
        style={style}
      />
    ) : (
      <Typography.Paragraph as={as} style={style}>
        {primaryText} <Typography.Small>{secondaryText}</Typography.Small>
      </Typography.Paragraph>
    );
  return format === 'featured' ? (
    <VFlex alignItems="center" spacing="0">
      {contentBlock}
      {actions}
    </VFlex>
  ) : format === 'icon' ? (
    <HFlex alignItems="center">
      {contentBlock}
      {actions}
    </HFlex>
  ) : (
    <HFlex alignItems="center">
      {contentBlock}
      {actions}
    </HFlex>
  );
};
