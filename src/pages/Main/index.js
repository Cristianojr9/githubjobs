import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Job from '../../components/Job';

import api from '../../services/api';

import { Container, Input } from './styles';

function Main() {
  const [value, setValue] = useState('');
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
          defaultValue={value}
          onChange={e => setValue(e.target.value)}
        >
        </input>
      </Input>
      <div>
        {jobs
          .map((job) => (
            <Job
              key={job.id + job.title}
              id={job.id}
              company_logo={job.company_logo}
              title={job.title}
              type={job.type}
              created_at={job.created_at.parse}
              company_name={job.company_name}
            />
          ))
        }
      </div>
    </Container >
  );
}

export default Main;