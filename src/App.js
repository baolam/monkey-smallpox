import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import NotFound from './NotFound';
import Form from './Form';
import Root from './manage/Root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='form' element={ <Form /> } />
        <Route path='manage'>
          <Route index element = { <Root /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App;