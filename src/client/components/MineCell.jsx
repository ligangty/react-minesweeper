'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {OPTIONS, getOpenStatus} from './Constants.js';
import './styles/main.css';

export default class MineCell extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentState:"",
      opened:false,
      openedState:"",
      isMine:false
    }
  }

  handleRightClick = (e) => {
    let button = e.target;
    let {currentState} = this.state;
    switch(currentState){
      case OPTIONS.normal:
        this.setState({
          currentState: OPTIONS.mine
        });
        break;
      case OPTIONS.mine:
        this.setState({
          currentState: OPTIONS.question
        });
        break;
      default:
        this.setState({
          currentState: OPTIONS.normal
        });
        break;
    }
  }


  handleClick = (e) => {
    let opened = this.state.opened;
    if(!opened){
      opened = true;
    }else{
      return;
    }

    //TODO: this is mock. Will change due to real logic
    let num = Math.floor(Math.random() * 8);
    let state = getOpenStatus(num);

    this.setState({
      opened: opened,
      openedState: state
    });
  }


  render(){
    const {currentState, opened, openedState, isMine} = this.state;
    const size = this.props.size;
    const cellStyle = {
      width: `${size-1}px`,
      height: `${size-1}px`
    }  

    return (
      <div className="cell" style={cellStyle}>
        {
          opened?
          <span className="opened" style={{color:openedState.color}}>{openedState.content}</span>:
          <button className="button" onClick={this.handleClick} onContextMenu={this.handleRightClick}>{currentState}</button>
        }
      </div>
    );
  }
}

MineCell.propTypes={
  size: PropTypes.number.isRequired
}
