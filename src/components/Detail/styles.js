import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50px;
  }

`;


export const Content = styled.div`
  display: flex;

  width: 100%;

  padding: 0 100px;

`;

export const ContentApply = styled.div`
  display: grid;
  margin-top: 60px;

  img {
    width: 400px;
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  padding: 0 100px;

  display: grid;

  a {
    margin: 10px 0 10px;
    font-size: 17px;
    color: #2196f3;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }

  p {
    width: 100%;
    max-width: 1000px;
    text-align: left;
    font-size: 16px;
  }

  small {
    font-size: 15px;
    color: #363F5F;
    margin: 0 0 10px;
  }

  h1 {
    font-size: 32px;
    margin: 0 0 10px;
  }

`;

