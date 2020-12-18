import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Detail from './pages/Detail';
import HowToWorks from './pages/HowToWorks';
import Api from './pages/Api';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/detail/:id' exact component={Detail} />
        <Route path='/faq' exact component={HowToWorks} />
        <Route path='/api' exact component={Api} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;