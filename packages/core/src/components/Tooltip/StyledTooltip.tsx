import * as React from 'react';
import styled, { css } from 'styled-components';
import ReactToolTip from 'react-tooltip';

import { getFontSize } from '../../styled/mixins';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledTooltipProps extends ReactToolTip {}

export const StyledTooltip = styled((props) => (
  <ReactToolTip {...props} />
))<StyledTooltipProps>`
  ${({ theme }) => {
    const tokens = theme;
    const aliasTokens = tokens.alias;
    return css`
      &&& {
        padding: ${aliasTokens.space.cmp.xxs} ${aliasTokens.space.cmp.xs};
        font-size: ${getFontSize({ tokens, size: 'xs' })};
        color: ${aliasTokens.color.text.body.base};
        background-color: ${aliasTokens.color.background.surface.base[
          theme.meta.scheme === 'dark' ? 'raised' : 'base'
        ]};
        border-radius: 0;
        box-shadow: ${aliasTokens.elevation.boxShadow.depth.activated};

        &.type-dark {
          background-color: ${theme.meta.scheme === 'dark'
            ? aliasTokens.color.background.surface.base.raised
            : aliasTokens.color.background.surface.inverse.base};
          color: ${aliasTokens.color.text.body[
            theme.meta.scheme === 'dark' ? 'base' : 'inverse'
          ]};
        }

        &.type-light {
          background-color: ${theme.meta.scheme === 'dark'
            ? aliasTokens.color.background.surface.inverse.base
            : aliasTokens.color.background.surface.base.base};
          color: ${aliasTokens.color.text.body[
            theme.meta.scheme === 'dark' ? 'inverse' : 'base'
          ]};
        }

        &.type-success {
          background-color: ${aliasTokens.color.background.feedback.success
            .weak};
          color: ${aliasTokens.color.text.feedback.success.strong};
        }

        &.type-warning {
          background-color: ${aliasTokens.color.background.feedback.warning[
            theme.meta.scheme === 'dark' ? 'strong' : 'weak'
          ]};
          color: ${aliasTokens.color.text.feedback.warning.strong};
        }

        &.type-error {
          background-color: ${aliasTokens.color.background.feedback.error.weak};
          color: ${aliasTokens.color.text.feedback.error.strong};
        }

        &.type-info {
          background-color: ${aliasTokens.color.background.feedback.info.weak};
          color: ${aliasTokens.color.text.feedback.info.strong};
        }

        &:after {
          display: none;
        }
      }
    `;
  }}
`;
