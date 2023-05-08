import * as React from 'react';
import {
  StyledPanelContainer,
  StyledPanelContainerProps,
} from './StyledPanelContainer';

export interface PanelContainerProps extends StyledPanelContainerProps {
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
  visibility,
  widthScheme,
}) => {
  return (
    <StyledPanelContainer
      $display={display}
      $height={heightScheme?.height}
      $width={widthScheme?.width}
      as={as}
      bordered={bordered}
      className={className}
      colorScheme={colorScheme}
      elevation={elevation}
      forwardedAs={forwardedAs}
      id={id}
      maxHeight={heightScheme?.maxHeight}
      maxWidth={widthScheme?.maxWidth}
      minHeight={heightScheme?.minHeight}
      minWidth={widthScheme?.minWidth}
      position={position}
      visibility={visibility}
    >
      {children}
    </StyledPanelContainer>
  );
};
