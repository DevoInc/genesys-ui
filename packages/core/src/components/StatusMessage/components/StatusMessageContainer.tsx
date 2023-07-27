import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

import { VFlex, VFlexProps } from '../../';
import { statusMessageMixin, StatusMessageMixinProps } from '../helpers';

export interface StatusMessageContainerProps
  extends StyledPolymorphicProps,
    Pick<VFlexProps, 'height' | 'margin' | 'padding' | 'width'>,
    Pick<StatusMessageMixinProps, 'bordered'>,
    StyledOverloadCssProps,
    GlobalAttrProps,
    Omit<GlobalAriaProps, 'aria-hidden'>,
    Omit<MouseEventAttrProps, 'onClick'> {
  children?: React.ReactNode;
  bordered?: boolean;
}

export const StatusMessageContainer = ({
  'aria-describedby': ariaDescribedBy,
  'aria-details': ariaDetails,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  as,
  children,
  bordered,
  height,
  id,
  margin,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  padding = 'cmp-md',
  role,
  styles,
  tooltip,
  width,
}: StatusMessageContainerProps) => {
  const theme = useTheme();
  return (
    <VFlex
      aria-describedby={ariaDescribedBy}
      aria-details={ariaDetails}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      as={as}
      alignItems="center"
      height={height}
      id={id}
      justifyContent="center"
      margin={margin}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      padding={padding}
      role={role}
      styles={concat(statusMessageMixin({ bordered, theme }), styles)}
      tooltip={tooltip}
      width={width}
    >
      {children}
    </VFlex>
  );
};
