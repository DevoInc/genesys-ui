import styled from 'styled-components';

// styled
import { StyledPartitionsItemProps } from './StyledPartitionsItem';
import { GlobalAriaProps, GlobalAttrProps } from '../../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledPartitionsWrapperProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    Pick<StyledPartitionsItemProps, 'size'> {}

export const StyledPartitionsWrapper = styled.ul<StyledPartitionsWrapperProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: ${({ size }) =>
    size === 'lg'
      ? '1.4rem'
      : size === 'sm'
      ? '.6rem'
      : size === 'xs'
      ? '.4rem'
      : '1rem'};
  border-radius: 9999px;
  overflow: hidden;
`;
