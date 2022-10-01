import React from 'react';
import Banner from '../components/Banner/Banner';
import { CommonBlockInfo, CommonBlockInfoWithBack } from '../components/CommonBlockInfo/CommonBlockInfo';

const MainPage = () => {
  return (
    <>
      {/* Шапка, баннер */}
      <Banner />
      <CommonBlockInfo
        name="Горячие офферы"
        pStyle={{ borderBottom: 'none' }}
        blockStyle={{ backgroundColor: '#2D2B34' }}
      />
      <CommonBlockInfo name="Популярные" />
      <CommonBlockInfo blockStyle={{ backgroundColor: '#2D2B34' }} name="Дефолт" />
      <CommonBlockInfoWithBack name="Наши сборки" />
      {/* Футер */}
    </>
  );
};

export default MainPage;
