import ReactDOM from 'react-dom/client';
import ProductProvider from './context/ProductContext/ProductContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ProductProvider> 
    <App/>
  </ProductProvider>
);
