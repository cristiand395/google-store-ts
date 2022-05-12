import CardList from "../components/CardList/CardList.component";
import Header from "../components/Header/Header.component";
import SearchBar from "../components/SearchBar/SearchBar.component";

const Home = () => {
  return (
    <>
      <Header/>
      <SearchBar/>
      <CardList/>
    </>
  );
}

export default Home;