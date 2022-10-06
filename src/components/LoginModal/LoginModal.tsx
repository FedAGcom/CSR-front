import React, { useState } from 'react';
import { CloseIcon, LogoFooter, HeaderSteam } from '../svg';
import { Checkbox, ButtonBasic } from '../index';

interface ILoginModal {
  show: boolean;
  onClose: React.MouseEventHandler;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModal: React.FC<ILoginModal> = ({ show, setShow, onClose }) => {
  const [confirmAge, setConfirmAge] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);

  function autoClose() {
    onClose;
    closeModal();
  }

  function closeModal() {
    setShow(false);
    setConfirmAge(false);
    setAgree(false);
  }

  return (
    <>
      {show ? (
        <div className="login-modal__wrapper" onClick={autoClose}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="login-modal__content">
              <div className="login-modal__close">
                <CloseIcon onClick={closeModal} />
              </div>

              <div className="login-modal__body">
                <LogoFooter />
                <p className="login-modal__text">
                  Для продолжения использования площадки, нам необходимо подтверждение следующего:
                </p>
                <div className="login-modal__checkbox">
                  <Checkbox value={confirmAge} onChange={() => setConfirmAge(!confirmAge)} />{' '}
                  <p>
                    Я соглашаюсь с <a href="#">политикой</a> площадки
                  </p>
                </div>
                <div className="login-modal__checkbox">
                  <Checkbox value={agree} onChange={() => setAgree(!agree)} /> <p>Мне больше 18 лет</p>
                </div>
              </div>

              <div className="login-modal__footer">
                <ButtonBasic className="primary" disabled={!confirmAge || !agree}>
                  <p>
                    <a href="https://store.steampowered.com/login">Войти через steam</a>
                  </p>{' '}
                  <HeaderSteam className={!confirmAge || !agree ? 'headerSteam:disabled' : 'headerSteam'} />
                </ButtonBasic>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
