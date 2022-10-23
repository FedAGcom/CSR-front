import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { backgroundCase, backgroundMain } from '../../images';
import { InputTypeFile } from './InputTypeFile';
import { colorBoxStyle, inputStyle, inputWrapper, mainSection, span, title } from './style';

export const ParametersSection = () => {
  const [colorButtons, setColorButtons] = useState<string>('#B81034');
  const [colorBackgroundOne, setColorBackgroundOne] = useState<string>('#24232A');
  const [colorBackgroundTwo, setColorBackgroundTwo] = useState<string>('##2D2B34');
  const { register } = useFormContext();

  return (
    <Box>
      <Typography component={'h3'} style={{ fontSize: ' 20px' }} sx={title}>
        Параметры на всём сайте
      </Typography>
      <Box sx={mainSection}>
        <Stack direction="column" spacing={1}>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет кнопок</Typography>
            <InputBasic
              {...register('colorButtons')}
              onChange={(e) => setColorButtons(e.target.value)}
              defaultValue="#B81034"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorButtons }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет фона 1 (Main)</Typography>
            <InputBasic
              {...register('colorBackgroundOne')}
              onChange={(e) => setColorBackgroundOne(e.target.value)}
              defaultValue="#24232A"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorBackgroundOne }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет фона 2</Typography>
            <InputBasic
              {...register('colorBackgroundTwo')}
              onChange={(e) => setColorBackgroundTwo(e.target.value)}
              defaultValue="#2D2B34"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorBackgroundTwo }}></Box>
          </Box>
        </Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', paddingLeft: '40px' }}>
          <Box sx={{ display: 'flex', marginBottom: '10px' }}>
            <Typography style={{ marginRight: '58px' }} sx={span}>
              Фон главная (низ)
            </Typography>
            <InputTypeFile htmlFor="backgroundMainBottom" id="backgroundMainBottom" registerName="backgroundMainBottom">
              <Box component="img" src={backgroundMain} alt="textImage"></Box>
            </InputTypeFile>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography style={{ marginRight: '58px' }} sx={span}>
              Фон кейс
            </Typography>
            <InputTypeFile htmlFor="backgroundCase" id="backgroundCase" registerName="backgroundCase">
              <Box component="img" src={backgroundCase} alt="textImage"></Box>
            </InputTypeFile>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
