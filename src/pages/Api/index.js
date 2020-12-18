import React from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

function Api() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>The GitHub Jobs API</h1>
          <p>The GitHub Jobs API allows you to search, and view jobs with JSON over HTTP.</p>
          <h2>GET /positions.json</h2>
          <p>Search for jobs by term, location, full time vs part time, or any combination of the three. All parameters are optional.</p>
          <span>Parameters</span>
          <ul>
            <li>
              description — A search term, such as "ruby" or "java". This parameter is aliased to search.
          </li>
            <li>
              location — A city name, zip code, or other location search term.
          </li>
            <li>
              lat — A specific latitude. If used, you must also send long and must not send location.
          </li>
            <li>
              long — A specific longitude. If used, you must also send lat and must not send location.
          </li>
            <li>
              full_time — If you want to limit results to full time positions set this parameter to 'true'.
          </li>
          </ul>
          <h2>GET /positions/ID.json</h2>
          <p>Retrieve the JSON representation of a single job posting.</p>
          <span>Parameters</span>
          <ul>
            <li>markdown — Set to 'true' to get the description and how_to_apply fields as Markdown.</li>
          </ul>
        </Content>
      </Container>
    </>
  );
}

export default Api;