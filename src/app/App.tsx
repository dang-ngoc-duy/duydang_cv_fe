import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import CVPage from './views/CVPage';
import GetLinkMp3 from './views/GetLinkMp3';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/mp3" element={<GetLinkMp3 />} />
          <Route path="/*" element={<CVPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
