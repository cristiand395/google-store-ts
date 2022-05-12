import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DevicePage from './pages/DevicePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='deviceName' element={<DevicePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
