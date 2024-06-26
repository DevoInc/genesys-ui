import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Label, type LabelProps } from '../../Label';
import type { ITagGroup } from '../declarations';

import { tagGroupLabelMixin } from '../helpers';

export interface TagGroupLabelProps
  extends Omit<LabelProps, 'size'>,
    Omit<ITagGroup, 'colorScheme'> {}

export const TagGroupLabel: React.FC<TagGroupLabelProps> = ({
  children,
  labelPosition = 'left',
  size = 'md',
  styles,
  ...restLabelProps
}) => {
  const theme = useTheme();
  return (
    <Label
      {...restLabelProps}
      styles={concat(
        tagGroupLabelMixin({ size, labelPosition, theme }),
        styles,
      )}
      size={size}
    >
      {children}
    </Label>
  );
};
