import { ProductProps } from '../../types/ProductType';
import style from './ProductCard.module.css';

const ProductCard = ({product, className}: ProductProps) => {
    return (
        <div className={`${style.productCard} ${className}` }>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
            <button>Добавить в корзину</button>
        </div>
    );
};

export default ProductCard;