import style from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={style.filters}>
      <h3>Фильтры</h3>
      <ul>
        <li><input type="checkbox" /> Рейтинг 4 и выше</li>
        <li><input type="checkbox" /> Надёжные модели</li>
        <li><input type="checkbox" /> Есть обзор</li>
        <li><label>Цена</label></li>
        <li><label>Акция</label></li>
        <li><label>Производитель</label></li>
        <li><label>Всего конфорок (шт)</label></li>
        <li><label>Тип</label></li>
        <li><label>Материал панели</label></li>
      </ul>
    </div>
  );
};

export default CatalogPage;