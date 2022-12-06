import { Box, Typography } from '@mui/material';
import { ButtonBasic, InputBasic } from '../../../components';
import { ErrorIcon, TrashIconAdmin } from '../../../components/svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useDeleteRequestMutation, useGetRequestsQuery } from '../../../store/slices/supportSlice';
import { useState } from 'react';

interface IFormFields {
  searchStr: string;
}

const validationSchema = object().shape({
  searchStr: string().required('Поле поиска не может быть пустым'),
});

export function AdminTechSupportSearchForm() {
  const { register, handleSubmit, formState, clearErrors, reset } = useForm<IFormFields>({
    resolver: yupResolver(validationSchema),
  });

  function submitHandler(newValue: IFormFields) {
    setValue(data?.filter((item: any) => item.email.toLowerCase().includes(newValue.searchStr)));
    reset();
  }

  const { data } = useGetRequestsQuery('');
  const [open, isOpen] = useState(false);
  const [checkId, setCheckId] = useState(0);
  const [deleteRequest] = useDeleteRequestMutation();
  const [value, setValue] = useState(data);
  const filteredList = value || data;

  const handleClick = (id: number) => {
    isOpen(!open);
    setCheckId(id);
  };

  return (
    <>
      <Box
        component="form"
        className="admin-tech-support__search-form search-form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography component="h3" className="search-form__title">
          Поиск
        </Typography>

        <Box className="search-form__content">
          <InputBasic
            type="search"
            placeholder="Введите email"
            {...register('searchStr')}
            error={!!formState.errors.searchStr}
            onBlur={() => clearErrors('searchStr')}
          />
          <ButtonBasic
            className="primary"
            type="submit"
            sx={{
              flexBasis: '136px',
              height: '38px',
              flexShrink: '0',
              flexGrow: '0',
              padding: 'initial',
              borderRadius: '5px',
            }}
          >
            Найти
          </ButtonBasic>
        </Box>

        {formState.errors.searchStr ? (
          <Box className="search-form__validation-message-box">
            <ErrorIcon className="search-form__error-icon" />
            <Typography component="span" className="search-form__validation-message">
              {formState.errors.searchStr.message}
            </Typography>
          </Box>
        ) : null}

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ButtonBasic
            className="primary"
            type="submit"
            sx={{
              width: '136px',
              height: '45px',
              borderRadius: '5px',
              marginTop: '15px',
            }}
            onClick={() => setValue(data)}
          >
            Показать все
          </ButtonBasic>
        </div>
      </Box>

      <div className="admin-sup__lines-wrapper">
        <p style={{ width: '10%' }}>№</p>
        <p style={{ width: '30%' }}>Почта</p>
        <p style={{ width: '40%', marginLeft: '15px' }}>Тема</p>
        <p style={{ width: '20%', textAlign: 'center', paddingLeft: '25px' }}>Действия</p>
      </div>

      {filteredList?.map((item: any, i: number) => (
        <div className="admin-sup__request" key={item.id}>
          <div className="admin-sup__request-title">
            <p style={{ width: '10%' }}>{i + 1}</p>
            <p style={{ width: '30%' }}>{item.email}</p>
            <p style={{ width: '43%', marginLeft: '15px' }}>{item.theme}</p>
            <p
              style={{ width: '17%', textAlign: 'center' }}
              id={item.id}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              {checkId === item.id && open ? 'Скрыть заявку' : 'Открыть заявку'}
            </p>
          </div>

          {checkId === item.id && open ? (
            <div className="admin-sup__request-description">
              <span>Email:</span>
              <p>{item.email}</p>

              <span>Тема вопроса/проблемы:</span>
              <p>{item.theme}</p>

              <span>Описание:</span>
              <p>{item.message}</p>

              <span>Изображение:</span>
              {item.image ? (
                <>
                  <img src={item.image} alt="" />
                  <br />
                </>
              ) : (
                <p>Отсутствует</p>
              )}

              <ButtonBasic
                className="supRemoveBtn"
                onClick={() => {
                  deleteRequest(item.id);
                  isOpen(false);
                }}
              >
                <TrashIconAdmin style={{ marginRight: '7px' }} /> Удалить
              </ButtonBasic>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
