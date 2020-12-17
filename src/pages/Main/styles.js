import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50px;
  }

`;

export const Input = styled.div`
  width: 100%;
  margin-top: 20px;
  
  display: grid;

  padding: 0 100px;

  label {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px;
  }

  input {
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    border: none;
    transition: 0.1s linear;

    border-radius: 5px;

    &:focus {
      border: 2px solid #2196f3;
    }
  }
`;
