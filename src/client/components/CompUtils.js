'use strict'

const Utils = {
  getRandomInt: max => Math.floor(Math.random() * Math.floor(max)),

  getArround: (x, y, limitX, limitY) => {
    let result = [];
    for(let i of [-1,0,1]){
      for(let j of [-1,0,1]){
        if(i!==0||j!==0){
          let roundX = x + i, roundY = y + j;
          if(roundX >= 0 && roundX < limitX && roundY >= 0 && roundY < limitY){
            result.push([roundX, roundY]);
          }
        }
      }
    }
    return result;
  },

  getMines: (num, limitX, limitY) => {
    if(num > limitX * limitY){
      throw new Error(`${num} mines is more than field range ${limitX}x${limitY}!`);
    }
    let result = [];
    let i=0;
    while(i < num){
      let x = Utils.getRandomInt(limitX);
      let y = Utils.getRandomInt(limitY);
      if (!result.find(e=>e[0]===x&&e[1]===y)){
        result.push([x, y]);
        i++;
      }
    }
    return result;
  }
}

export default Utils;
