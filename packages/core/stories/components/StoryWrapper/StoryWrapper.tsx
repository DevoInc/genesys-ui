import * as React from 'react';

import { Flex, FlexProps } from '../../../src';

export interface StoryWrapperProps extends FlexProps {
  bgColor?: React.CSSProperties['backgroundColor'];
}

export const StoryWrapper: React.FC<StoryWrapperProps> = ({
  alignItems,
  bgColor,
  children,
  display = 'block',
  height = '100%',
  justifyContent,
  padding = '2rem 4rem',
  width = '100%',
  ...props
}) => (
  <Flex
    {...props}
    childrenFlex="1"
    alignItems={alignItems}
    display={display}
    height={height}
    justifyContent={justifyContent}
    padding={padding}
    style={bgColor ? { backgroundColor: bgColor } : {}}
    width={width}
  >
    {children}
  </Flex>
);
