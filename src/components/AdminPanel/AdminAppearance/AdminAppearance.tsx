import { Box, Divider, Typography } from '@mui/material';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { ButtonBasic } from '../../BasicComponents';
import { FooterSection } from './FooterSection';
import { HeaderSection } from './HeaderSection';
import { ParametersSection } from './ParametersSection';
import { PopupSection } from './PopupSection';
import { appearanceStyle } from './style';
import { useDispatch } from 'react-redux';
import { getSettings, sendSettings } from './../../../store/slices/appearanceSlice';
import { useEffect } from 'react';
import { store } from '../../../store';

export const AdminAppearance = () => {
  const dispatch: typeof store.dispatch = useDispatch();
  const methods = useForm();
  const onSubmit = (data: FieldValues) => {
    dispatch(sendSettings(data));
  };

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  return (
    <Box sx={appearanceStyle}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Typography className="appearance__title" component={'h2'}>
            Внешний вид сайта
          </Typography>
          <Divider />
          <HeaderSection />
          <Divider />
          <FooterSection />
          <Divider />
          <ParametersSection />
          <Divider />
          <PopupSection />
          <ButtonBasic type="submit" className="primary">
            Обновить параметры
          </ButtonBasic>
        </form>
      </FormProvider>
    </Box>
  );
};
