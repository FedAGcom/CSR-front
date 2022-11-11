import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { InputBasic } from '../../BasicComponents';
import { backgroundCase, backgroundMain } from '../../images';
import { InputTypeFile } from './InputTypeFile';
import {
  getColorButtons,
  getColorBackgroundOne,
  getColorBackgroundTwo,
} from './../../../store/selectors/getSettingsAppearance';

export const ParametersSection = () => {
  const [colorButtons, setColorButtons] = useState<string>('#B81034');
  const [colorBackgroundOne, setColorBackgroundOne] = useState<string>('#24232A');
  const [colorBackgroundTwo, setColorBackgroundTwo] = useState<string>('##2D2B34');
  const { register } = useFormContext();
  const serverColorButtons = useSelector(getColorButtons);
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const serverColorBackgroundTwo = useSelector(getColorBackgroundTwo);

  useEffect(() => {
    if (serverColorButtons && serverColorBackgroundOne && serverColorBackgroundTwo !== undefined) {
      setColorButtons(serverColorButtons);
      setColorBackgroundOne(serverColorBackgroundOne);
      setColorBackgroundTwo(serverColorBackgroundTwo);
    }
  }, [serverColorButtons, serverColorBackgroundTwo, serverColorBackgroundOne]);

  return (
    <Box>
      <Typography component={'h3'} className="parameters__title">
        Параметры на всём сайте
      </Typography>
      <Box className="mainSection">
        <Stack direction="column" spacing={1}>
          <Box className="inputWrapper">
            <Typography>Цвет кнопок</Typography>
            <InputBasic
              {...register('colorButtons')}
              onChange={(e) => setColorButtons(e.target.value)}
              value={colorButtons}
            />
            <Box className="colorBox" sx={{ background: colorButtons }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography>Цвет фона 1 (Main)</Typography>
            <InputBasic
              {...register('colorBackgroundOne')}
              onChange={(e) => setColorBackgroundOne(e.target.value)}
              value={colorBackgroundOne}
            />
            <Box className="colorBox" sx={{ background: colorBackgroundOne }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography>Цвет фона 2</Typography>
            <InputBasic
              {...register('colorBackgroundTwo')}
              onChange={(e) => setColorBackgroundTwo(e.target.value)}
              value={colorBackgroundTwo}
            />
            <Box className="colorBox" sx={{ background: colorBackgroundTwo }}></Box>
          </Box>
        </Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', paddingLeft: '40px' }}>
          <Box sx={{ display: 'flex', marginBottom: '10px' }}>
            <Typography style={{ marginRight: '58px' }}>Фон главная (низ)</Typography>
            <InputTypeFile htmlFor="backgroundMainBottom" id="backgroundMainBottom" registerName="backgroundMainBottom">
              <Box component="img" src={backgroundMain} alt="textImage"></Box>
            </InputTypeFile>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography style={{ marginRight: '58px' }}>Фон кейс</Typography>
            <InputTypeFile htmlFor="backgroundCase" id="backgroundCase" registerName="backgroundCase">
              <Box component="img" src={backgroundCase} alt="textImage"></Box>
            </InputTypeFile>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
