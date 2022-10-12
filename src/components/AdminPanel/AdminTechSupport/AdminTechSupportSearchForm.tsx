import { Box, Typography } from '@mui/material';
import { ButtonBasic, InputBasic } from '../../../components';
import { ErrorIcon } from '../../../components/svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { object, string } from 'yup';

interface IFormFields {
  searchStr: string
}

const validationSchema = object().shape({
  searchStr: string().required('Поле поиска не может быть пустым')
});

export function AdminTechSupportSearchForm() {
  const { register, handleSubmit, formState, clearErrors, reset } = useForm<IFormFields>({
    resolver: yupResolver(validationSchema)
  });

  function submitHandler(data: IFormFields) {
    console.log(data);
    reset();
  }

  return (
    <Box 
      component='form' 
      className='admin-tech-support__search-form search-form'
      onSubmit={handleSubmit(submitHandler)}
    >
      <Typography component='h3' className='search-form__title'>Поиск</Typography>

      <Box className='search-form__content'>
        <InputBasic 
          type='search'
          placeholder='Пользователь: номер или никнейм' 
          {...register('searchStr')}
          error={!!formState.errors.searchStr}
          onBlur={() => clearErrors('searchStr')}
        />
        <ButtonBasic 
          className='primary'
          type='submit'
          sx={{flexBasis: '136px', height: '38px', flexShrink: '0', flexGrow: '0', padding: 'initial', borderRadius: '5px'}}
        >Найти</ButtonBasic>
      </Box>
      
      {
        formState.errors.searchStr ? 
        <Box className='search-form__validation-message-box'>
          <ErrorIcon className='search-form__error-icon'/>
          <Typography component='span' className='search-form__validation-message'>{formState.errors.searchStr.message}</Typography>
        </Box> : null
      }
    </Box>
  )
}