import * as React from 'react';

import { Flex, FlexProps } from '../../../src';
import { useTheme } from 'styled-components';

export interface StoryWrapperProps extends FlexProps {
  bgColor?: React.CSSProperties['backgroundColor'];
  bgMode?: 'surface' | 'app';
}

export const StoryWrapper: React.FC<StoryWrapperProps> = ({
  alignItems,
  bgColor,
  bgMode,
  children,
  display = 'block',
  height = '100%',
  justifyContent,
  padding = '2rem 4rem',
  width = '100%',
  ...props
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...props}
      childrenFlex="1"
      alignItems={alignItems}
      display={display}
      height={height}
      justifyContent={justifyContent}
      padding={padding}
      style={
        bgColor
          ? { backgroundColor: bgColor }
          : {
              backgroundColor:
                bgMode === 'app'
                  ? theme.alias.color.background.app
                  : theme.alias.color.background.surface.base.base,
            }
      }
      width={width}
    >
      {children}
    </Flex>
  );
};
