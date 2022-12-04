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
import { fetchFavoritePack } from '../../store/slices/packSlice';

export const AccountHeaderField = () => {
  const [isTradeModalOpen, setTradeModalOpen] = useState<boolean>(false);
  const [isBalanceModalOpen, setBalanceModalOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const dispatch = useAppDispatch();

  const handleCloseTrade = () => {
    setTradeModalOpen(false);
  };

  const handleCloseBalance = () => {
    setBalanceModalOpen(false);
  };

  const handleExit = () => {
    Cookies.remove('AuthorizationCSRApp');
    dispatch(fetchUser());
  };

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
          <div className="account-info__money">{`${user.balance?.toLocaleString('ru')} ₽`}</div>
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
        <ButtonBasic className="primary" onClick={() => setBalanceModalOpen(true)}>
          Пополнить баланс
        </ButtonBasic>

        <TradeLinkModal open={isTradeModalOpen} onClose={handleCloseTrade} />
        <ButtonBasic className="outlined" onClick={() => setTradeModalOpen(true)}>
          Трейд ссылка
        </ButtonBasic>
        <div className="account-exit" onClick={handleExit}>
          <ExitIcon />
        </div>
      </div>
    </div>
  );
};

export const AccountCaseField = () => {
  const navigate = useNavigate()
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const dispatch = useAppDispatch()
  const {favoritePackId} = useAppSelector(state => state.userSlice)
  const {favoritePack} = useAppSelector(state => state.packSlice)

  useEffect(() => {
    dispatch(fetchFavoritePack(favoritePackId))
  }, [])

  return (
    <div className="account-case__wrapper">
      <div
        className="account-case account-case__item"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}
      >
        <div className="account-case__common">
          <p className="account-case__title">Любимый кейс</p>
          <p className="account-case__desc">{favoritePack && favoritePack?.title}</p>
          <ButtonBasic className="primary" onClick={() => navigate(`/open-case/${favoritePackId}`)}>Открыть</ButtonBasic>
        </div>

        <div className="account-case__img">
          <img src={favoritePack?.image} />
        </div>
      </div>
      <div
        className="account-case account-case__drop"
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}
      >
        <div className="account-case__common">
          <p className="account-case__title">Лучший дроп</p>
          <p className="account-case__desc">Пока нет лучшего дропа</p>
          <ButtonBasic className="primary">Открыть</ButtonBasic>
        </div>

        {/* <div className="account-drop__img"><img src={weapon} /></div> */}
      </div>
    </div>
  );
};

export const AccountSoldItemsField = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const [isSkinsModalOpen, setSkinsModalOpen] = useState<boolean>(false);
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const [items, setItems] = useState()

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
        <p className="account-items__p">Предметы</p>
        <div className="account__sold-btns">
          <ButtonBasic className="skins" onClick={() => setSkinsModalOpen(true)}>
            Вывести скины
          </ButtonBasic>
          <SkinsModal
            open={isSkinsModalOpen}
            onClose={() => setSkinsModalOpen(false)}
            style={{ padding: '30px', width: '790px' }}
          />

          <ButtonBasic className="disabled" disabled={true}>
            Продать все
          </ButtonBasic>
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
