import { Box } from '@mui/material';
import * as yup from 'yup';
import { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonBasic, InputBasic, ModalBasic } from '../../components';
import { ErrorIcon } from '../../components/svg';
import { useSelector } from 'react-redux';
import { getColorBackgroundOne } from '../../store/selectors/getSettingsAppearance';
import { useSendRequestMutation } from '../../store/slices/supportSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type TFormInputs = {
  email: string;
  image: FileList;
  message: string;
  theme: string;
};

export const TechSupportForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const serverColorBackgroundOne = useSelector(getColorBackgroundOne);
  const [image, setImageSrc] = useState<string | ArrayBuffer | null>();
  const [sendRequest] = useSendRequestMutation();
  const theme = useTheme();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const schema = yup.object().shape({
    email: yup.string().email('Некорректный email').required('Не указан email'),
    theme: yup.string().required('Не указана тема'),
    message: yup.string().required('Опишите проблему'),
    image: yup.mixed().test('fileSize', 'Файл слишком большой', (value: FileList) => {
      return !value.length ? true : value[0].size < 500000;
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
    const obj = {
      email: data.email,
      image: image,
      theme: data.theme,
      message: data.message,
    };

    sendRequest(obj).unwrap();
    const form = document.getElementById('FAQform') as HTMLFormElement;
    form.reset();
    setModalOpen(true);
  };

  function imageHandler(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return setImageSrc(reader.result);
    };
  }

  return (
    <>
      <form
        className="tech-support-form"
        id="FAQform"
        onSubmit={handleSubmit(onSubmit)}
        style={{ backgroundColor: serverColorBackgroundOne ?? '#24232A' }}
      >
      {!matchesDownMd && <Box className="tech-support-form__title" style={{margin: '0 auto'}}>Форма для связи с тех.поддержкой</Box>}
      { !matchesDownLg &&  <Box className="tech-support-form__inputs-container" style={{width: '730px'}}>
          <label className="tech-support-form__input-label">Email*</label>
          <InputBasic placeholder="Ваш email" {...register('email')} />
          <Box className={`tech-support-form__error-message ${errors.email ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.email?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Тема вопроса/проблемы*</label>
          <InputBasic type="text" placeholder="Название темы" {...register('theme')} />
          <Box className={`tech-support-form__error-message ${errors.theme ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.theme?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Описание*</label>
          <InputBasic
            type="text"
            multiline
            sx={{ minHeight: '158px', height: 'auto', justifyContent: 'flex-start' }}
            placeholder="Опишите, что случилось, и прикрепите скриншоты, если требуется"
            {...register('message')}
          />
          <Box className={`tech-support-form__error-message ${errors.message ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.message?.message}`}
          </Box>
        </Box>}

      { matchesDownLg && !matchesDownMd && <Box className="tech-support-form__inputs-container" style={{width: '500px'}}>
          <label className="tech-support-form__input-label">Email*</label>
          <InputBasic placeholder="Ваш email" {...register('email')} />
          <Box className={`tech-support-form__error-message ${errors.email ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.email?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Тема вопроса/проблемы*</label>
          <InputBasic type="text" placeholder="Название темы" {...register('theme')} />
          <Box className={`tech-support-form__error-message ${errors.theme ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.theme?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Описание*</label>
          <InputBasic
            type="text"
            multiline
            sx={{ minHeight: '158px', height: 'auto', justifyContent: 'flex-start' }}
            placeholder="Опишите, что случилось, и прикрепите скриншоты, если требуется"
            {...register('message')}
          />
          <Box className={`tech-support-form__error-message ${errors.message ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.message?.message}`}
          </Box>
        </Box>}

        { matchesDownLg && matchesDownMd && <Box className="tech-support-form__inputs-container" style={{width: '250px'}}>
          <label className="tech-support-form__input-label">Email*</label>
          <InputBasic placeholder="Ваш email" {...register('email')} />
          <Box className={`tech-support-form__error-message ${errors.email ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.email?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Тема вопроса/проблемы*</label>
          <InputBasic type="text" placeholder="Название темы" {...register('theme')} />
          <Box className={`tech-support-form__error-message ${errors.theme ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.theme?.message}`}
          </Box>
          <label className="tech-support-form__input-label">Описание*</label>
          <InputBasic
            type="text"
            multiline
            sx={{ minHeight: '158px', height: 'auto', justifyContent: 'flex-start' }}
            placeholder="Опишите, что случилось, и прикрепите скриншоты, если требуется"
            {...register('message')}
          />
          <Box className={`tech-support-form__error-message ${errors.message ? '' : 'hidden'}`}>
            <ErrorIcon />
            {`${errors.message?.message}`}
          </Box>
        </Box>}


        <Box className="tech-support-form__buttons">
          <label className="tech-support-form__file-upload">
            <Box style={{marginBottom: '25px'}}>Добавить изображение</Box>
            <input
              type="file"
              accept="image/*"
              className="tech-support-form__file-input"
              {...register('image')}
              onChange={imageHandler}
            ></input>
          </label>
          <ButtonBasic className="primary" type="submit"  style={{marginBottom: '25px'}}>
            Отправить заявку
          </ButtonBasic>
        </Box>
        <Box className={`tech-support-form__error-message ${errors.image ? '' : 'hidden'}`}>
          <ErrorIcon />
          {`${errors.image?.message}`}
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
