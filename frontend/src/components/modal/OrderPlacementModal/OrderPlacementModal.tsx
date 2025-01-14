import { useState } from 'react';
import style from './OrderPlacementModal.module.css';
import { IProps } from '../../../types/LoginModalType';
import { Map } from '@pbe/react-yandex-maps';

const OrderPlacementModal = ({ visible, setVisible }: IProps) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const rootClasses = [style.modal];

    if (visible) {
        rootClasses.push(style.active);
    }

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleCloseModal = () => {
        setVisible(false);
        setCurrentStep(1);
        setSelectedPayment(null);
    };

    return (
        <div className={rootClasses.join(' ')} onClick={handleCloseModal}>
            <div className={style.formContainer} onClick={(e) => e.stopPropagation()}>
                <h2>Оформление заказа</h2>

                <div className={style.steps}>
                    <div className={`${style.step} ${currentStep === 1 ? style.active : ''}`}>
                        1. Данные покупателя
                    </div>
                    <div className={`${style.step} ${currentStep === 2 ? style.active : ''}`}>
                        2. Выбор магазина
                    </div>
                    <div className={`${style.step} ${currentStep === 3 ? style.active : ''}`}>
                        3. Оплата
                    </div>
                    <div className={`${style.step} ${currentStep === 4 ? style.active : ''}`}>
                        4. Завершение
                    </div>
                </div>

                <div className={style.stepContent}>

                    {currentStep === 1 && (
                        <div>
                            <h3>Данные покупателя</h3>
                            <form>
                                <label>
                                    <p>Имя:</p>
                                    <input type="text" placeholder="Введите ваше имя" />
                                </label>
                                <label>
                                    <p>Телефон:</p>
                                    <input type="tel" placeholder="Введите ваш телефон" />
                                </label>
                                <label>
                                    <p>Email:</p>
                                    <input type="email" placeholder="Введите ваш email" />
                                </label>
                            </form>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h3>Выбор магазина на карте</h3>
                            <div className={style.mapPlaceholder}>
                                <Map className={style.map} defaultState={{ center: [55.76, 37.64], zoom: 9 }} />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h3>Выбор оплаты</h3>
                            <form>
                                <div className={`${style.paymentOption} ${selectedPayment === 'card' ? style.selected : ''}`}
                                    onClick={() => setSelectedPayment('card')}>
                                    <img src="visa.svg" alt="Visa" />
                                    <img src="mastercard.svg" alt="MasterCard" />
                                    <p>Оплата картой</p>
                                </div>
                                <div className={`${style.paymentOption} ${selectedPayment === 'paypal' ? style.selected : ''}`}
                                    onClick={() => setSelectedPayment('paypal')}>
                                    <img src="paypal.svg" alt="PayPal" />
                                    <p>PayPal</p>
                                </div>
                                <div className={`${style.paymentOption} ${selectedPayment === 'cash' ? style.selected : ''}`}
                                    onClick={() => setSelectedPayment('cash')}>
                                    <img src="cash.svg" alt="Наличные" />
                                    <p>Оплата наличными</p>
                                </div>
                            </form>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className={style.successPage}>
                            <div className={style.successIcon}>✓</div>
                            <h3>Заказ успешно оформлен!</h3>
                            <p>Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.</p>
                            <button onClick={handleCloseModal}>Закрыть</button>
                        </div>
                    )}

                </div>

                <div className={style.buttons}>
                    {currentStep > 1 && currentStep < 4 && <button onClick={handlePreviousStep}>Назад</button>}
                    {currentStep < 4 && <button onClick={handleNextStep}>Далее</button> }
                </div>
                
            </div>
        </div>
    );
};

export default OrderPlacementModal;