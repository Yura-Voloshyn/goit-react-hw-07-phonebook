import styled from 'styled-components';
export const Section = styled.section`
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: 300px;
  border: 2px solid orange;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  & button {
    max-width: 120px;

    margin-left: auto;
    margin-right: auto;
  }
`;
