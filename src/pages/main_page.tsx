import { Banner, CommonBlockInfo, CommonBlockInfoWithImage, HeaderAndFooter, PrizeBlock } from '../components';
import { useSelector } from 'react-redux';
import { getColorBackgroundOne, getColorBackgroundTwo } from '../store/selectors/getSettingsAppearance';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const serverColorBackgroundTwo = useSelector(getColorBackgroundTwo);
  const {t} = useTranslation()


  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Banner />
        <CommonBlockInfo
          name={t('mainPageCommonBlockInfo.hotOffers')}
          pStyle={{ borderBottom: 'none' }}
          blockStyle={{ backgroundColor: serverColorBackgroundTwo ?? '#2D2B34' }}
        />
        <CommonBlockInfo  name={t('mainPageCommonBlockInfo.popular')} />
        <CommonBlockInfo blockStyle={{ backgroundColor: serverColorBackgroundTwo ?? '#2D2B34' }}  name={t('mainPageCommonBlockInfo.default')} />
        <CommonBlockInfoWithImage  name={t('mainPageCommonBlockInfo.ourBuilds')} />
      </HeaderAndFooter>
    </>
  );
};

export default MainPage;
