import styled, { css } from 'styled-components';

interface StyledFluidBoxProps {
  height?: string;
}

export const StyledFluidBox = styled.div<StyledFluidBoxProps>`
  ${({ height = '200px' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${height};
    width: 100%;
    color: #a2b62a;
    font-size: 13px;
    text-align: center;
    background-color: #ebf2c5;
    border: 1px solid #a2b62a;
  `};
`;
