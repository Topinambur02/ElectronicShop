import { useContext, useState } from "react";
import { updateDevice } from "../../../http/DeviceApi";
import style from "./EditDeviceModal.module.css"
import { Context } from "../../..";
import { IProps } from "../../../types/EditDeviceModalType";

const EditDeviceModal = ({ device, onClose }: IProps) => {
    const [name, setName] = useState(device.name);
    const [price, setPrice] = useState(device.price);
    const [imageUrl, setImageUrl] = useState(device.imageUrl);
    const [description, setDescription] = useState(device.description);
    const { deviceStore } = useContext(Context) || {};

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const updatedDevice = {
                ...device,
                name,
                description,
                price,
                imageUrl,
            };
            updateDevice(updatedDevice);
            deviceStore?.setDevices(deviceStore.devices.map(item => item.id === device.id ? updatedDevice : item));
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Редактировать товар</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Название:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="price">Цена:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="description">Описание:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="imageUrl">URL изображения:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={style.saveButton}>Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default EditDeviceModal;