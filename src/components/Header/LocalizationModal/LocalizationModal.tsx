import { FC } from 'react';
import { Box, MenuItem } from '@mui/material';
import { ButtonBasic } from '../../../components';
import { ModalBasic } from '../../../components';
import { InputLabel } from './InputLabel';
import Select from './Select';

type TLocalizationModalProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const LocalizationModal: FC<TLocalizationModalProps> = ({ handleClose, isOpen }) => {
  const handleSaveButton = () => {
    handleClose();
    console.log('save settings');
  };

  return (
    <ModalBasic open={isOpen} onClose={handleClose}>
      <>
      <Box className="localization__title">Обновить интерфейс платформы</Box>
      <Box className="localization__subtitle">Выберите подходящий язык и валюту</Box>
      <Box className="localization__form-container" width="350px">
        <Box className="localization__form-item">
          <InputLabel htmlFor="country-input">Страна</InputLabel>
          <Select labelId="country-input" defaultValue="RU">
            <MenuItem value="RU">Россия</MenuItem>
            <MenuItem value="US">США</MenuItem>
          </Select>
        </Box>
        <Box className="localization__form-item">
          <InputLabel htmlFor="language-input">Язык</InputLabel>
          <Select labelId="language-input" defaultValue="RUS">
            <MenuItem value="RUS">Русский</MenuItem>
            <MenuItem value="EN">Английский</MenuItem>
          </Select>
        </Box>
        <Box className="localization__form-item">
          <InputLabel htmlFor="currency-input">Валюта</InputLabel>
          <Select labelId="currency-input" defaultValue="RUB">
            <MenuItem value="RUB">РУБ</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </Box>
        <ButtonBasic className="primary" sx={{ width: '100%' }} onClick={handleSaveButton}>
          Сохранить настройки
        </ButtonBasic>
      </Box>
      </>
    </ModalBasic>
  );
};
