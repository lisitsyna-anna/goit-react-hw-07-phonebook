import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  width: 350px;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${p => p.theme.radii.normal};

  :focus,
  :hover {
    border-color: ${p => p.theme.colors.hoverColor};
    outline: none;
  }
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
