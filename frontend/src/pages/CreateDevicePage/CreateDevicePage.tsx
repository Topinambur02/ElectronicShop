import React, { useState } from "react";
import style from './CreateDevicePage.module.css'
import { createDevice } from "../../http/DeviceApi";
import useTitle from "../../hooks/useTitle";
import { uploadFile } from "../../http/FileApi";

const CreateDevicePage = () => {
    useTitle('Создание товара');

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [device, setDevice] = useState({
        name: '',
        price: 0,
        brand: '',
        type: '',
        year: 0,
        color: '',
        country: '',
        imageId: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDevice({
            ...device,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('file', file!);

        try {
            const res = await uploadFile(file!);
            device.imageId = res.id;
            await createDevice(device);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className={style.createDevicePage}>
            <form onSubmit={handleSubmit} className={style.deviceForm}>

                <div className={style.formGroup}>
                    <label htmlFor="image">Изображение товара:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                    />
                </div>

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
                    <label htmlFor="brand">Бренд товара:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={device.brand}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="type">Тип товара:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={device.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="year">Год товара:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={device.year}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="color">Цвет товара:</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={device.color}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="country">Страна производитель:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={device.country}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className={style.submitButton}>Создать товар</button>
            </form>

            {isSubmitted && 
                <div className={style.successMessage}>
                    Устройство успешно создано!
                </div>}
        </div>
    );
}

export default CreateDevicePage;