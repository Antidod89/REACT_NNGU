import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Itemslist from '../ItemsList';
import style from './MainPage.module.scss';

// const MainPage = () => {
//   const isTrue = false;
//   const text1 = 'text1';
//   const text2 = 'text2';
//   return <div className={style.main_page}>{isTrue ? text1 : text2}</div>;
// };

const MainPage = () => {
  // return <div className={style.main_page}>text</div>;
  return (
    <div className={style.page_wrapper}>
      <Header />
      <Itemslist />
      <Footer />
    </div>
  );
};

export default MainPage;
