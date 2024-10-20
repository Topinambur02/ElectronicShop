import useTitle from '../../hooks/useTitle';
import style from './CatalogPage.module.css';

const CatalogPage = () => {
  useTitle('Каталог');

  return (
    <div className={style.filters}>

      <ul>
        <li>Производитель</li>
        <li>Цена</li>
        <li>Фильтр 3</li>
        <li>Фильтр 4</li>
      </ul>
    
    </div>
  );
};

export default CatalogPage;