import React from 'react';
import { InputLabel } from '../../Header/LocalizationModal/InputLabel';
import { ButtonBasic, InputBasic, ModalUsersAdmin } from '../../index';

interface IAdminUsersModal {
  open: boolean;
  onClose: () => void;
  id: number;
  name: string;
}

interface ICommonAdminInputProps {
  name?: string;
  children: React.ReactNode;
}

const adminBtn = {
  width: '212px',
  height: '38px',
  borderRadius: '5px',
};

const adminCloseBtn = {
  width: '160px',
  height: '38px',
  borderRadius: '5px',
};

const CommonBodySection: React.FC<ICommonAdminInputProps> = ({ children }) => {
  return (
    <div className="aum__body">
      <div className="aum__body-wrapper">{children}</div>
    </div>
  );
};

const CommonAdminInput: React.FC<ICommonAdminInputProps> = ({ name, children }) => {
  return (
    <div className="aum__input">
      <InputLabel className="aum__label">{name}</InputLabel>
      {children}
    </div>
  );
};

export const AdminUsersModal: React.FC<IAdminUsersModal> = ({ open, onClose, id, name }) => {
  return (
    <ModalUsersAdmin open={open} onClose={onClose} id={id} name={name}>
      <CommonBodySection>
        <CommonAdminInput name="Ник">
          <InputBasic />
        </CommonAdminInput>

        <CommonAdminInput name="Почта">
          <InputBasic />
        </CommonAdminInput>

        <div className="aum__input">
          <InputLabel className="aum__label">
            Трейд ссылка <span className="aum__label-trade">Есть</span>
          </InputLabel>
          <InputBasic />
        </div>

        <CommonAdminInput name="Баланс">
          <div className="aum__balance">
            <span>3.900 ₽</span> <p>Пополнить</p>
          </div>
        </CommonAdminInput>
      </CommonBodySection>

      <CommonBodySection>
        <CommonAdminInput name="Действия">
          <div className="aum__actions">
            <ButtonBasic className="outlined" style={adminBtn}>
              Заблокировать
            </ButtonBasic>
            <ButtonBasic className="outlined" style={adminBtn}>
              Забл. баланс
            </ButtonBasic>
            <ButtonBasic className="outlined" style={adminBtn}>
              Действие 3
            </ButtonBasic>
          </div>
        </CommonAdminInput>
      </CommonBodySection>

      <div className="aum__footer">
        <ButtonBasic className="primary" onClick={onClose} style={adminCloseBtn}>
          Закрыть
        </ButtonBasic>
      </div>
    </ModalUsersAdmin>
  );
};
