import { Button, SxProps } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import RoulettePro from 'react-roulette-pro';
import { caseData } from '../mocks/open-case';
import 'react-roulette-pro/dist/index.css';
import { ArrowBottom, ArrowMain, ArrowTop, HeaderSteam } from '../components/svg';
import { CaseContent } from '../components/OpenCase/CaseContent/CaseContent';
import { CaseAuthBanner } from '../components/OpenCase/CaseAuthBanner/CaseAuthBanner';
import { PrizeModal } from '../components/OpenCase/PrizeModal/PrizeModal';
import { useNavigate } from 'react-router-dom';
import { SellButton } from '../components/OpenCase/SellButton/SellButton';
import { RouletteItem } from '../components/OpenCase/RouletteItem/RouletteItem';
import { TryAgainButton } from '../components/OpenCase/TryAgainButton/TryAgainButton';
import { HeaderAndFooter, PrizeBlock } from '../components';

const button: SxProps = {
  margin: '47px auto',
  display: 'block',
  width: '252px',
  height: '54px',
  background: '#B81034',
  boxShadow: '0px 0px 10px #BE2E4D',
  borderRadius: '10px',
  fontFamily: 'Gilroy',
  textTransform: 'initial',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '22px',
  color: '#FFFFFF',
  '&:hover': {
    textDecoration: 'initial',
    backgroundColor: '#D2002D',
    boxShadow: 'none',
  },
  '&:disabled': {
    textDecoration: 'initial',
    background: '#3D161E',
    boxShadow: '0px 0px 10px #17090C',
    color: '#FFFFFF',
  },
};

const steamBtn: SxProps = {
  display: 'flex',
  margin: '47px auto',
  gap: '10px',
  width: '248px',
  height: '52px',
  color: '#FFFFFF',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '20px',
  background: '#B81034',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#D2002D',
    boxShadow: 'none',
  },
};

export const OpenCase = () => {
  const [winPrizeIndex, setWinPrizeIndex] = useState(25);

  const reproductionArray = (array: any[] = [], length = 0) => [
    ...Array(length)
      .fill('_')
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...caseData,
    ...reproductionArray(caseData, caseData.length * 3),
    ...caseData,
    ...reproductionArray(caseData, caseData.length),
  ];

  const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
  }));

  const [isAuth, setIsAuth] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [start, setStart] = useState(false);

  const navigate = useNavigate();

  const auth = () => {
    setIsAuth((prevState) => !prevState);
  };

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  };

  const handleTryAgain = () => {
    setStart((prevState) => !prevState);
    setIsModal(false);
    setWinPrizeIndex((prev) => prev + 1);
  };

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳');
    setIsModal(true);
    setIsActive(false);
  };

  const prizeIndex = caseData.length * 4 + winPrizeIndex;

  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Container sx={{ maxWidth: '1148px', marginTop: '50px' }} maxWidth={false}>
          <div className="case-content__header">
            <h5 className="case-content__title">Мясной кейс</h5>
            <div className="case-content__back" onClick={() => navigate('/')}>
              <ArrowMain />
              Вернуться на Главную
            </div>
          </div>
          {isAuth ? (
            <div className="roulette-wrap">
              {isModal && (
                <PrizeModal
                  image={prizeList[prizeIndex].image}
                  type={prizeList[prizeIndex].type}
                  title={prizeList[prizeIndex].title}
                  class={prizeList[prizeIndex].class}
                  id={prizeList[prizeIndex].id}
                />
              )}
              <RoulettePro
                prizes={prizeList}
                prizeIndex={prizeIndex}
                start={start}
                spinningTime={7}
                type={'horizontal'}
                onPrizeDefined={handlePrizeDefined}
                options={{ stopInCenter: true, withoutAnimation: true }}
                defaultDesignOptions={{ hideCenterDelimiter: true }}
                prizeItemRenderFunction={(i) => <RouletteItem image={i.image} class={i.class} />}
              />
              <ArrowTop className="arrow-top" />
              <ArrowBottom className="arrow-bottom" />
            </div>
          ) : (
            <CaseAuthBanner />
          )}
          {isAuth ? (
            isModal ? (
              <div className="btn-block-wrapper">
                <SellButton />
                <TryAgainButton onClick={handleTryAgain} />
              </div>
            ) : (
              <Button disabled={isActive} sx={button} onClick={handleStart}>
                Открыть кейс за 299 ₽
              </Button>
            )
          ) : (
            <Button sx={steamBtn} onClick={auth}>
              Войти через steam
              <HeaderSteam />
            </Button>
          )}
          <CaseContent />
        </Container>
      </HeaderAndFooter>
    </>
  );
};
