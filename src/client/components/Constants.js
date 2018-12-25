const OPTIONS={
  mine: "flag",
  question: "?",
  normal: ""
};

const OPEN_STATUS = {
  none: {
    content: ".",
    color: "#000000"
  },
  mine: {
    content: "*",
    color: "#ff0000"
  },
  one: {
    content: "1",
    color: "#fff600"
  },
  two: {
    content: "2",
    color: "#ffb600"
  },
  three: {
    content: "3",
    color: "#88ff00"
  },
  four: {
    content: "4",
    color: "#00ffd4"
  },
  five: {
    content: "5",
    color: "#00aeff"
  },
  six: {
    content: "6",
    color: "#ad618e"
  },
  seven: {
    content: "7",
    color: "#821c35"
  },
  eight: {
    content: "8",
    color: "#d15757"
  }
};

const getOpenStatus = i => {
  let result = Object.entries(OPEN_STATUS).find(e=>e[1].content===`${i}`);
  try{
    return OPEN_STATUS[result[0]];
  } catch (e){
    return OPEN_STATUS.none;
  }
};



export {OPTIONS, OPEN_STATUS, getOpenStatus};
