import { Button, SxProps } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import { ArrowBottom, ArrowMain, ArrowTop, HeaderSteam } from '../components/svg';
import {CaseContent, CaseAuthBanner, PrizeModal, SellButton, RouletteItem, TryAgainButton, audio, CaseRefillBanner} from '../components/OpenCase';
import { useNavigate, useParams } from 'react-router-dom';
import { BalanceModal, HeaderAndFooter, LoginModal, PrizeBlock } from '../components';
import { fetchPack } from '../store/slices/packSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchWinId } from '../store/slices/winSlice';
import { fetchUser } from '../store/slices/userSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import $api from '../api';

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
  const [isBalanceModalOpen, setBalanceModalOpen] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { title, price, packItemsList } = useAppSelector((state) => state.packSlice);
  const { isAuth, user } = useAppSelector((state) => state.userSlice);
  const { winId } = useAppSelector((state) => state.winSlice);
  const theme = useTheme();
  const matchesUpLg = useMediaQuery(theme.breakpoints.up('lg'));

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

  const handleCloseBalance = () => {
    setBalanceModalOpen(false);
  };

  const prizeIndex = packItemsList.length * 4 + winPrizeIndex(winId);

  const fetchSellItemById = async () => {
    await $api.get<any>(`http://csgofarm.online:8080/api/v1/itemsWon/sellAnItem/${winId}`);
    dispatch(fetchUser())
  }

  return (
    <>
    <HeaderAndFooter>
      <PrizeBlock />
      <Container sx={{ maxWidth: '1148px', marginTop: '50px' }} maxWidth={false}>
        <div className="case-content__header">
          <h5 className="case-content__title">{title ? title : 'Кейс'}</h5>
          {matchesUpLg && <div className="case-content__back" onClick={() => navigate('/')}>
            <ArrowMain />
            Вернуться на Главную
          </div>}
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
            {price < user.balance ?
              <>
              <RoulettePro
              soundWhileSpinning={audio}
              prizes={prizeList}
              prizeIndex={prizeIndex}
              start={start}
              spinningTime={5}
              type={'horizontal'}
              onPrizeDefined={handlePrizeDefined}
              options={{ stopInCenter: false, withoutAnimation: false }}
              defaultDesignOptions={{ hideCenterDelimiter: false }}
              //@ts-expect-error заглушка для рулетки
              prizeItemRenderFunction={(i) => <RouletteItem image={i.iconItemId} class={i.rare} />} //todo
            />
            <ArrowTop className="arrow-top" />
            <ArrowBottom className="arrow-bottom" />
            </>
            :
            <CaseRefillBanner price={price} balance={user.balance}/>
            }
          </div>
        ) : (
          <CaseAuthBanner />
        )}
        {isModal && 
        <div className="btn-block-wrapper">
          <SellButton onClick={() => {fetchSellItemById(); handleTryAgain()}}/>
          <TryAgainButton onClick={handleTryAgain} />
        </div>
        }
        {isAuth && !isModal && price < user.balance &&<Button disabled={isActive} sx={button} onClick={handleStart}>{`Открыть кейс за ${price} ₽`}</Button>
        // <Button disabled={price > user.balance ? true : isActive} sx={button} onClick={handleStart}>{`Открыть кейс за ${price} ₽`}</Button>
        }
        {
        isBalanceModalOpen ?
        <BalanceModal 
          open={isBalanceModalOpen} 
          onClose={handleCloseBalance} 
        /> :
        null
      }
        {price > user.balance && <Button sx={button} onClick={() => setBalanceModalOpen(true)}>Пополнить баланс</Button>}
        {!isAuth && <>
          <LoginModal show={show} onClose={() => setShow(false)} />
          <Button sx={steamBtn} onClick={() => setShow(true)}>
            Войти через steam
            <HeaderSteam />
          </Button>
        </>
        }
        <CaseContent />
      </Container>
    </HeaderAndFooter>
  </>
  );
};
