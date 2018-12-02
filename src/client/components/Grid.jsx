'use strict'

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/main.css';

export default class Grid extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const size = 60, width=500, height=800;
    let screenWidth = window.innerWidth || document.documentElement.offsetWidth,
      screenHeight = window.innerHeight || document.documentElement.offsetHeight;
    let ratioW = Math.floor( screenWidth / (size*2)),
      ratioH = Math.floor( screenHeight / size);

    const parentStyle = {
      width: `${ratioW * size}px`,
      height: `${ratioH * size}px`
    }

    const cellStyle = {
      width: `${size-1}px`,
      height: `${size-1}px`
    }

    const buttonStyle={
      display: "block",
      width: "100%",
      height: "100%"
    }

    let grids = [];

    for (var i = 0; i < ratioH; i++) {
      for (var p = 0; p < ratioW; p++) {
        grids.push(
          <div key={`row${i}-line${p}`} className="cell" style={cellStyle}>
            <button style={buttonStyle}></button>
          </div>
        );
      }
    }

    return (
      <div className="grid" style={parentStyle}>
        {grids}
      </div>
    );

  }
}
