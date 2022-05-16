import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { IconContext } from "react-icons";
import { ProductContext } from '../../context/ProductContext/ProductContext';
import { ProductContextType } from '../../context/ProductContext/@ProductContextTypes';
import './SearchBar.styles.css';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(ProductContext) as ProductContextType;

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
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