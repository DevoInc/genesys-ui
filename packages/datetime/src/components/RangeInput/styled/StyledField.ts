import styled from 'styled-components';

export interface StyledFieldProps {
  /** Set styles when is open a component */
  isOpen?: boolean;
  /** Input width value*/
  width?: string;
  /** Width with shift */
  withShift?: boolean;
  /** Set styles when RT is visible */
  hideRealTime?: boolean;
}

export const StyledField = styled.div.attrs((props) => ({
  pickerInput: props.theme.cmp.dateRange.pickerInput,
}))<StyledFieldProps>`
  /* default variables ------------------------ */
  --height: 3.6rem;
  --width: ${({ width, withShift }) =>
    width || (withShift ? '41.2rem' : '37.2rem')};
  --width-input: ${({ hideRealTime }) => (hideRealTime ? '47%' : '43%')};
  --padding: ${({ withShift }) => (withShift ? '0 2.8rem' : '0 0.6rem')};
  --padding-input: 0 0.4rem;
  --font-size: 1.2rem;
  --btn-size: 2.8rem;
  --arrow-size: 0.8rem;
  --shift-size: 100%;

  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${({ isOpen, pickerInput }) =>
    isOpen ? pickerInput.color.border.active : pickerInput.color.border.base};
  border-radius: 0.4rem;
  width: var(--width);
  height: var(--height);
  padding: var(--padding);

  + & {
    margin-left: calc(var(--arrow-size) * 3);
  }
`;
