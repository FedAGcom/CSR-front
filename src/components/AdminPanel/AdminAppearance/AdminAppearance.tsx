import { Divider, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { ButtonBasic } from '../../BasicComponents';
import { FooterSection } from './FooterSection';
import { HeaderSection } from './HeaderSection';
import { ParametersSection } from './ParametersSection';
import { PopupSection } from './PopupSection';
import { divider, submitButton, title } from './style';

export const AdminAppearance = () => {
  const methods = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography className="admin-appearance__title" component={'h2'} style={{ fontSize: ' 24px' }} sx={title}>
          Внешний вид сайта
        </Typography>

        <Divider sx={divider} />
        <HeaderSection />
        <Divider sx={divider} />
        <FooterSection />
        <Divider sx={divider} />
        <ParametersSection />
        <Divider sx={divider} />
        <PopupSection />
        <ButtonBasic type="submit" className="primary" sx={submitButton}>
          Обновить параметры
        </ButtonBasic>
      </form>
    </FormProvider>
  );
};
