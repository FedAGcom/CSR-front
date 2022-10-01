import { Banner, CommonBlockInfo, CommonBlockInfoWithImage, HeaderAndFooter, PrizeBlock } from '../components';

const MainPage = () => {
  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Banner />
        <CommonBlockInfo
          name="Горячие офферы"
          pStyle={{ borderBottom: 'none' }}
          blockStyle={{ backgroundColor: '#2D2B34' }}
        />
        <CommonBlockInfo name="Популярные" />
        <CommonBlockInfo blockStyle={{ backgroundColor: '#2D2B34' }} name="Дефолт" />
        <CommonBlockInfoWithImage name="Наши сборки" />
      </HeaderAndFooter>
    </>
  );
};

export default MainPage;
