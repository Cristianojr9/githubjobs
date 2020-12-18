import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function Job({ id, title, type, company_logo, company_name, created_at }) {
  const history = useHistory();

  function showDetail(e) {
    e.preventDefault();

    history.push(`/detail/${id}`);
  }

  return (
    <Container onClick={showDetail}>
      <ul>
        <img src={company_logo} alt="img" />
        <div className="content">
          <h1>{title}</h1>
          <span>{company_name}</span>
          <small>{type}</small>
        </div>
        <span>{created_at}</span>
      </ul>
    </Container>
  )
}

Job.defaultProps = {
  id: null,
  title: null,
  type: null,
  company_name: null,
  company_logo: null,
  created_at: null
};

Job.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  company_name: PropTypes.string,
  company_logo: PropTypes.string,
  created_at: PropTypes.string
};

export default Job;