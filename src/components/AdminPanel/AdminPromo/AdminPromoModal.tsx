import { Box } from '@mui/system';
import React from 'react';
import { InputLabel } from '../../Header/LocalizationModal/InputLabel';
import { ButtonBasic, InputBasic, ModalPromo, RadioBtn } from '../../index';

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

export const AdminPromoModal: React.FC<IAdminUsersModal> = ({ open, onClose, id, name }) => {
  return (
    <ModalPromo open={open} onClose={onClose} id={id} name={name}>
      <CommonBodySection>
        <CommonAdminInput name="Промокод">
          <InputBasic placeholder="Любое слово и цифры" />
        </CommonAdminInput>
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <CommonAdminInput name="Количество использований">
            <InputBasic placeholder="Только число" />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '14px' }}>
              <RadioBtn sx={{ mr: '5px' }} />
              <div>Неограниченое кол-во</div>
            </Box>
          </CommonAdminInput>

          <CommonAdminInput name="Валиден до">
            <Box sx={{ display: 'flex', gap: '11px' }}>
              <InputBasic placeholder="День" />
              <InputBasic placeholder="Месяц" />
              <InputBasic placeholder="Год" />
            </Box>
          </CommonAdminInput>
        </Box>
      </CommonBodySection>

      <CommonBodySection>
        <p>Что дает промокод</p>
        <p>Можно выбрать несколько и оставить поля свободными</p>
        <CommonAdminInput name="Баланс (сумма капает на баланс)">
          <InputBasic sx={{ width: '325px' }} placeholder="Сумма получения" />
        </CommonAdminInput>

        <Box sx={{ display: 'flex', gap: '30px' }}>
          <CommonAdminInput name="Кейс (можно выбрать 1 вариант)">
            <InputBasic sx={{ width: '325px' }} disabled={true} />
          </CommonAdminInput>
          <CommonAdminInput name="Количество кейсов">
            <InputBasic sx={{ width: '325px' }} disabled={true} placeholder="Число кейсов, если больше одного" />
          </CommonAdminInput>
        </Box>
      </CommonBodySection>

      <div className="aum__footer">
        <ButtonBasic className="primary" onClick={onClose} style={adminCloseBtn}>
          Создать
        </ButtonBasic>
      </div>
    </ModalPromo>
  );
};
