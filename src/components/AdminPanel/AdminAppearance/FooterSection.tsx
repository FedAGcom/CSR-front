import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { InputBasic } from '../../BasicComponents';
import { Logo } from '../../svg';
import { InputTypeFile } from './InputTypeFile';
import { getColorFooterUp } from './../../../store/selectors/getSettingsAppearance';

export const FooterSection = () => {
  const [colorFooterUp, setColorFooterUp] = useState<string | undefined>('#1E1D23');
  const [colorFooterDown, setColorFooterDown] = useState<string | undefined>('#19181E');
  const { register } = useFormContext();
  const serverColorFooterUp = useSelector(getColorFooterUp);
  const serverColorFooterDown = useSelector(getColorFooterUp);

  useEffect(() => {
    if (serverColorFooterUp && serverColorFooterDown !== undefined) {
      setColorFooterUp(serverColorFooterUp);
      setColorFooterDown(serverColorFooterDown);
    }
  }, [serverColorFooterUp, serverColorFooterDown]);

  return (
    <Box>
      <Typography component={'h3'} className="footer__title">
        Footer
      </Typography>
      <Box className="mainSection">
        <Stack direction="column" spacing={1}>
          <Box className="inputWrapper">
            <Typography>Цвет Footer 1 (Up)</Typography>
            <InputBasic
              {...register('colorFooterUp')}
              onChange={(e) => setColorFooterUp(e.target.value)}
              value={colorFooterUp}
            />
            <Box className="colorBox" sx={{ background: colorFooterUp }}></Box>
          </Box>
          <Box className="inputWrapper">
            <Typography>Цвет Footer 2 (Down)</Typography>
            <InputBasic
              {...register('colorFooterDown')}
              onChange={(e) => setColorFooterDown(e.target.value)}
              value={colorFooterDown}
            />
            <Box className="colorBox" sx={{ background: colorFooterDown }}></Box>
          </Box>
        </Stack>
        <Typography>Логотип Footer</Typography>
        <InputTypeFile htmlFor="footerLogo" id="footerLogo" registerName="footerLogo">
          <Logo />
        </InputTypeFile>
      </Box>
    </Box>
  );
};
