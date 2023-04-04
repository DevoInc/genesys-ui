import styled, { css } from 'styled-components';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

import { IconSize } from '../declarations';
import { GlobalStatus } from '../../../declarations';

import { hasStatus } from '../../../utils/validations';
import { flexMixin } from '../../../styled/mixins/utilsMixins';
import { getColor } from './colorUtils';

export interface StyledIconProps {
  /** This property defines the icon type */
  iconId: keyof typeof iconDictionary; // TODO: replace with genesys-icon type
  /** This property defines the custom icon color */
  color?: string;
  /** This property defines the custom icon font size */
  size?: string | IconSize;
  /** This property defines the status color schema for the icon */
  status?: GlobalStatus;
  /** If the icon has this property its font-weight changes to bold */
  strong?: boolean;
}

export const StyledIcon = styled.i.attrs(
  ({ iconId }: Pick<StyledIconProps, 'iconId'>) => ({
    className: `gi-${iconId.toString()}` as string,
  })
)<StyledIconProps>`
  ${({ color, size, status, strong, theme }) => {
    const validStatus = hasStatus(status) ? status : undefined;
    const sizeTokens = theme.alias.size.square.icon.base;
    const sizeEval = (size && sizeTokens[size]) || size;
    return css`
      ${flexMixin({ dis: 'inline-flex', ai: 'center', jc: 'center' })}
      flex-shrink: 0;
      font-weight: ${strong && 'bold'};
      font-size: ${sizeEval};
      color: ${getColor({
        color,
        status: validStatus,
        theme,
      })};
    `;
  }}
`;
