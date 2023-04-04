import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';
import styled, { css } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledContainerProps extends ToastContainerProps {}

export const StyledContainer = styled(ToastContainer)`
  ${({ theme }) => {
    const tokensPanel = theme.cmp.panel;
    const tokensToast = theme.cmp.toast;

    return css`
      width: ${tokensToast.size.width.default};

      .toast {
        background: none;
        border-radius: 0;
        box-shadow: none;
        cursor: initial;
        margin-bottom: ${tokensToast.space.gap};
        overflow: visible;
        padding: 0;
      }

      .body {
        padding: 0;
      }

      .progress-bar {
        background: none;
        border-radius: 0 0 ${tokensPanel.shape.borderRadius} 0;
        height: ${tokensToast.progressBar.size.height};
        overflow: hidden;
        transform-origin: right;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${tokensToast.color.background.default};
        }

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${tokensToast.progressTrack.color.background.weak};
        }
      }
    `;
  }}
`;
