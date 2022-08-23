import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import NotFound from './NotFound';
import Form from './Form';
import Root from './manage/Root';
import Email from './manage/Email';
import Device from './manage/Device';
import History from './manage/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='form' element={ <Form /> } />
        <Route path='manage'>
          <Route index element = { <Root /> } />
          <Route path="email" exact element={ <Email /> } />
          <Route path="device" element={ <Device /> } />
          <Route path="history" element={ <History /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App;