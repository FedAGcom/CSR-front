import React from 'react';
import { ButtonBasic, InputBasic } from '../../BasicComponents';
import { useState } from 'react';

const balanceBtn = {
  width: '136px',
  height: '38px',
  borderRadius: '5px',
};

export const AdminBalance = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <p className="admin-balance__title">Выдача баланса</p>

      <div className="admin-balance__search-wrapper">
        <div className="admin-balance__search-inner">
          <p>Поиск</p>
          <div className="admin-balance__search">
            <InputBasic placeholder="Пользователь" style={{ width: '634px', height: '38px' }} />
            <ButtonBasic className="primary" style={balanceBtn}>
              Найти
            </ButtonBasic>
          </div>
        </div>
      </div>

      <div className="admin-balance__founded-wrapper">
        <div className="admin-balance__founded">
          <p style={{ width: '50px', textAlign: 'left' }}>11291</p>
          <p style={{ width: '170px' }}>Nickname</p>
          <p style={{ width: '200px' }}>vladis192@mail.ru</p>
          <p style={{ width: '70px' }}>3.900 ₽</p>
          <p className="admin-users__modal" style={{ width: '70px' }} onClick={() => setOpen(!isOpen)}>
            Пополнить
          </p>
        </div>

        {isOpen ? (
          <div className="admin-balance__add-money-wrapper">
            <p>Сумма пополнения</p>
            <div className="admin-balance__add-money">
              <InputBasic placeholder="Сумма" style={{ width: '335px', height: '38px' }} />
              <ButtonBasic className="primary" style={balanceBtn}>
                Пополнить
              </ButtonBasic>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
