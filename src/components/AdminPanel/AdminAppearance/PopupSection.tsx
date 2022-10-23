import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { backgroundMain } from '../../images';
import { InputTypeFile } from './InputTypeFile';
import { colorBoxStyle, inputStyle, inputWrapper, mainSection, span, title } from './style';
import { SwitchBasic } from './SwitchBasic';

export const PopupSection = () => {
  const [colorButton, setColorButton] = useState<string>('#B81034');
  const [colorBackground, setColorBackground] = useState<string>('#24232A');
  const { register } = useFormContext();

  return (
    <Box>
      <Typography component={'h3'} style={{ fontSize: ' 20px' }} sx={title}>
        Всплывающие окна (Pop-ups)
      </Typography>
      <Stack sx={{ paddingRight: '25px', marginBottom: '10px' }} direction="column" spacing={1}>
        <Box sx={inputWrapper}>
          <Typography sx={span}>Текст окна</Typography>
          <InputBasic
            {...register('windowText')}
            style={{ width: '75%' }}
            defaultValue="Время Хеллоуина!"
            sx={inputStyle}
          />
        </Box>
        <Box sx={inputWrapper}>
          <Typography sx={span}>Текст окна</Typography>
          <InputBasic
            {...register('windowTextTwo')}
            multiline
            style={{ width: '75%', height: '106px' }}
            defaultValue="С наступающим праздником Хеллоуином!Наша команда приготовила
             для вас небольшой подарок в виде бесплатного праздничного кейса.
             Хотите открыть его?"
            sx={inputStyle}
          />
        </Box>
      </Stack>
      <Box sx={mainSection}>
        <Stack direction="column" spacing={1}>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Текст кнопки</Typography>
            <InputBasic {...register('buttonText')} style={{ width: '208px' }} defaultValue="Открыть" sx={inputStyle} />
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет кнопки</Typography>
            <InputBasic
              {...register('colorButton')}
              onChange={(e) => setColorButton(e.target.value)}
              defaultValue="#B81034"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorButton }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет фона</Typography>
            <InputBasic
              {...register('colorBackground')}
              onChange={(e) => setColorBackground(e.target.value)}
              defaultValue="#24232A"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorBackground }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Активировать окно</Typography>
            <SwitchBasic {...register('activeWindow')} />
          </Box>
        </Stack>
        <Typography sx={span}>Картинка к тексту</Typography>
        <InputTypeFile htmlFor="textImage" id="textImage" registerName="textImage">
          <Box component="img" src={backgroundMain} alt="textImage"></Box>
        </InputTypeFile>
      </Box>
    </Box>
  );
};
