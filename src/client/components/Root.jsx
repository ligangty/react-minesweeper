'use strict'

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Grid from './Grid.jsx';
import './styles/main.css';

const Root = (props)=>(
  <div className="container-small">
    <Grid />
  </div>
);

export default Root;
