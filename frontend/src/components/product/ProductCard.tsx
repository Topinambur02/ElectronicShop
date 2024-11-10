import { useContext, useState } from 'react';
import { Context } from '../..';
import { IProps } from '../../types/ProductType';
import style from './ProductCard.module.css';
import { addDeviceToBucket } from '../../http/BucketApi';
import { cartStore } from '../../store/CartStore';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, className = `${style.productCard}`, setModal }: IProps) => {

    const context = useContext(Context);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    if (!context) {
        return null;
    }

    const { userStore } = context;

    const handleAddToCart = async () => {
        try {
            await addDeviceToBucket(userStore.user.bucketId, product.id);
            cartStore.addToCart(product);
            setIsAddedToCart(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`${className}`}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>

            <div className={style.priceAndButton}>
                <p>Цена: {product.price} ₽</p>

                {userStore.isAuth
                    ?
                    <button onClick={handleAddToCart}>
                        {isAddedToCart ? <Link to={'/basket'}>Добавлено в корзину</Link> : 'Добавить в корзину'}
                    </button>
                    :
                    setModal && <button onClick={() => setModal(true)} >Добавить в корзину</button>}
            </div>
        </div>
    );
};

export default ProductCard;