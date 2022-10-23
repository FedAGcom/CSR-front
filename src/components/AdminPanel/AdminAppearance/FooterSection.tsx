import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputBasic } from '../../BasicComponents';
import { Logo } from '../../svg';
import { InputTypeFile } from './InputTypeFile';
import { colorBoxStyle, inputStyle, inputWrapper, mainSection, span, title } from './style';

export const FooterSection = () => {
  const [colorFooterUp, setColorFooterUp] = useState<string>('#1E1D23');
  const [colorFooterDown, setColorFooterDown] = useState<string>('#19181E');
  const { register } = useFormContext();

  return (
    <Box>
      <Typography component={'h3'} style={{ fontSize: ' 20px' }} sx={title}>
        Footer
      </Typography>
      <Box sx={mainSection}>
        <Stack direction="column" spacing={1}>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет Footer 1 (Up)</Typography>
            <InputBasic
              {...register('colorFooterUp')}
              onChange={(e) => setColorFooterUp(e.target.value)}
              defaultValue="#1E1D23"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorFooterUp }}></Box>
          </Box>
          <Box sx={inputWrapper}>
            <Typography sx={span}>Цвет Footer 2 (Down)</Typography>
            <InputBasic
              {...register('colorFooterDown')}
              onChange={(e) => setColorFooterDown(e.target.value)}
              defaultValue="#19181E"
              sx={inputStyle}
            />
            <Box sx={colorBoxStyle} style={{ background: colorFooterDown }}></Box>
          </Box>
        </Stack>
        <Typography sx={span}>Логотип Footer</Typography>
        <InputTypeFile htmlFor="footerLogo" id="footerLogo" registerName="footerLogo">
          <Logo />
        </InputTypeFile>
      </Box>
    </Box>
  );
};
