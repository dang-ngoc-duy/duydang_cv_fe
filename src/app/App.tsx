import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CVPage from './views/CVPage';
import GetLinkMp3 from './views/GetLinkMp3';

const App: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/mp3' element={<GetLinkMp3/>}/>
        <Route path='/*' element={<CVPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
