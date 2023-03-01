import React, { useEffect, useState } from 'react';
import { ExitIcon, HeaderSteam } from '../svg';
import { BalanceModal, ButtonBasic, TradeLinkModal } from '../index';
import { SkinsModal } from './SkinsModal';
// import { weapon, caseImage } from '../images';
import { CaseItem } from '../CaseItem/CaseItem';
import { caseData } from '../../mocks';
import { useAppDispatch, useAppSelector } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getColorBackgroundOne } from '../../store/selectors/getSettingsAppearance';
import Cookies from 'js-cookie';
import { fetchUser } from '../../store/slices/userSlice';
import $api from '../../api';
import { fetchFavoritePack, fetchItemById } from '../../store/slices/packSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { rubToUsd } from '../../translations/rubToUsd';

export const AccountHeaderField = () => {
  const currency = useAppSelector(state => state.userSlice.currency);
  const [isTradeModalOpen, setTradeModalOpen] = useState<boolean>(false);
  const [isBalanceModalOpen, setBalanceModalOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const handleCloseTrade = () => {
    setTradeModalOpen(false);
  };

  const handleCloseBalance = () => {
    setBalanceModalOpen(false);
  };

  const handleExit = () => {
    Cookies.remove('AuthorizationCSRApp');
    navigate('/')
    dispatch(fetchUser());
  };

  const sign = currency === 'USD' ? "$" : '₽';

  return (
    <div className="account-field__wrapper" style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}>
      <div className="account-field">
        <div className="account-avatar">
          <img src={user.steamAvatarMedium} alt="" />
        </div>
        <div className="account-info">
          <div className="account-info__name">
            <p>{user.nickNameSteam}</p> <HeaderSteam />
          </div>
          <div className="account-info__money">{`${rubToUsd(user.balance?.toLocaleString('ru'), currency)} ${sign}`}</div>
        </div>
        {user.role === 'admin' && (
          <ButtonBasic sx={{ marginLeft: '4rem' }} className="primary" onClick={() => navigate('/admin')}>
            Админ-панель
          </ButtonBasic>
        )}
      </div>
      <div className="account-field" style={{ justifyContent: 'space-between' }}>
        {
          isBalanceModalOpen ?
          <BalanceModal 
            open={isBalanceModalOpen} 
            onClose={handleCloseBalance} 
          /> :
          null
        }
        {matchesUpLg &&   <ButtonBasic className="primary" onClick={() => setBalanceModalOpen(true)}>
          Пополнить баланс
        </ButtonBasic> }
      {matchesDownLg &&  <ButtonBasic className="primary" onClick={() => setBalanceModalOpen(true)} style={{marginBottom: '55px'}}>
          Пополнить баланс
        </ButtonBasic> }

        <TradeLinkModal open={isTradeModalOpen} onClose={handleCloseTrade} />
        {matchesUpLg &&    <ButtonBasic className="outlined" onClick={() => setTradeModalOpen(true)}>
          Трейд ссылка
        </ButtonBasic> } 
        {matchesDownLg &&   <ButtonBasic className="outlined" onClick={() => setTradeModalOpen(true)} style={{marginBottom: '55px'}}>
          Трейд ссылка
        </ButtonBasic> }
        {matchesUpLg &&  <div className="account-exit" onClick={handleExit}>
          <ExitIcon /> 
        </div>}   
        {matchesDownLg && <div className="account-exit" onClick={handleExit}  style={{marginLeft: '55px'}}>
          <ExitIcon /> 
        </div>}
      </div>
    </div>
  );
};

