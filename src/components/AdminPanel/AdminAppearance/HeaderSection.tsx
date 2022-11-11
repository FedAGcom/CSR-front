import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { Logo } from '../../svg';
import { InputTypeFile } from './InputTypeFile';
import { useSelector } from 'react-redux';
import { getColorHeaderLeft, getColorHeaderRight } from '../../../store/selectors/getSettingsAppearance';

export const HeaderSection = () => {
  const [colorHeaderLeft, setColorHeaderLeft] = useState<string>('#2D2B34');
  const [colorHeaderRight, setColorHeaderRight] = useState<string>('#38363F');

  const { register } = useFormContext();
  const serverColorHeaderLeft = useSelector(getColorHeaderLeft);
  const serverColorHeaderRight = useSelector(getColorHeaderRight);

  return (
    <Box>
      <Typography component={'h3'} className="header__title">
        Header
      </Typography>
      <Box className="mainSection">
        <Stack direction="column" spacing={1}>
          <Box className="inputWrapper">
            <Typography>Цвет Header 1 (Left)</Typography>
            <InputBasic
              {...register('colorHeaderLeft')}
              onChange={(e) => setColorHeaderLeft(e.target.value)}
              value={colorHeaderLeft}
            />
            <Box className="colorBox" sx={{ background: colorHeaderLeft }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography className="span">Цвет Header 2 (Right)</Typography>
            <InputBasic
              {...register('colorHeaderRight')}
              onChange={(e) => setColorHeaderRight(e.target.value)}
              value={colorHeaderRight}
            />
            <Box className="colorBox" sx={{ background: colorHeaderRight }}></Box>
          </Box>
        </Stack>
        <Typography>Логотип Header</Typography>
        <InputTypeFile htmlFor="headerLogo" id="headerLogo" registerName="headerLogo">
          <Logo />
        </InputTypeFile>
      </Box>
    </Box>
  );
};
