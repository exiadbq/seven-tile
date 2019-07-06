import React from 'react';
import styled from 'styled-components';
import tile from './assets/tile.jpg';
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

  .overlay {
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
  }
`;
const Image = styled.img`
  width: 100%;
  position: relative;
`;

const H1 = styled.h1`
  color: ${props => props.color};
`;
const Tile = ({title}) => {
  return (
    <Wrapper>
      <Image src={tile} alt={title} />
      <div className="overlay">
        <img src={logo} alt={'seven'} />
        <H1 color="white">{title}</H1>
      </div>
    </Wrapper>
  );
};
export default Tile;
