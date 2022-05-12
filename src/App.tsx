import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DevicePage from './pages/DevicePage';

import './App.css';
import StoreLayout from './layouts/StoreLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StoreLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/devices/:deviceName' element={<DevicePage/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
