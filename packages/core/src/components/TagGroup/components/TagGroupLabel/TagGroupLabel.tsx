import * as React from 'react';
import { useTheme } from 'styled-components';

import { Label, type LabelProps } from '../../../Label';
import type { ITagGroup } from '../../declarations';
import { tagGroupLabelMixin } from '../../helpers';
import { mergeStyles } from '../../../../helpers';

export interface TagGroupLabelProps
  extends Omit<LabelProps, 'size'>,
    Omit<ITagGroup, 'colorScheme'> {}

export const TagGroupLabel: React.FC<TagGroupLabelProps> = ({
  children,
  labelPosition = 'left',
  size = 'md',
  style,
  ...restLabelProps
}) => {
  const theme = useTheme();
  return (
    <Label
      {...restLabelProps}
      style={mergeStyles(
        tagGroupLabelMixin({ size, labelPosition, theme }),
        style,
      )}
      size={size}
    >
      {children}
    </Label>
  );
};
