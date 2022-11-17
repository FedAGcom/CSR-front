import { Button, SxProps } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import { ArrowBottom, ArrowMain, ArrowTop, HeaderSteam } from '../components/svg';
import {
  CaseContent,
  CaseAuthBanner,
  PrizeModal,
  SellButton,
  RouletteItem,
  TryAgainButton,
  audio,
} from '../components/OpenCase';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderAndFooter, LoginModal, PrizeBlock } from '../components';
import { fetchPack } from '../store/slices/packSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchWinId } from '../store/slices/winSlice';
import { fetchUser } from '../store/slices/userSlice';

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
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { title, price, packItemsList } = useAppSelector((state) => state.packSlice);
  const { isAuth } = useAppSelector((state) => state.userSlice);
  const { winId } = useAppSelector((state) => state.winSlice);

  useEffect(() => {
    dispatch(fetchPack(id));
  }, []);

  useEffect(() => {
    dispatch(fetchUser());
  }, [winId]);

  const winPrizeIndex = (id: any) => {
    return packItemsList.findIndex((i) => i.id == id);
  };

  const reproductionArray = (array: any[] = [], length = 0) => [
    ...Array(length)
      .fill('_')
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...packItemsList,
    ...reproductionArray(packItemsList, packItemsList.length * 3),
    ...packItemsList,
    ...reproductionArray(packItemsList, packItemsList.length),
  ];

  const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: generateId(),
  }));

  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [start, setStart] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
    dispatch(fetchWinId(id));
  };

  const handleTryAgain = () => {
    setStart((prevState) => !prevState);
    setIsModal(false);
  };

  const handlePrizeDefined = () => {
    setIsModal(true);
    setIsActive(false);
  };

  const prizeIndex = packItemsList.length * 4 + winPrizeIndex(winId);

  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Container sx={{ maxWidth: '1148px', marginTop: '50px' }} maxWidth={false}>
          <div className="case-content__header">
            <h5 className="case-content__title">{title}</h5>
            <div className="case-content__back" onClick={() => navigate('/')}>
              <ArrowMain />
              Вернуться на Главную
            </div>
          </div>
          {isAuth ? (
            <div className="roulette-wrap">
              {isModal && (
                <PrizeModal
                  image={prizeList[prizeIndex].iconItemId}
                  type={prizeList[prizeIndex].type}
                  title={prizeList[prizeIndex].title}
                  class={prizeList[prizeIndex].rare}
                  id={prizeList[prizeIndex].id}
                />
              )}
              <RoulettePro
                soundWhileSpinning={audio}
                prizes={prizeList}
                prizeIndex={prizeIndex}
                start={start}
                spinningTime={5}
                type={'horizontal'}
                onPrizeDefined={handlePrizeDefined}
                options={{ stopInCenter: true, withoutAnimation: true }}
                defaultDesignOptions={{ hideCenterDelimiter: true }}
                //@ts-expect-error заглушка для рулетки
                prizeItemRenderFunction={(i) => <RouletteItem image={i.iconItemId} class={i.rare} />} //todo
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
              <Button disabled={isActive} sx={button} onClick={handleStart}>{`Открыть кейс за ${price} ₽`}</Button>
            )
          ) : (
            <>
              <LoginModal show={show} onClose={() => setShow(false)} />
              <Button sx={steamBtn} onClick={() => setShow(true)}>
                Войти через steam
                <HeaderSteam />
              </Button>
            </>
          )}
          <CaseContent />
        </Container>
      </HeaderAndFooter>
    </>
  );
};
