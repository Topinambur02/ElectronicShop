import React, { useState } from "react";
import style from './CreateDevicePage.module.css'
import { createDevice } from "../../http/DeviceApi";
import useTitle from "../../hooks/useTitle";

const CreateDevicePage = () => {
    useTitle('Создание товара');

    const [device, setDevice] = useState({
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDevice({
          ...device,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        try {
            createDevice(device);
            e.preventDefault();
        } catch (error) {
            console.log(error);
        }
      };

    return (
        <div className={style.createDevicePage}>
            <form onSubmit={handleSubmit} className={style.deviceForm}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Название товара:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={device.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="description">Описание товара:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={device.description}
                        onChange={handleChange}
                        defaultValue=""
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="price">Цена:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={device.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="imageUrl">URL изображения:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={device.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className={style.submitButton}>Создать товар</button>
            </form>
        </div>
    );
}

export default CreateDevicePage;