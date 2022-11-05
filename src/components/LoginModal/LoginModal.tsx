import React, { useState } from 'react';
import { LogoFooter, HeaderSteam } from '../svg';
import { Checkbox, ButtonBasic, ModalBasic } from '../index';
import { usePostLoginQuery } from '../../store/slices/loginSlice';

interface ILoginModal {
  show: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<ILoginModal> = ({ show, onClose }) => {
  const [confirmAge, setConfirmAge] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);
  const { data } = usePostLoginQuery('');

  const redirectLink = data.link;

  function closeModal() {
    onClose();
    setConfirmAge(false);
    setAgree(false);
  }

  return (
    <>
      <ModalBasic open={show} onClose={closeModal}>
        <div className="login-modal__content">
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
                <a href={`${redirectLink}`}>Войти через steam</a>
              </p>
              <HeaderSteam className={!confirmAge || !agree ? 'headerSteam:disabled' : 'headerSteam'} />
            </ButtonBasic>
          </div>
        </div>
      </ModalBasic>
    </>
  );
};
