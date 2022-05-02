import Header from './components/Header/Header.component'
import SearchBar from './components/SearchBar/SearchBar.component'
import ProductProvider from './context/ProductContext/ProductContext'
import CardList from './components/CardList/CardList.component'
import './App.css';

function App() {
  return (
    <ProductProvider>
      <Header/>
      <SearchBar/>
      <CardList/>
    </ProductProvider>
  );
}

export default App;
