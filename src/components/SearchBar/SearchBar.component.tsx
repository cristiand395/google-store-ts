import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import { IconContext } from "react-icons";
import { ProductContext } from '../../context/ProductContext/ProductContext';
import { ProductContextType } from '../../context/ProductContext/@types';
import './SearchBar.styles.css';

const SearchBar = () => {
  const { searchValue, setSearchValue, filteredProducts } = useContext(ProductContext) as ProductContextType;

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
    console.log('searchValue: ', searchValue)
    console.log('filteredProducts: ', filteredProducts)
  };

  return (
    <div className='searchBarContainer'>
      <IconContext.Provider value={{ color: "gray", className:'iconSearch' }}> 
        <AiOutlineSearch />
      </IconContext.Provider>
      <input
        value={searchValue}
        className='searchBar'
        placeholder='Search'
        onChange={handleChange}/>
    </div>
  );
}

export default SearchBar;