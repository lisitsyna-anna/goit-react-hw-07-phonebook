import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FailureText = styled.p`
  text-align: center;
`;
