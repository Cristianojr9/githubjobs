import React from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

function HowToWorks() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>How GitHub Jobs Works</h1>
          <span>GitHub Jobs is a great place attract the best technical talent for your company's open software development positions. Here's how:</span>

          <ul>
            <li>
              Step 1:
              Create & preview your listing
          <p>See exactly how your listing will look before <br />
          you publish live. Before creating a listing, you <br />
          must login with your GitHub account and verify <br />
          your email address.
          </p>
            </li>
            <li>
              Step 2:
              Pay with a major credit card
          <p>Invoicing available on request for bulk orders. <br />
          Email jobs@github.com for more info. Sorry, <br />
          no recruitment agencies.
          </p>
            </li>
            <li>
              Step 3:
              Your listing goes live immediately
          <p>Listings are live for 30 days. We’ll send you a <br />
          receipt and a link to change the listing.
          </p>
            </li>
          </ul>
        </Content>
      </Container>
    </>
  );
}

export default HowToWorks;