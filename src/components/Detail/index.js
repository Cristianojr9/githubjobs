import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core'

import api from '../../services/api';

import { Container, Content, ContentInfo, ContentApply } from './styles';

function DetailComponent() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [type, setType] = useState('');
  const [companylogo, setCompanylogo] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function loadJobs() {
      const response = await api.get(`/positions/${id}.json`);
      setType(response.data.type);
      setCompanylogo(response.data.company_logo);
      setTitle(response.data.title);
      setDescription(response.data.description);

      setLoading(false);
    }
    loadJobs();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <h2><CircularProgress /></h2>
      ) : (
          <Content>
            <ContentInfo>
              <Link to="/">
                <span>See all positions</span>
              </Link>
              <small>{type}</small>
              <h1>{title}</h1>
              <p>
                {description}
              </p>
            </ContentInfo>


            <ContentApply>
              <img src={companylogo} alt="logo" />

            </ContentApply>

          </Content>
        )}
    </Container>

  )
}

export default DetailComponent;