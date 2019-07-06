import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 40em;
  margin: auto;
`;

const Overlay = styled.div`
  position: absolute;
  height: 30%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  img {
    background: transparent;
    height: 100%;
    padding: 0.5em;
  }
`;
const Image = styled.img`
  width: 100%;
  position: relative;
`;

const H1 = styled.h1`
  color: ${props => props.color};
`;
const Tile = ({ title, src }) => {
  return (
    <Wrapper>
      <Image src={src} alt={title} />
      <Overlay>
        <img src={logo} alt={'seven'} />
        <H1 color="white">{title}</H1>
      </Overlay>
    </Wrapper>
  );
};
export default Tile;
