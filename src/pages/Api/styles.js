import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: grid;
  justify-content: center;


`;

export const Content = styled.div`
  width: 100%;

  padding: 0 100px;
  margin-top: 20px;

  box-shadow: 2px 0px 10px #2196f3; 

  h1 {
    font-size: 32px;
    margin: 10px 0 10px;
    text-align: center;

  }

  p {
    font-size: 18px;
    margin: 10px 0 10px;

    
  }

  span {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 10px;

  }

  ul {
    margin: 10px 0 10px;

    li {
      margin: 10px 0 10px;
      font-style: italic;
      font-size: 16px;
    }
  }
`;

