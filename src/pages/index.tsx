import React, { useState } from 'react';
import { withPrefix } from 'gatsby';
import styled, { css } from 'styled-components';

import Container from '../components/container';
import Layout from '../components/layout';

const Center = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 40px);
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled(Center)`
  transition: background 0.5s;
  overflow: hidden;
  width: 100%;

  ${({ yes }) =>
    yes &&
    css`
      background: #11a6e0;
    `};
`;

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  font-size: 60px;
  transition: opacity 0.5s;

  ${({ yes }) =>
    yes &&
    css`
      opacity: 0;
    `};

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Button = styled.button`
  text-align: center;
  font-size: 40px;
  background: #30309c;
  color: white;
  border: none;
  padding: 20px 100px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 5px;
  transform: skew(-5deg);
  transition: background 0.2s, opacity 0.5s;
  cursor: pointer;

  &:hover {
    background: #0d0d40;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }

  ${({ yes }) =>
    yes &&
    css`
      opacity: 0;
    `};
`;

const Img = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: opacity 0.5s;
  transition-delay: 0.3s;
  opacity: 0;
  pointer-events: none;

  @media (max-height: 580px) {
    width: 700px;
  }

  ${({ yes }) =>
    yes &&
    css`
      opacity: 1;
    `};
`;

export default () => {
  const [yes, setYes] = useState(false);
  return (
    <Layout>
      <Wrap yes={yes}>
        <Container maxWidth="1200">
          <Center>
            <Title yes={yes}>Záleží ti na Slovensku?</Title>
            <Button onClick={() => setYes(true)} yes={yes}>
              Áno
            </Button>
            <Img src={withPrefix('bg.jpg')} width="1000" yes={yes} />
          </Center>
        </Container>
      </Wrap>
    </Layout>
  );
};
