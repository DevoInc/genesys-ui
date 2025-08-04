import * as React from 'react';

import type {
  IPanelBaseAttrs,
  IPanelContainerAttrs,
  IPanelSpaceAttrs,
} from '../../declarations';
import type { IPanelBodyAttrs } from './declarations';
import { PANEL_BODY_CLASS_NAME_BASE } from '../../constants';
import { PanelContext } from '../../context';
import { getSpacingClassNames } from '../../../../helpers';
import { Box, BoxProps } from '../../../Box';
import { Typography } from '../../../Typography';

export interface PanelBodyProps
  extends IPanelBaseAttrs,
    IPanelSpaceAttrs,
    IPanelBodyAttrs,
    Pick<IPanelContainerAttrs, 'size' | 'children'>,
    Pick<BoxProps, 'className'> {}

export const PanelBody = React.forwardRef<HTMLElement, PanelBodyProps>(
  (
    {
      as,
      children,
      className,
      removeSpace,
      hasScrollSpacing,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      size = 'md',
      style,
    },
    ref,
  ) => {
    const context = React.useContext(PanelContext);
    const evalSize = size || context.size || 'md';
    const removeContentSpace =
      removeSpace ?? context?.removeContentSpace ?? false;
    const evalHasScrollSpacing =
      hasScrollSpacing ?? context.scrolledBodyContent;
    const classNameBase = PANEL_BODY_CLASS_NAME_BASE;
    const classNames = [
      `${classNameBase} `,
      ...getSpacingClassNames({
        padding: removeContentSpace ? '0' : padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
      }),
      evalHasScrollSpacing
        ? `${classNameBase}--has-scroll `
        : `${classNameBase}--no-scroll-spacing `,
      size ? `${classNameBase}--${evalSize} ` : '',
      className && `${className} `,
    ]
      .join('')
      .trim();
    return (
      <Box
        as={as}
        className={classNames}
        position="relative"
        flex="1 1 100%"
        overflow="auto"
        ref={ref || context.bodyRef}
        style={style}
      >
        {typeof children === 'string' ? (
          <Typography.Paragraph>{children}</Typography.Paragraph>
        ) : (
          children
        )}
      </Box>
    );
  },
);

PanelBody.displayName = 'Panel.Body';
