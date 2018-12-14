import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'nav nav nav' 'side body rSide' 'foot foot foot';
  grid-template-columns: 10rem 1fr 10rem;
  margin: 0;
`;

const Nav = styled.div`
  display: grid;
  grid-area: nav;
  font-family: Comfortaa, Lato, serif;
  font-size: 2rem;
  padding: 0.25rem;
  border-bottom: 0.2rem solid hsl(30, 30%, 50%);
  box-shadow: 1px 7px 17px -5px rgba(0, 0, 0, 0.75);
  margin-bottom: 0.25rem;
  height: 2.5rem;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  background-color: #dadada;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 6px 5px,
    rgba(255, 255, 255, 0.4) 0 -4px 30px;
`;

const Body = styled.div`
  grid-area: body;
  font-size: 1.2rem;
  font-family: 'Open Sans';
  height: calc(100vh - 5.5rem);
  background-color: hsl(210, 30%, 80%);
  padding: 0.5rem;
`;

const Side = styled.div`
  grid-area: side;
  background-color: hsl(210, 30%, 70%);
  padding: 0.5rem;
`;

const RSide = styled.div`
  grid-area: rSide;
  background-color: hsl(210, 30%, 70%);
  padding: 0.5rem;
`;

const Foot = styled.div`
  grid-area: foot;
  display: grid;
  font-size: 0.8rem;
  padding: 0.25rem;
  border-top: 0.2rem solid hsl(30, 30%, 50%);
  box-shadow: -1px -7px 17px -5px rgba(0, 0, 0, 0.75);
  margin-top: 0.25rem;
  height: 2.5rem;
  align-items: end;
  overflow: hidden;
  background-color: #dadada;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 6px 5px,
    rgba(255, 255, 255, 0.4) 0 -4px 30px;
`;

const Item = styled.div`
  background-color: hsl(210, 30%, 90%);
  border-radius: 0.2rem;
  padding: 0.2rem;
  box-shadow: 1px 7px 17px -5px rgba(0, 0, 0, 0.75);
`;

const P = styled.p`
  padding: 0.2rem;
  border: 1px solid white;
  border-radius: 0.2rem;
  margin: 0.2rem 0;
`;

const Title = styled.h3`
  padding: 0.2rem;
`;

const Project = () => (
  <div>
    <Item>
      <Title>Fire Todo</Title>
      <P>
        An open source project with code available on{' '}
        <a href="https://github.com/petersowa/starter-react-app">GitHub</a>.
      </P>
      <P>
        A multi-user todo list application. A signup is available to create a
        new account or a Google login account be used.
      </P>
      <P>
        Take a look at{' '}
        <a href="https://firetodo.devspeter.space">firetodo.devspeter.space</a>
      </P>
    </Item>
  </div>
);

class App extends Component {
  render() {
    return (
      <Layout>
        <Nav>DevSPeter Homepage</Nav>
        <Body>
          <Project />
        </Body>
        <Side>Projects</Side>
        <RSide>right side</RSide>
        <Foot>This is the footer area. It should be near the bottom.</Foot>
      </Layout>
    );
  }
}

export default App;
