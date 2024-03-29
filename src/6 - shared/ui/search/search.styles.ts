import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-width: 50px;
  position: relative;
`;

export const Input = styled.input<{ theme?: 'dark' | 'light' }>`
  padding: 10px 30px 10px 10px;
  height: 39.2px;
  outline: none;
  background-color: ${({ theme }) => theme === 'dark' && '#1d1d1f'};
  color: ${({ theme }) => theme === 'dark' && '#fff'};
  border-bottom: ${({ theme }) => theme === 'dark' && '1px solid #dadada'};
`;
