import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { createPromo } from '../../../store/slices/userSlice';
import { InputLabel } from '../../Header/LocalizationModal/InputLabel';
import { ButtonBasic, InputBasic, ModalPromo, RadioBtn } from '../../index';

interface IAdminUsersModal {
  open: boolean;
  onClose: () => void;
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

export const AdminPromoModal: React.FC<IAdminUsersModal> = ({ open, onClose, name }) => {
  const [promoName, setPromoName] = useState<string>('')
  const [promoCount, setPromoCount] = useState<string>('')
  const [promoDay, setPromoDay] = useState<string>('')
  const [promoMonth, setPromoMonth] = useState<string>('')
  const [promoYear, setPromoYear] = useState<string>('')
  const [promoAmount, setPromoAmount] = useState<string>('')
  const dispatch = useAppDispatch()
  
  const obj = {
    amount: promoCount,
    coins: promoAmount,
    expireDate: `${promoYear}-${promoMonth}-${promoDay}`,
    promoCodeName: promoName,
  }

  const handleCreatePromo = () => {
    dispatch(createPromo(obj))
  }

  console.log(obj)

  return (
    <ModalPromo open={open} onClose={onClose} name={promoName}>
      <CommonBodySection>
        <CommonAdminInput name="Промокод">
          <InputBasic onChange={(e) => setPromoName(e.target.value)} placeholder="Любое слово или цифры" />
        </CommonAdminInput>
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <CommonAdminInput name="Количество использований">
            <InputBasic value={promoCount} onChange={(e) => setPromoCount(e.target.value)} placeholder="Только число" />
            {/* <Box sx={{ display: 'flex', alignItems: 'center', mt: '14px' }}>
              <RadioBtn sx={{ mr: '5px' }} />
              <div>Неограниченое кол-во</div>
            </Box> */}
          </CommonAdminInput>

          <CommonAdminInput name="Валиден до">
            <Box sx={{ display: 'flex', gap: '11px' }}>
              <InputBasic value={promoDay} onChange={(e) => setPromoDay(e.target.value)} placeholder="День" />
              <InputBasic value={promoMonth} onChange={(e) => setPromoMonth(e.target.value)} placeholder="Месяц" />
              <InputBasic value={promoYear} onChange={(e) => setPromoYear(e.target.value)} placeholder="Год" />
            </Box>
          </CommonAdminInput>
        </Box>
      </CommonBodySection>

      <CommonBodySection>
        <p>Что дает промокод</p>
        {/* <p>Можно выбрать несколько и оставить поля свободными</p> */}
        <CommonAdminInput name="Баланс (сумма капает на баланс)">
          <InputBasic onChange={(e) => setPromoAmount(e.target.value)} sx={{ width: '325px' }} placeholder="Сумма получения" />
        </CommonAdminInput>

        {/* <Box sx={{ display: 'flex', gap: '30px' }}>
          <CommonAdminInput name="Кейс (можно выбрать 1 вариант)">
            <InputBasic sx={{ width: '325px' }} disabled={true} />
          </CommonAdminInput>
          <CommonAdminInput name="Количество кейсов">
            <InputBasic sx={{ width: '325px' }} disabled={true} placeholder="Число кейсов, если больше одного" />
          </CommonAdminInput>
        </Box> */}
      </CommonBodySection>

      <div className="aum__footer">
        <ButtonBasic className="primary" onClick={() => {onClose(); handleCreatePromo()}} style={adminCloseBtn}>
          Создать
        </ButtonBasic>
      </div>
    </ModalPromo>
  );
};