export const AccountCaseField = () => {
  const navigate = useNavigate()
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const dispatch = useAppDispatch()
  const {favoritePackId, bestItemId} = useAppSelector(state => state.userSlice)
  const {favoritePack, bestItemIdAndPrice} = useAppSelector(state => state.packSlice)
  const theme = useTheme();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    dispatch(fetchFavoritePack(favoritePackId))
    dispatch(fetchItemById(bestItemId))
  }, [favoritePackId])

  return (
    <div className="account-case__wrapper">
     {!matchesDownLg && <div
        className="account-case account-case__item"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}
      >
       <div className="account-case__common">
          <p className="account-case__title">Любимый кейс</p>
          <p className="account-case__desc">{favoritePack.title ? favoritePack.title : 'Нет любимого кейса'}</p>
          <ButtonBasic className="primary" onClick={() => navigate(favoritePackId ? `/open-case/${favoritePackId}` : '/')}>Открыть</ButtonBasic>
        </div>

        <div className="account-case__img">
          <img src={favoritePack?.image} />
        </div>
      </div> }
      {matchesDownLg && <div
        className="account-case account-case__item"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A', width: '100%' }}
      >
       <div className="account-case__common">
          <p className="account-case__title">Любимый кейс</p>
          <p className="account-case__desc">{favoritePack.title ? favoritePack.title : 'Нет любимого кейса'}</p>
          <ButtonBasic className="primary" onClick={() => navigate(favoritePackId ? `/open-case/${favoritePackId}` : '/')}>Открыть</ButtonBasic>
        </div>

        <div className="account-case__img">
          <img src={favoritePack?.image} />
        </div>
      </div> }
      {matchesDownLg &&  <div
        className="account-case account-case__drop"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A', width: '100%' }}
      >
        <div className="account-case__common">
          <p className="account-case__title">Лучший дроп</p>
          <p className="account-case__desc">{bestItemIdAndPrice.title ? bestItemIdAndPrice.title : "Пока нет лучшего дропа"}</p>
          <ButtonBasic className="primary" onClick={() => navigate('/')}>Открыть</ButtonBasic>
          {bestItemIdAndPrice && <img className="account-drop__img" src={bestItemIdAndPrice.iconItemId} />}
        </div>
      </div>}
     {!matchesDownLg &&  <div
        className="account-case account-case__drop"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}
      >
        <div className="account-case__common">
          <p className="account-case__title">Лучший дроп</p>
          <p className="account-case__desc">{bestItemIdAndPrice.title ? bestItemIdAndPrice.title : "Пока нет лучшего дропа"}</p>
          <ButtonBasic className="primary" onClick={() => navigate('/')}>Открыть</ButtonBasic>
          {bestItemIdAndPrice && <img className="account-drop__img" src={bestItemIdAndPrice.iconItemId} />}
        </div>
      </div>}
    </div>
  );
};

export const AccountSoldItemsField = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const [isSkinsModalOpen, setSkinsModalOpen] = useState<boolean>(false);
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const [items, setItems] = useState()
  const theme = useTheme();
  const matchesDownSm = useMediaQuery(theme.breakpoints.down('sm'));


  const fetchItems = async () => {
    const { data } = await $api.get<any>(`http://csgofarm.online/api/v1/items`);
    let newItems = []
    newItems = data.content
    setItems(newItems)   
    
}

const accItems = (items : any, arrId : any) => {
  const result = []
  for(let i = 0; i < arrId?.length; i++) {
    for(let j = 0; j < items?.length; j++) {
      if(arrId[i] == items[j].id) {
      result.push(items[j])
      }
    }
  }
  return result
}

useEffect(() => {
  fetchItems()
}, [])

  return (
    <>
      <div className="account-field__wrapper" style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}>
      {!matchesDownSm &&  <p className="account-items__p">Предметы</p>}
      {matchesDownSm &&  <p className="account-items__p" style={{marginBottom: '55px'}}>Предметы</p>}
        <div className="account__sold-btns">
        {!matchesDownSm && <ButtonBasic className="skins" onClick={() => setSkinsModalOpen(true)}>
            Вывести скины
          </ButtonBasic> }
         {matchesDownSm && <ButtonBasic className="skins" onClick={() => setSkinsModalOpen(true)} style={{marginBottom: '55px'}}>
            Вывести скины
          </ButtonBasic> }
          <SkinsModal
            open={isSkinsModalOpen}
            onClose={() => setSkinsModalOpen(false)}
            style={{ padding: '30px', width: '790px' }}
          />

{!matchesDownSm &&   <ButtonBasic className="disabled" disabled={true}>
            Продать все
          </ButtonBasic> }
          {matchesDownSm &&   <ButtonBasic className="disabled" disabled={true} style={{marginBottom: '55px'}}>
            Продать все
          </ButtonBasic> }
        </div>
      </div>

      {!caseData ? (
        <div className="account-items">
          <div className="account-items__inner-wrapper">
            <p className="account-items__title">У вас нет предметов</p>
            <p className="account-items__subtitle">Пора начать открывать кейсы!</p>
            <ButtonBasic className="primary">Открыть кейсы</ButtonBasic>
          </div>
        </div>
      ) : (
        <div className="account-items-content">
          {accItems(items, user?.itemsIdActiveAll).map((i) => (
            <CaseItem
              key={Math.random()}
              id={i.id}
              class={i.rare}
              image={i.iconItemId}
              type={i.type}
              title={i.title}
              price={i.price}
              disabled={false}
              content
            />
          ))}
        </div>
      )}
    </>
  );
};
