import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/detail/:id' exact component={Detail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;