import style from './ProductCard.module.css';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductProps {
    product: Product;
}

const ProductCard = (props: ProductProps) => {
    return (
        <div className={style.productCard}>
            <img src={props.product.imageUrl} alt={props.product.name} />
            <h3>{props.product.name}</h3>
            <p>Цена: {props.product.price}</p>
            <button>Добавить в корзину</button>
        </div>
    );
};

export default ProductCard;