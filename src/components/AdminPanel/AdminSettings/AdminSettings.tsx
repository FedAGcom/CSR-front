import React, { useState } from 'react';
import { InputLabel } from '../../Header/LocalizationModal/InputLabel';
import { ButtonBasic, InputBasic } from '../../index';
import { adminCloseBtn } from '../AdminUsers/AdminUsersModal';
import { AdminSettingsModal } from './AdminSettingsModal';

interface ICommonProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
}

interface ICommonBtnProps {
  className?: string;
  onClick: React.MouseEventHandler;
  btnName: string;
}

interface ICommonBlockProps {
  name: string;
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  btnName: string;
  btnclassName?: string;
}

const labelStyle = {
  fontSize: '16px',
  lineHeight: '19px',
  paddingBottom: '5px',
};

const inputStyle = {
  width: '350px',
  height: '38px',
  background: '#1C1B21',
  border: ' 1px solid #FFFFFF',
  borderRadius: '5px',
};

const CommonInput: React.FC<ICommonProps> = ({ name, value, onChange }) => {
  return (
    <div className="admin-settings__block">
      <InputLabel sx={labelStyle}>{name}</InputLabel>
      <InputBasic value={value} onChange={onChange} sx={inputStyle} />
    </div>
  );
};

export const CommonBtn: React.FC<ICommonBtnProps> = ({ onClick, btnName, className = 'primary' }) => {
  return (
    <ButtonBasic className={className} sx={adminCloseBtn} style={{ marginTop: '10px' }} onClick={onClick}>
      {btnName}
    </ButtonBasic>
  );
};

const CommonBlock: React.FC<ICommonBlockProps> = ({ children, name, className, onClick, btnName, btnclassName }) => {
  return (
    <div className={className}>
      <p>{name}</p>
      {children}
      <CommonBtn btnName={btnName} onClick={onClick} className={btnclassName} />
    </div>
  );
};

export const AdminSettings = () => {
  const [oldPass, setOldPass] = useState<string>('');
  const [newPass, setNewPass] = useState<string>('');
  const [repeatNewPass, setRepeatNewPass] = useState<string>('');

  const [isModalPass, setOpenModalPass] = useState<boolean>(false);
  const [isModalEmail, setOpenModalEmail] = useState<boolean>(false);

  const [oldEmail, setOldEmail] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');

  return (
    <>
      <p className="admin-balance__title">Настройки</p>

      <div className="admin-settings__wrapper">
        <CommonBlock
          className="admin-settings__common admin-settings__password"
          name="Смена пароля"
          onClick={() => setOpenModalPass(true)}
          btnName="Обновить"
        >
          <CommonInput
            name="Старый пароль"
            value={oldPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPass(e.target.value)}
          />

          <CommonInput
            name="Новый пароль"
            value={newPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPass(e.target.value)}
          />

          <CommonInput
            name="Повторить пароль"
            value={repeatNewPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatNewPass(e.target.value)}
          />

          <AdminSettingsModal
            open={isModalPass}
            onClose={() => setOpenModalPass(false)}
            title="Пароль обновлён"
            subtitle="Смена пароля прошла успешна. Проверьте почту для подтверждения изменений."
          >
            <CommonBtn btnName="Закрыть" onClick={() => setOpenModalPass(false)} />
          </AdminSettingsModal>
        </CommonBlock>

        <CommonBlock
          name="Смена email"
          className="admin-settings__common admin-settings__email"
          btnName="Обновить"
          onClick={() => setOpenModalEmail(true)}
        >
          <CommonInput
            name="Старый email"
            value={oldEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldEmail(e.target.value)}
          />
          <CommonInput
            name="Новый email"
            value={newEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
          />

          <AdminSettingsModal
            open={isModalEmail}
            onClose={() => setOpenModalEmail(false)}
            title="Почта обновлена"
            subtitle="Проверьте старую почту и подтвердите переход на новую."
          >
            <CommonBtn btnName="Закрыть" onClick={() => setOpenModalEmail(false)} />
          </AdminSettingsModal>
        </CommonBlock>
      </div>
    </>
  );
};
