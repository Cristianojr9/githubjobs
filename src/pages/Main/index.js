import React, { useState, useEffect } from 'react';

import { CircularProgress } from '@material-ui/core'

import Header from '../../components/Header';
import Job from '../../components/Job';

import api from '../../services/api';

import { Container, Input, ListJobs } from './styles';

function Main() {
  const [value, setValue] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const response = await api.get('/positions.json');
        setJobs(response.data);

        setLoading(false);
      } catch (err) {
        alert('API Not Connect');
      }

    }
    loadJobs();
  }, []);

  return (
    <Container >
      <Header />
      <Input>
        <label>Job Description</label>
        <input
          placeholder="Filter by title, companies, type"
          defaultValue={value}
          onChange={e => setValue(e.target.value)}
        >
        </input>
      </Input>
      {loading ? (
        <h2><CircularProgress /></h2>
      ) : (
          <ListJobs>
            {jobs
              .filter((job) => {
                if (job.title.toLowerCase().includes(value) || job.type.toLowerCase().includes(value) || job.company.toLowerCase().includes(value)) {
                  return true;
                } else return false;
              })
              .map((job) => (
                <Job
                  key={job.id + job.title}
                  id={job.id}
                  company_logo={job.company_logo}
                  title={job.title}
                  type={job.type}
                  created_at={job.created_at}
                  company_name={job.company}
                />
              ))
            }
          </ListJobs>
        )}
    </Container >
  );
}

export default Main;