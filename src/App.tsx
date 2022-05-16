import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DevicePage from './pages/DevicePage';

import './App.css';
import StoreLayout from './layouts/StoreLayout';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StoreLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/devices/:deviceName' element={<DevicePage/>}/>  
      </Route>
      <Route path='/sign-in' element={<SignInSignUp/>}/>
      <Route path='/sign-up' element={<SignInSignUp/>}/>
    </Routes>
  );
}

export default App;
