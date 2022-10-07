import React, { useState } from 'react';
import { ButtonBasic, InputBasic, ModalBasic, RadioBtn } from '../index';
import { WaletIcon } from '../svg';
import { ITradeLinkModalProps } from '../TradeLinkModal/TradeLinkModal';

export const BalanceModal: React.FC<ITradeLinkModalProps> = ({ onClose, open }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [radioValue, setRadioValue] = useState('');
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleClose = () => {
    onClose();
    setChecked(false);
    setRadioValue('');
    setInputValue('');
  };

  return (
    <ModalBasic open={open} onClose={handleClose}>
      <div className="trade-wrapper">
        <div className="trade-title">
          <p>Пополнение баланса</p> <WaletIcon />
        </div>

        <div className="trade-subtitle">
          <p>На данный момент доступные следующие варианты пополнения баланса:</p>
        </div>

        <div className="trade-input">
          <InputBasic
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Промокод (необязательно)"
          />
        </div>

        <div className="trade-radio__wrapper">
          <div className="trade-radio">
            <RadioBtn
              value="SKINSBACK"
              id="SKINSBACK"
              checked={radioValue === 'SKINSBACK' ? true : false}
              onChange={(e) => {
                setRadioValue(e.target.value);
                setChecked(true);
              }}
            />
            <label htmlFor="SKINSBACK">Пополнить CS:GO скинами (SKINSBACK)</label>
          </div>

          <div className="trade-radio">
            <RadioBtn
              value="smth"
              id="smth"
              checked={radioValue === 'smth' ? true : false}
              onChange={(e) => {
                setRadioValue(e.target.value);
                setChecked(true);
              }}
            />
            <label htmlFor="smth">Пополнить CS:GO что-то еще</label>
          </div>
        </div>

        <div className="trade-btn">
          <ButtonBasic className="primary" style={{ width: '100%' }} disabled={!isChecked}>
            Пополнить
          </ButtonBasic>
        </div>
      </div>
    </ModalBasic>
  );
};
