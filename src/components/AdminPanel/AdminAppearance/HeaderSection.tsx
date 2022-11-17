import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { InputTypeFile } from './InputTypeFile';
import { useSelector } from 'react-redux';
import { getColorHeaderLeft, getColorHeaderRight, getHeaderLogo } from '../../../store/selectors/getSettingsAppearance';

export const HeaderSection = () => {
  const [colorHeaderLeft, setColorHeaderLeft] = useState<string | undefined>('#2D2B34');
  const [colorHeaderRight, setColorHeaderRight] = useState<string | undefined>('#38363F');
  const { register } = useFormContext();
  const serverColorHeaderLeft = useSelector(getColorHeaderLeft);
  const serverColorHeaderRight = useSelector(getColorHeaderRight);
  const serverHeaderLogo = useSelector(getHeaderLogo);

  useEffect(() => {
    if (serverColorHeaderLeft && serverColorHeaderRight !== undefined) {
      setColorHeaderLeft(serverColorHeaderLeft);
      setColorHeaderRight(serverColorHeaderRight);
    }
  }, [serverColorHeaderLeft, serverColorHeaderRight]);

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
          <Box
            component="img"
            style={{ width: '100%', height: '100%' }}
            src={`${serverHeaderLogo}`}
            alt="headerImage"
          ></Box>
        </InputTypeFile>
      </Box>
    </Box>
  );
};
