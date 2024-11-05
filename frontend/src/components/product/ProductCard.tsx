import { IProps } from '../../types/ProductType';
import style from './ProductCard.module.css';

const ProductCard = ({ product, className = `${style.productCard}`, setModal }: IProps) => {

    const handleAddToCart = () => { 
        setModal(true);
    }

    return (
        <div className={`${className}`}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>

            <div className={style.priceAndButton}>
                <p>Цена: {product.price} ₽</p>
                <button onClick={handleAddToCart} >Добавить в корзину</button>
            </div>
        </div>
    );
};

export default ProductCard;