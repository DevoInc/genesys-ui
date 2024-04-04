import { css } from 'styled-components';

/**
 * Get the specific styles for Panel component when it's used as a Modal.Panel component
 *
 * @return styles for Panel component
 */
export const modalPanelMixin = ({ theme }) => {
  const tokensModal = theme.cmp.modal;
  return css`
    background-color: ${tokensModal.color.background};

    &:focus {
      outline: none;
    }
  `;
};
