import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  width: 100%;

  padding: 0 300px;
  animation: 1s ${fadeInAnimation};

`;

export const Content = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;

  padding: 0 100px;

  margin-top: 20px;

  box-shadow: 2px 0px 10px #2196f3; 

  ul {
    display: flex;
    margin: 10px 10px 10px;

    li {
      list-style: none;
      font-size: 18px;

      margin: 10px;

      font-weight: bold;

      p {
        font-weight: normal; 
        font-size: 15px;
      }
    }
  }

  h1 {
    margin: 10px 0 10px;

    text-align: center;
  }

  span {
    margin: 0 0 10px;
    text-align: center;
    font-size: 20px;

  }
`;
