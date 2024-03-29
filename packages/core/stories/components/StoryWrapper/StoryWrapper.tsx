import * as React from 'react';

import {
  StyledStoryWrapper,
  StyledStoryWrapperProps,
} from './StyledStoryWrapper';

export interface StoryWrapperProps extends StyledStoryWrapperProps {
  /** Polymorphic prop to create a different tag or styled component
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: string | React.ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
  display?: React.CSSProperties['display'];
  /** Css height */
  height?: React.CSSProperties['height'];
  /** Css width */
  width?: React.CSSProperties['width'];
}

export const StoryWrapper: React.FC<StoryWrapperProps> = ({
  as,
  bgColor,
  children,
  className,
  display = 'block',
  height = '100%',
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  overflowX,
  overflowY,
  padding = '2rem 4rem',
  position,
  positionBottom,
  positionLeft,
  positionRight,
  positionTop,
  cssTranslate,
  visibility,
  width,
  zIndex,
}) => {
  return (
    <StyledStoryWrapper
      as={as}
      bgColor={bgColor}
      className={className}
      $display={display}
      $height={height}
      margin={margin}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      minHeight={minHeight}
      minWidth={minWidth}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
      padding={padding}
      position={position}
      positionBottom={positionBottom}
      positionLeft={positionLeft}
      positionRight={positionRight}
      positionTop={positionTop}
      translate={cssTranslate}
      visibility={visibility}
      $width={width}
      zIndex={zIndex}
    >
      {children}
    </StyledStoryWrapper>
  );
};
