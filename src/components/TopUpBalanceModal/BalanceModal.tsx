import React, { useState } from 'react';
import { ButtonBasic, InputBasic, ModalBasic, RadioBtn } from '../index';
import { WaletIcon } from '../svg';
import { ITradeLinkModalProps } from '../TradeLinkModal/TradeLinkModal';
import { depositAPI } from '../../store/slices/depositSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import userSlice, { checkPromo, clearMessage } from '../../store/slices/userSlice';

export const BalanceModal: React.FC<ITradeLinkModalProps> = ({ onClose, open }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSucces, setIsSucces] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const {promoMessage} = useAppSelector(state => state.userSlice)

  const [topUpOptions] = useState([
    {name: 'skinify', url: '/api/v1/create-deposit', text: 'Пополнить CS:GO скинами (Skinify)'}, 
    {name: 'paypalych', url: '', text: 'Paypalych'},
  ]);

  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [skip, setSkip] = useState(true);
  const { data } = depositAPI.useGetCreateDepositSkinifyLinkQuery( topUpOptions[selectedIdx].url, { skip });

  const handleClose = () => {
    onClose();
    setIsChecked(false);
    setInputValue('');
  };

  function checkHandler(index: number) {
    setSelectedIdx(index);
    if (skip) {
      setSkip(false);
    }
    setIsChecked(true);
  }

  const checkPromoHandler = () => {
    dispatch(checkPromo(inputValue))
    setIsSucces(true)
  }

  const handleSucces = () => {
    setIsSucces((prev) => !prev)
    onClose()
    dispatch(clearMessage(''))
  }
  console.log(isSucces)
  return (
    <>
    {!promoMessage ? <ModalBasic open={open} onClose={handleClose}>
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
          {
            topUpOptions.map((option, index) => {
              return (
                <div className="trade-radio" key={index}>
                  <RadioBtn
                    id={option.name}
                    checked={selectedIdx === index && isChecked}
                    onChange={() => checkHandler(index)}
                  />
                  <label htmlFor={`${option.name}`}>{option.text}</label>
                </div>
              )
            })
          }
        </div>

        <div className="trade-btn">
          <ButtonBasic 
            className="primary" 
            style={{ width: '100%' }} 
            disabled={!isChecked && !inputValue}
            onClick={() => {inputValue ? checkPromoHandler() : window.location.href = `${data?.link}`}}
          >
            Пополнить
          </ButtonBasic>
        </div>
      </div>
    </ModalBasic>
    :
    <ModalBasic open={isSucces} onClose={handleSucces}>
    <div style={{textAlign: 'center', fontSize: "2rem"}}>{promoMessage}</div>
    </ModalBasic>
    }
  </>
  );
};
