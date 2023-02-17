import { FC, useEffect } from 'react';
import { Box, MenuItem, SelectChangeEvent } from '@mui/material';
import { ButtonBasic } from '../../../components';
import { ModalBasic } from '../../../components';
import { InputLabel } from './InputLabel';
import Select from './Select';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type TLocalizationModalProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const LocalizationModal: FC<TLocalizationModalProps> = ({ handleClose, isOpen }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const selectedLng = localStorage.getItem('i18nextLng');
    if (selectedLng && selectedLng.length > 2) {
      localStorage.setItem('i18nextLng', selectedLng.slice(0, 2))
    }
  }, []);

  const changeLanguageHandler = (e: SelectChangeEvent<unknown>) => {
    i18next.changeLanguage(e.target.value as string);
  }

  const handleCloseButton = () => {
    handleClose();
  };

  return (
    <ModalBasic open={isOpen} onClose={handleClose}>
      <>
        <Box className="localization__title">{t('localizationModal.title')}</Box>
        <Box className="localization__subtitle">{t('localizationModal.subtitle')}</Box>
        <Box className="localization__form-container" width="350px">
          <Box className="localization__form-item">
            <InputLabel htmlFor="country-input">{t('localizationModal.countryInputLabel')}</InputLabel>
            <Select labelId="country-input" defaultValue="RU">
              <MenuItem value="RU">{t('localizationModal.country1')}</MenuItem>
              <MenuItem value="US">{t('localizationModal.country2')}</MenuItem>
            </Select>
          </Box>
          <Box className="localization__form-item">
            <InputLabel htmlFor="language-input">{t('localizationModal.languageInputLabel')}</InputLabel>
            <Select 
              labelId="language-input" 
              value={localStorage.getItem('i18nextLng')} 
              onChange={changeLanguageHandler}
            >
              <MenuItem value="ru">{t('localizationModal.russianLng')}</MenuItem>
              <MenuItem value="en">{t('localizationModal.englishLng')}</MenuItem>
            </Select>
          </Box>
          <Box className="localization__form-item">
            <InputLabel htmlFor="currency-input">{t('localizationModal.currencyInputLabel')}</InputLabel>
            <Select labelId="currency-input" defaultValue="RUB">
              <MenuItem value="RUB">{t('localizationModal.currencyRub')}</MenuItem>
              <MenuItem value="USD">{t('localizationModal.currencyUsd')}</MenuItem>
            </Select>
          </Box>
          <ButtonBasic className="primary" sx={{ width: '100%' }} onClick={handleCloseButton}>
          {t('localizationModal.closeBtn')} 
          </ButtonBasic>
        </Box>
      </>
    </ModalBasic>
  );
};
