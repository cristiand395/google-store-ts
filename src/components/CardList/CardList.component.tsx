import { useContext } from 'react';
import Card from '../Card/Card.component';
import { ProductContext }  from '../../context/ProductContext/ProductContext';
import { ProductContextType } from '../../context/ProductContext/@ProductContextTypes';

import './CardList.styles.css';

const CardList = () => {
  const { filteredProducts } = useContext(ProductContext) as ProductContextType;
  const products = filteredProducts;

  return (
    <div className="card-list">
      {products.map(product => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          type={product.type}
          price={product.price}
          currency={product.currency}
          image={product.image}
          specs={product.specs}
        />
      ))}
    </div>
  );
}

export default CardList;