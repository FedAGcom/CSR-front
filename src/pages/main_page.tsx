import { Banner, CommonBlockInfo, CommonBlockInfoWithImage, HeaderAndFooter, PrizeBlock } from '../components';
import { useSelector } from 'react-redux';
import { getColorBackgroundOne, getColorBackgroundTwo } from '../store/selectors/getSettingsAppearance';

const MainPage = () => {
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const serverColorBackgroundTwo = useSelector(getColorBackgroundTwo);

  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Banner />
        <CommonBlockInfo
          name="Горячие офферы"
          pStyle={{ borderBottom: 'none' }}
          blockStyle={{ backgroundColor: serverColorBackgroundTwo ?? '#2D2B34' }}
        />
        <CommonBlockInfo name="Популярные" />
        <CommonBlockInfo blockStyle={{ backgroundColor: serverColorBackgroundTwo ?? '#2D2B34' }} name="Дефолт" />
        <CommonBlockInfoWithImage name="Наши сборки" />
      </HeaderAndFooter>
    </>
  );
};

export default MainPage;
