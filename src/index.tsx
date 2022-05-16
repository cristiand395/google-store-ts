import ReactDOM from 'react-dom/client';
import ProductProvider from './context/ProductContext/ProductContext';
import App from './App';
import UserProvider from './context/UserContext/UserContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider> 
        <App/>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>
);
