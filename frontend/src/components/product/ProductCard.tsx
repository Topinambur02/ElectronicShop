import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { IProps } from '../../types/ProductType';
import style from './ProductCard.module.css';
import { addDeviceToBucket, removeDeviceFromBucket } from '../../http/BucketApi';
import { cartStore } from '../../store/CartStore';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, className = `${style.productCard}`, setModal }: IProps) => {

    const context = useContext(Context);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(() => {
        const savedState = localStorage.getItem(`isAddedToCart_${product.id}`);
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        const isBacketPage = window.location.pathname === '/basket';
        setShowDeleteButton(isBacketPage);
    }, []);

    if (!context) {
        return null;
    }

    const { userStore } = context;

    const handleAddToCart = async () => {
        try {
            addDeviceToBucket(userStore.user.bucketId, product.id);
            cartStore.addToCart(product);
            setIsAddedToCart(true);
            localStorage.setItem(`isAddedToCart_${product.id}`, JSON.stringify(true));
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveFromCart = async () => {
        try {
            removeDeviceFromBucket(userStore.user.bucketId, product.id);
            cartStore.removeFromCart(product);
            setIsAddedToCart(false);
            localStorage.setItem(`isAddedToCart_${product.id}`, JSON.stringify(false));
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
                    <div>
                        {showDeleteButton
                            ? <button onClick={handleRemoveFromCart}>Удалить</button>
                            : <button className={style.addToCartButton} onClick={handleAddToCart}>
                                {isAddedToCart ? <Link to={'/basket'}>В корзине</Link> : 'Добавить в корзину'}
                            </button>}
                    </div>
                    : setModal && <button onClick={() => setModal(true)} >Добавить в корзину</button>}
            </div>
        </div>
    );
};

export default ProductCard;