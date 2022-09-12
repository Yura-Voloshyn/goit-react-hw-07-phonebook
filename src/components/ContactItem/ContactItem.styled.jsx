import styled from 'styled-components';

export const ListItem = styled.li`
  /* width: 300px; */
  display: flex;
  margin: 8px 0;
  gap: 10px;
  & p {
    margin: 0;
  }
  & button {
    margin-left: auto;
    padding: 2px 4px;
  }
`;
