import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { InputBasic } from '../../BasicComponents';
import { backgroundMain } from '../../images';
import { InputTypeFile } from './InputTypeFile';
import { SwitchBasic } from './SwitchBasic';
import {
  getTitleText,
  getWindowText,
  getButtonText,
  getColorButton,
  getColorBackground,
  getActiveWindow,
} from '../../../store/selectors/getSettingsAppearance';

export const PopupSection = () => {
  const [colorButton, setColorButton] = useState<string>('#B81034');
  const [colorBackground, setColorBackground] = useState<string>('#24232A');
  const { register } = useFormContext();
  const serverTitleText = useSelector(getTitleText);
  const serverWindowText = useSelector(getWindowText);
  const serverButtonText = useSelector(getButtonText);
  const serverColorButton = useSelector(getColorButton);
  const serverColorBackground = useSelector(getColorBackground);
  const serverActiveWindow = useSelector(getActiveWindow);

  return (
    <Box>
      <Typography component={'h3'} className="popup__title">
        Всплывающие окна (Pop-ups)
      </Typography>
      <Stack className="mainSection" direction="column" spacing={1}>
        <Box className="inputWrapper">
          <Typography>Текст заголовка</Typography>
          <InputBasic
            {...register('titleText')}
            style={{ width: '76%', marginRight: 0 }}
            defaultValue="Время Хеллоуина!"
          />
        </Box>
        <Box className="inputWrapper">
          <Typography>Текст окна</Typography>
          <InputBasic
            {...register('windowTextTwo')}
            multiline
            style={{ width: '76%', height: '106px', marginRight: 0 }}
            defaultValue="С наступающим праздником Хеллоуином! Наша команда приготовила
            для вас небольшой подарок в виде бесплатного праздничного кейса.
             Хотите открыть его?"
          />
        </Box>
      </Stack>
      <Box className="mainSection">
        <Stack direction="column" spacing={1}>
          <Box className="inputWrapper">
            <Typography>Текст кнопки</Typography>
            <InputBasic {...register('buttonText')} style={{ width: '208px' }} defaultValue="Открыть" />
          </Box>
          <Box className="inputWrapper">
            <Typography>Цвет кнопки</Typography>
            <InputBasic
              {...register('colorButton')}
              onChange={(e) => setColorButton(e.target.value)}
              defaultValue="#B81034"
            />
            <Box className="colorBox" sx={{ background: colorButton }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography>Цвет фона</Typography>
            <InputBasic
              {...register('colorBackground')}
              onChange={(e) => setColorBackground(e.target.value)}
              defaultValue="#24232A"
            />
            <Box className="colorBox" sx={{ background: colorBackground }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography>Активировать окно</Typography>
            <SwitchBasic {...register('activeWindow')} />
          </Box>
        </Stack>
        <Typography>Картинка к тексту</Typography>
        <InputTypeFile htmlFor="textImage" id="textImage" registerName="textImage">
          <Box component="img" src={backgroundMain} alt="textImage"></Box>
        </InputTypeFile>
      </Box>
    </Box>
  );
};
