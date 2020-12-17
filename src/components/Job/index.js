import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function Job(props) {
  const history = useHistory();

  function showDetail(e) {
    e.preventDefault();

    history.push(`/detail/${props.id}`);
  }

  return (
    <Container onClick={showDetail}>
      <ul>
        <img src={props.company_logo} alt="img" />
        <div className="content">
          <h1>{props.title}</h1>
          <span>{props.company_name}</span>
          <small>{props.type}</small>
        </div>
        <span>{props.created_at}</span>
      </ul>
    </Container>
  )
}

export default Job;