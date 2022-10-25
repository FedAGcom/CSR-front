import React, { useState, useEffect } from 'react';
import { ButtonBasic, InputBasic, ModalBasic } from '../index';
import { ClipIcon, DoneIcon } from '../svg';

export interface ITradeLinkModalProps {
  onClose: () => void;
  open: boolean;
}

export const TradeLinkModal: React.FC<ITradeLinkModalProps> = ({ onClose, open }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSaved, setSavedLink] = useState<boolean>(false);

  const saveTradeLink = () => {
    if (inputValue.trim() !== '') setSavedLink(true);
  };

  const handleClose = () => {
    onClose();
    setInputValue('');
  };

  useEffect(() => {
    setSavedLink(false);
  }, [inputValue]);

  return (
    <ModalBasic open={open} onClose={handleClose}>
      <div className="trade-wrapper">
        <div className="trade-title">
          <p>Трейд ссылка</p> <ClipIcon />
        </div>

        <div className="trade-subtitle">
          <p>
            Для передачи выигрыша нам требуется ваша трейд ссылка. <a>Где её найти?</a>
          </p>
        </div>

        <div className="trade-trade">
          <ClipIcon /> <p>Трейд ссылка</p>
        </div>

        <div className="trade-input">
          <InputBasic
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Вставьте вашу трейд-ссылку"
          />
        </div>

        <div className="trade-btn">
          {isSaved ? (
            <ButtonBasic className="primary">
              <DoneIcon />
            </ButtonBasic>
          ) : (
            <ButtonBasic onClick={saveTradeLink} className="primary" style={{ width: '100%' }} disabled={!inputValue}>
              Сохранить ссылку
            </ButtonBasic>
          )}
        </div>
      </div>
    </ModalBasic>
  );
};
