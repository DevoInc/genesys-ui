import * as React from 'react';

import {
  StyledSwitchControlTextChecked,
  StyledSwitchControlTextUnchecked,
} from '../styled';
import { SwitchControlProps } from '../SwitchControl';
import { StyledOverloadCssProps } from '../../../declarations';
import { Flex, FlexProps } from '../../Flex';
import { getSpacingPropCss } from '../../../utils/spacing';
import { useTheme } from 'styled-components';

export interface SwitchControlTextProps
  extends FlexProps,
    Pick<SwitchControlProps, 'checked'>,
    StyledOverloadCssProps {
  /** Optional content to be included inside the switch track when it's checked */
  checkedContent?: React.ReactNode;
  /** Optional content to be included inside the switch track when it's unchecked */
  uncheckedContent?: React.ReactNode;
}

export const SwitchControlText: React.FC<SwitchControlTextProps> = ({
  as = 'span',
  checkedContent,
  checked,
  justifyContent,
  margin,
  overflow = 'hidden',
  position = 'relative',
  styles,
  uncheckedContent,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const spaceToHandler = getSpacingPropCss('cmp-xxs', theme);
  const spaceToEdge = getSpacingPropCss('cmp-sm', theme);
  const refUnchecked = React.useRef<any>();
  const refChecked = React.useRef<any>();
  const [widthPx, setWidthPx] = React.useState(0);
  React.useEffect(() => {
    setWidthPx(
      Math.max(
        refUnchecked?.current?.offsetWidth,
        refChecked?.current?.offsetWidth,
      ),
    );
  }, [checkedContent, uncheckedContent]);

  return (
    <Flex
      {...restFlexProps}
      as={as}
      position={position}
      justifyContent={justifyContent || (checked ? 'flex-start' : 'flex-end')}
      overflow={overflow}
      margin={
        margin ||
        (checked
          ? `0 ${spaceToHandler} 0 ${spaceToEdge}`
          : `0 ${spaceToEdge} 0 ${spaceToHandler}`)
      }
      styles={styles}
      width={`${widthPx}px`}
    >
      <StyledSwitchControlTextUnchecked $checked={checked} ref={refUnchecked}>
        {uncheckedContent}
      </StyledSwitchControlTextUnchecked>
      <StyledSwitchControlTextChecked $checked={checked} ref={refChecked}>
        {checkedContent}
      </StyledSwitchControlTextChecked>
    </Flex>
  );
};
