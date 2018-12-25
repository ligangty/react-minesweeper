import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Root from './Root.jsx';

export const App = ()=> <HashRouter basename="/">
        <Route path="/" component={Root} />
      </HashRouter>;
export default App;
