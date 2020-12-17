import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container, Input } from './styles';

function Main() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const response = await api.get('/positions.json');
      setJobs(response.data);
    }
    loadJobs();
  }, []);

  return (
    <Container >
      <Header />
      <Input>
        <label>Job Description</label>
        <input
          placeholder="Filter by title, benefits, companies, expertise"
        >
        </input>
      </Input>

    </Container >
  );
}

export default Main;