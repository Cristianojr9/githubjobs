import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 120px;
  
  background-color: #2196f3;
`;

export const Logo = styled.div`
  img {
    width: 180px;
  }
`;

export const Nav = styled.div`
  a {
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: 0.2s linear;
    margin-left: 20px;
    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }


`;
