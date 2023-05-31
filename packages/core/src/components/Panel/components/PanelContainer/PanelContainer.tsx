import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Box } from '../../../Box';
import { panelContainerMixin, PanelContainerMixinProps } from './helpers';
import { concat } from 'lodash';

export interface PanelContainerProps
  extends StyledOverloadCssProps,
    StyledPolymorphicProps,
    Omit<PanelContainerMixinProps, 'theme'> {
  children?: React.ReactNode;
  className?: string;
  display?: React.CSSProperties['display'];
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
