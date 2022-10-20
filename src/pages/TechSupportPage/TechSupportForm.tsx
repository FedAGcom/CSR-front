import { Box } from '@mui/material';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonBasic, InputBasic, ModalBasic } from '../../components';
import { ErrorIcon } from '../../components/svg';

type TFormInputs = {
  email: string;
  problemTitle: string;
  problemDescription: string;
  fileUpload: FileList;
};

export const TechSupportForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email('Некорректный email').required('Не указан email'),
    problemTitle: yup.string().required('Не указана тема'),
    problemDescription: yup.string().required('Опишите проблему'),
    fileUpload: yup.mixed().test('fileSize', 'Файл слишком большой', (value: FileList) => {
      return !value.length ? true : value[0].size < 200000;
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    setModalOpen(true);
    // send data to backend
    console.log('form submitted -- ', data);
  };

  return (
    <>
      <form className="tech-support-form" onSubmit={handleSubmit(onSubmit)}>
        <Box className="tech-support-form__title">Форма для связи с тех.поддержкой</Box>
        <Box className="tech-support-form__inputs-container">
          <label className="tech-support-form__input-label">Email*</label>
          <InputBasic placeholder="Ваш email" {...register('email')} />
          <Box className={`tech-support-form__error-message ${errors.email ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.email?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Тема вопроса/проблемы*</label>
          <InputBasic type="text" placeholder="Название темы" {...register('problemTitle')} />
          <Box className={`tech-support-form__error-message ${errors.problemTitle ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.problemTitle?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Описание*</label>
          <InputBasic
            type="text"
            multiline
            sx={{ minHeight: '158px', height: 'auto' }}
            placeholder="Опишите, что случилось, и прикрепите скриншоты, если требуется"
            {...register('problemDescription')}
          />
          <Box className={`tech-support-form__error-message ${errors.problemDescription ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.problemDescription?.message}`}
          </Box>
        </Box>
        <Box className="tech-support-form__buttons">
          <label className="tech-support-form__file-upload">
            <Box>Добавить изображения</Box>
            <input type="file" multiple className="tech-support-form__file-input" {...register('fileUpload')}></input>
          </label>
          <ButtonBasic className="primary" type="submit">
            Отправить заявку
          </ButtonBasic>
        </Box>
        <Box className={`tech-support-form__error-message ${errors.fileUpload ? '' : 'hidden'}`}>
          <ErrorIcon />
          {`${errors.fileUpload?.message}`}
        </Box>
      </form>
      <ModalBasic open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Box className="tech-support-form__modal">
          <Box className="tech-support-form__modal-title">Заявка успешно отправлена</Box>
          <Box className="tech-support-form__modal-subtitle">Ожидайте письмо с ответом от сотрудника тех.поддержки</Box>
          <ButtonBasic className="primary" onClick={() => setModalOpen(false)}>
            Закрыть
          </ButtonBasic>
        </Box>
      </ModalBasic>
    </>
  );
};
