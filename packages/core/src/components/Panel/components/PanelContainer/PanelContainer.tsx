import * as React from 'react';
import { useTheme } from 'styled-components';

import { StyledOverloadCssProps } from '../../../../declarations';

import { Box } from '../../../Box';
import { panelContainerMixin, PanelContainerMixinProps } from './helpers';
import { concat } from 'lodash';

export interface PanelContainerProps
  extends StyledOverloadCssProps,
    Omit<PanelContainerMixinProps, 'theme'> {
  as?: string | React.ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
  display?: React.CSSProperties['display'];
  forwardedAs?: string | React.ComponentType<any>;
  id?: string;
  visibility?: React.CSSProperties['visibility'];
}

export const PanelContainer: React.FC<PanelContainerProps> = ({
  as,
  bordered,
  children,
  className,
  colorScheme,
  display,
  elevation = 'raised',
  forwardedAs,
  heightScheme,
  id,
  position,
  styles,
  visibility,
  widthScheme,
}) => {
  const theme = useTheme();
  return (
    <Box
      as={as}
      className={className}
      display={display}
      elevation={elevation}
      forwardedAs={forwardedAs}
      height={heightScheme?.height}
      id={id}
      maxHeight={heightScheme?.maxHeight}
      maxWidth={widthScheme?.maxWidth}
      minHeight={heightScheme?.minHeight}
      minWidth={widthScheme?.minWidth}
      position={position}
      styles={concat(
        panelContainerMixin({
          bordered,
          colorScheme,
          display,
          elevation,
          heightScheme,
          theme,
          widthScheme,
        }),
        styles
      )}
      visibility={visibility}
      width={widthScheme?.width}
    >
      {children}
    </Box>
  );
};
