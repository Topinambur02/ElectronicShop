import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import style from './DeviceCard.module.css';
import { addDeviceToBucket, removeDeviceFromBucket } from '../../http/BucketApi';
import { cartStore } from '../../store/CartStore';
import { Link } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import { deleteDevice } from '../../http/DeviceApi';
import EditDeviceModal from '../modal/EditDeviceModal/EditDeviceModal';

interface IProps {
    device: any;
    className?: string;
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeviceCard = ({ device, className = `${style.deviceCard}`, setModal }: IProps) => {
    const pageTitle = document.title;
    const { userStore, deviceStore } = useContext(Context) || {};
    const role = useRole(userStore);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(() => {
        const savedState = localStorage.getItem(`isAddedToCart_${device.id}`);
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        const isBacketPage = window.location.pathname === '/basket';
        setShowDeleteButton(isBacketPage);
    }, []);

    if (!userStore) {
        return null;
    }

    const handleAddToCart = async () => {
        try {
            addDeviceToBucket(userStore.user.bucketId, device.id);
            cartStore.addToCart(device);
            setIsAddedToCart(true);
            localStorage.setItem(`isAddedToCart_${device.id}`, JSON.stringify(true));
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveFromCart = async () => {
        try {
            removeDeviceFromBucket(userStore.user.bucketId, device.id);
            cartStore.removeFromCart(device);
            setIsAddedToCart(false);
            localStorage.setItem(`isAddedToCart_${device.id}`, JSON.stringify(false));
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveDevice = async () => {
        try {
            deleteDevice(device.id);
            deviceStore?.setDevices(deviceStore.devices.filter(item => item.id !== device.id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`${className}`}>
            <img src={device.imageUrl} alt={device.name} />
            <h3>{device.name}</h3>

            <div className={style.priceAndButton}>
                <p>Цена: {device.price} ₽</p>

                {userStore.isAuth
                    ?
                    <div>
                        {showDeleteButton
                            ? <button onClick={handleRemoveFromCart}>Удалить</button>
                            :
                            <div className={style.buttons}>
                                <button className={style.addToCartButton} onClick={handleAddToCart}>
                                    {isAddedToCart ? <Link to={'/basket'}>В корзине</Link> : 'Добавить в корзину'}
                                </button>
                                { (role === 'ADMIN' && pageTitle !== 'Корзина' && pageTitle !== 'Главная страница')
                                    &&
                                    <div className={style.buttons}>
                                        <button onClick={() => setIsEditModalOpen(true)} className={style.editButton}>Редактировать</button>
                                        <button onClick={handleRemoveDevice} className={style.deleteButton}>Удалить</button>
                                    </div>}
                            </div>}
                    </div>
                    : setModal && <button onClick={() => setModal(true)} >Добавить в корзину</button>}
            </div>

            {isEditModalOpen && (
                <EditDeviceModal
                    device={device}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}

        </div>
    );
};

export default DeviceCard;