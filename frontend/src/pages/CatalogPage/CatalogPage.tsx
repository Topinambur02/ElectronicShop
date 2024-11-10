import { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';
import { Context } from '../..';
import ProductCard from '../../components/product/ProductCard';
import { ChevronDown } from 'lucide-react';
import LoginModal from '../../components/modal/LoginModal';
import { getAllDevices } from '../../http/DeviceApi';
import { observer } from 'mobx-react-lite';

const CatalogPage = observer(() => {
  useTitle('Каталог');

  const context = useContext(Context);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getAllDevices().then(data => context?.deviceStore.setDevices(data));
  },[]);

  if (!context) {
    return null;
  }

  const { userStore, deviceStore } = context;

  return (
    <div className={style.container}>

      {!userStore.isAuth && <LoginModal visible={modal} setVisible={setModal} />}

      <div className={style.left}>

        <div className={style.filters}>

          <ul>
            <li><ChevronDown /> Цена</li>
            <li><ChevronDown /> Бренд</li>
            <li><ChevronDown /> Рейтинг</li>
            <li><ChevronDown /> Тип устройства</li>
            <li><ChevronDown /> Технические характеристики</li>
            <li><ChevronDown /> Год выпуска</li>
            <li><ChevronDown /> Цвет</li>
            <li><ChevronDown /> Страна производителей</li>
          </ul>

        </div>
      </div>

      <div className={style.right}>

        {deviceStore.devices.map(device => (<ProductCard setModal={setModal} className={style.longCard} key={device.id} product={device} />))}

      </div>

    </div>
  );
});

export default CatalogPage;