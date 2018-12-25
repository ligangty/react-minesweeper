import React from 'react';
import MineCell from './MineCell.jsx';
import './styles/main.css';

export default class Grid extends React.Component{
  render(){
    const x=9,y=9;
    const large = Math.max(x, y);
    // let screenWidth = window.innerWidth || document.documentElement.offsetWidth;
    let screenHeight = window.innerHeight || document.documentElement.offsetHeight;
    const size = Math.floor(screenHeight / large);

    // console.log(Utils.getArround(5,6,x,y));
    //
    // console.log(Utils.getMines(30,x,y));

    let grids = [];

    for (let i = 0; i < x; i++) {
      for (let p = 0; p < y; p++) {
        let withLeft = p === 0,
          withTop = i === 0;
        grids.push(<MineCell key={`row${i}-line${p}`} size={size} withTop={withTop} withLeft={withLeft} />);
      }
    }

    return (
      <div className="container-small">
        {grids}
      </div>
    );

  }
}
