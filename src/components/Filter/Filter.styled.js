import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  width: 350px;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px auto;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${p => p.theme.radii.normal};

  :focus,
  :hover {
    border-color: ${p => p.theme.colors.hoverColor};
    outline: none;
  }
`;
