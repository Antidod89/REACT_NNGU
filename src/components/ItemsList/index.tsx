import React from 'react';
import Item from '../item';
import style from './ItemsList.module.scss';

const ItemsMock = [
  {
    id: 1,
    itemName: 'Ботинки',
    itemDescription: 'Смотриет, какие потрясающие ботинки',
    price: 10000,
  },
  {
    id: 2,
    itemName: 'Шапка',
    itemDescription: 'Очень красивая шапка',
    price: 1000,
  },
  {
    id: 3,
    itemName: 'Платье',
    itemDescription: 'Лучшее платье на свете',
    price: 20000,
  },
  {
    id: 4,
    itemName: 'Пиджак',
    itemDescription: 'Ну очень модный пиджак',
    price: 5000,
  },
];

const Itemslist = () => {
  return (
    <div className={style.items_list__wrapper}>
      <p>списко товаров</p>
      <div className={style.items_list}>
        {ItemsMock.map((item) => {
          const { id, itemName, itemDescription } = item;
          return <Item key={`ID: ${id}`} name={itemName} description={itemDescription} />;
        })}

        {/* <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} /> */}
      </div>
    </div>
  );
};

export default Itemslist;
