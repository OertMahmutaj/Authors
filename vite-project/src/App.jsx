import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './views/Main';
// import Detail from './components/Details';
import Authorform from './components/Authorform';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/author/" />
            <Route element={<Authorform/>} path="/author/new" />
            <Route element={<Edit/>} path="/author/:id" />
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;