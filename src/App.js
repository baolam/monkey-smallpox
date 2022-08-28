import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import NotFound from './NotFound';
import Form from './Form';
import Root from './manage/Root';
import Email from './manage/Email';
import DetailForm from './manage/DetailForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='form' element={ <Form /> } />
        <Route path='manage'>
          <Route index element = { <Root /> } />
          <Route path="email" exact element={ <Email /> } />
          <Route path="detail" element={ <DetailForm /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App;