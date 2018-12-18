import styled, { keyframes } from 'styled-components';

const slideOut = keyframes`
  0% {
    max-width: 100%;
  }
  100% {
    max-width: 0;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'nav nav nav' 'side body rSide' 'foot foot foot';
  grid-template-columns: minmax(min-content, 0.15fr) 1fr minmax(
      min-content,
      max-content
    );
  grid-template-rows: auto;
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
  max-height: calc(100vh - 5.5rem);
  background: linear-gradient(
    30deg,
    hsl(210, 20%, 30%),
    hsl(210, 10%, 80%),
    hsl(210, 5%, 30%)
  );
  padding: 0.5rem;
  overflow: auto;
  border-radius: 0.5rem;
  margin: 0 0.25rem;
  box-shadow: 1px 7px 17px -5px rgba(0, 0, 0, 0.75);
`;

const Side = styled.div`
  display: block;
  grid-area: side;
  background: linear-gradient(
    30deg,
    hsl(210, 20%, 30%),
    hsl(210, 10%, 80%),
    hsl(210, 5%, 30%)
  );
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0 0.25rem;
  box-shadow: 1px 7px 17px -5px rgba(0, 0, 0, 0.75);
`;

const RSide = styled.div`
  display: block;
  max-width: 0;
  overflow: hidden;
  grid-area: rSide;
  background-color: hsl(210, 30%, 70%);
  padding: 0rem;
  box-sizing: border-box;
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
  position: relative;
  background-color: hsl(210, 30%, 90%);
  border-radius: 0.5rem;
  padding: 0.2rem;
  box-shadow: 1px 7px 17px -5px rgba(0, 0, 0, 0.75);
  margin-bottom: 0.5rem;
  opacity: 0.7;
  border: 2px solid darkgray;
  background: linear-gradient(
    30deg,
    hsl(210, 20%, 80%),
    hsl(210, 10%, 90%),
    hsl(210, 5%, 80%)
  );

  overflow: none;
  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    color: white;
    background-color: silver;
    z-index: 100;
    animation: ${slideOut} 0.3s ease-out;
    animation-fill-mode: forwards;
  }
`;

const P = styled.p`
  padding: 0.2rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  &:hover {
    border: 1px solid green;
  }
`;

const Title = styled.h3`
  padding: 0.2rem;
`;

export { Layout, Nav, Body, Side, RSide, Foot, Item, P, Title };
