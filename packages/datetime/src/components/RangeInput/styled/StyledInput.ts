import styled from 'styled-components';
import { InputControl, InputControlProps } from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledInputProps extends Pick<InputControlProps, 'status'> {}

export const StyledInput = styled(InputControl).attrs(({ theme }) => ({
  pickerInput: theme.cmp.dateRange.pickerInput,
}))<StyledInputProps>`
  border: ${({ status }) => (!status || status === 'base') && 'none'};
`;
