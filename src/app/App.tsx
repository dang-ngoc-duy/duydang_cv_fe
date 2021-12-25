import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CVPage from './views/CVPage';

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<CVPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
