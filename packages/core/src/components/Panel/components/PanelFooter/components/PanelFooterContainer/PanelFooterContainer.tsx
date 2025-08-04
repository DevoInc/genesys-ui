import * as React from 'react';

import type { IPanelFooterAttrs } from '../../declarations';
import type { IPanelSpaceAttrs } from '../../../../declarations';
import { PANEL_FOOTER_CLASS_NAME_BASE } from '../../../../constants';
import { getSpacingClassNames } from '../../../../../../helpers';
import { Flex, type FlexProps } from '../../../../../Flex';
import { Box } from '../../../../../Box';

export interface PanelFooterContainerProps
  extends IPanelFooterAttrs,
    IPanelSpaceAttrs,
    Pick<FlexProps, 'as' | 'style' | 'className'> {
  /** If the content of the panel footer is custom and depends exclusively on
   * the user */
  customContent?: boolean;
}

export const PanelFooterContainer = React.forwardRef<
  HTMLElement,
  PanelFooterContainerProps
>(
  (
    {
      as = 'footer',
      className,
      customContent,
      hasBoxShadow,
      bordered,
      children,
      hasBackground,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      removeSpace,
      size = 'md',
    },
    ref,
  ) => {
    const commonProps = {
      as,
      flex: '0 0 auto',
      zIndex: 1,
    };
    const classNameBase = PANEL_FOOTER_CLASS_NAME_BASE;
    const classNames = [
      `${classNameBase} `,
      `${classNameBase}--${bordered ? 'bordered' : 'no-border'} `,
      hasBoxShadow ? `${classNameBase}--shadowed ` : '',
      hasBackground ? `${classNameBase}--has-background ` : '',
      size ? `${classNameBase}--${size} ` : '',
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
    return customContent ? (
      <Box {...commonProps} ref={ref} className={classNames}>
        {children}
      </Box>
    ) : (
      <Flex {...commonProps} alignItems="center" className={classNames}>
        {children}
      </Flex>
    );
  },
);
