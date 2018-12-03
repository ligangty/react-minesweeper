'use strict'

import React from 'react';
import MineCell from './MineCell.jsx';
import './styles/main.css';

export default class Grid extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const x=16,y=16;
    const large = Math.max(x, y)
    let screenWidth = window.innerWidth || document.documentElement.offsetWidth,
      screenHeight = window.innerHeight || document.documentElement.offsetHeight;
    const size = Math.floor(screenHeight / large);

    let width = x*size,
        height = y*size;

    const parentStyle = {
      width: `${width}px`,
      height: `${height}px`
    }

    let grids = [];

    for (var i = 0; i < x; i++) {
      for (var p = 0; p < y; p++) {
        let withLeft = p === 0,
          withTop = i === 0;
        grids.push(
          <MineCell key={`row${i}-line${p}`} size={size} withTop={withTop} withLeft={withLeft} />
        );
      }
    }

    return (
      <div style={parentStyle}>
        {grids}
      </div>
    );

  }
}
