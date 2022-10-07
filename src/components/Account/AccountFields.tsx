import React from 'react';
import { ExitIcon, HeaderSteam } from '../svg';
import { ButtonBasic } from '../index';
import { caseImage } from '../images';

export const AccountHeaderField = () => {
  return (
    <div className="account-field__wrapper">
      <div className="account-field">
        <div className="account-avatar">
          <img src="https://pixmafia.ru/uploads/posts/2021-03/pixmafia.ru_1616753779-46.jpg" alt="" />
        </div>
        <div className="account-info">
          <div className="account-info__name">
            <p>sladko puknul</p> <HeaderSteam />
          </div>
          <div className="account-info__money">910 ₽</div>
        </div>
      </div>
      <div className="account-field" style={{ justifyContent: 'space-between' }}>
        <ButtonBasic className="primary">Пополнить баланс</ButtonBasic>
        <ButtonBasic className="outlined">Трейд ссылка</ButtonBasic>
        <div className="account-exit">
          <ExitIcon />
        </div>
      </div>
    </div>
  );
};

export const AccountCaseField = () => {
  return (
    <div className="account-case__wrapper">
      <div className="account-case account-case__item">
        <div className="account-case__common">
          <p className="account-case__title">Любимый кейс</p>
          <p className="account-case__desc">Нет любимого кейса</p>
          <ButtonBasic className="primary">Открыть</ButtonBasic>
        </div>

        <div className="account-case__img">
          <img src={caseImage} />
        </div>
      </div>
      <div className="account-case account-case__drop">
        <div className="account-case__common">
          <p className="account-case__title">Лучший дроп</p>
          <p className="account-case__desc">Пока нет лучшего дропа</p>
          <ButtonBasic className="primary">Открыть</ButtonBasic>
        </div>

        <div className="account-drop__img">{/* <img src={weapon} /> */}</div>
      </div>
    </div>
  );
};

export const AccountSoldItemsField = () => {
  return (
    <>
      <div className="account-field__wrapper">
        <p className="account-items__p">Предметы</p>
        <ButtonBasic className="disabled" disabled={true}>
          Продать все
        </ButtonBasic>
      </div>

      <div className="account-items">
        <div className="account-items__inner-wrapper">
          <p className="account-items__title">У вас нет предметов</p>
          <p className="account-items__subtitle">Пора начать открывать кейсы!</p>
          <ButtonBasic className="primary">Открыть кейсы</ButtonBasic>
        </div>
      </div>
    </>
  );
};
