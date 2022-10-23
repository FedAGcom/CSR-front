import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { Logo } from '../../svg';
import { InputTypeFile } from './InputTypeFile';
import { colorBoxStyle, inputStyle, inputWrapper, mainSection, span, title } from './style';

export const HeaderSection = () => {
  const [colorHeaderLeft, setColorHeaderLeft] = useState<string>('#2D2B34');
  const [colorHeaderRight, setColorHeaderRight] = useState<string>('#38363F');
  const { register } = useFormContext();

  return (
    <Box>
      <Typography component={'h3'} style={{ fontSize: ' 20px' }} sx={title}>
        Header
      </Typography>
      <Box sx={mainSection}>
        <Stack direction="column" spacing={1}>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет Header 1 (Left)</Typography>
            <InputBasic
              {...register('colorHeaderLeft')}
              onChange={(e) => setColorHeaderLeft(e.target.value)}
              defaultValue="#2D2B34"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorHeaderLeft }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет Header 2 (Right)</Typography>
            <InputBasic
              {...register('colorHeaderRight')}
              onChange={(e) => setColorHeaderRight(e.target.value)}
              defaultValue="#38363F"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorHeaderRight }}></Box>
          </Box>
        </Stack>
        <Typography sx={span}>Логотип Header</Typography>
        <InputTypeFile htmlFor="headerLogo" id="headerLogo" registerName="headerLogo">
          <Logo />
        </InputTypeFile>
      </Box>
    </Box>
  );
};
