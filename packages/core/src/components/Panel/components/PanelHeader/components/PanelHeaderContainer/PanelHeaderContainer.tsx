import * as React from 'react';

import type { IPanelHeaderAttrs } from '../../declarations';
import type { IPanelSpaceAttrs } from '../../../../declarations';
import { PANEL_HEADER_CLASS_NAME_BASE } from '../../../../constants';
import { getSpacingClassNames } from '../../../../../../helpers';
import { PanelContext } from '../../../../context';
import { Box, type BoxProps } from '../../../../../Box';

export interface PanelHeaderContainerProps
  extends Pick<BoxProps, 'as' | 'style' | 'className'>,
    IPanelSpaceAttrs,
    Omit<
      IPanelHeaderAttrs,
      'appendContent' | 'bottomContent' | 'navigationContent' | 'prependContent'
    > {}

export const PanelHeaderContainer = React.forwardRef<
  HTMLElement,
  PanelHeaderContainerProps
>(
  (
    {
      actions,
      as = 'header',
      bordered,
      children,
      className,
      hasBoxShadow,
      hasSubtitle,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      removeSpace,
      size,
      style,
    },
    ref,
  ) => {
    const context = React.useContext(PanelContext);
    const evalHasBoxShadow = hasBoxShadow ?? context.scrolledBodyContent;
    const evalSize = size || context.size || 'md';
    const classNameBase = PANEL_HEADER_CLASS_NAME_BASE;
    const classNames = [
      `${classNameBase} `,
      `${classNameBase}--${bordered ? 'bordered' : 'no-border'} `,
      evalHasBoxShadow ? `${classNameBase}--shadowed ` : '',
      //!hasSubtitle ? `${classNameBase}--no-subtitle ` : '',
      actions ? `${classNameBase}--has-actions ` : '',
      size ? `${classNameBase}--${evalSize} ` : '',
      ...getSpacingClassNames({
        padding: removeSpace ? '0' : padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
      }),
      className && `${className} `,
    ]
      .join('')
      .trim();
    return (
      <Box
        ref={ref}
        className={classNames}
        as={as}
        flex="0 0 auto"
        style={style}
        zIndex={1}
      >
        {children}
      </Box>
    );
  },
);
