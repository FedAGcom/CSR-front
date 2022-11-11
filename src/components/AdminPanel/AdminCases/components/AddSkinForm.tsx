import { useForm } from 'react-hook-form';
import { Box, MenuItem } from '@mui/material';
import { skinProperties } from '../../../../mocks/skinProperties';
import { ButtonBasic } from '../../../BasicComponents';
import { AdminInput } from './AdminInput';
import { AdminSelect } from './AdminSelect';
import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TItem } from './types';

type TAddSkinFormProps = {
  setAddSkinFormActive: (value: boolean) => void;
  addItem: (item: TItem) => void;
};

export const AddSkinForm: FC<TAddSkinFormProps> = ({ setAddSkinFormActive, addItem }) => {
  const schema = yup.object().shape({
    type: yup
      .string()
      .required()
      .test('select1', 'Выберите значение', (value) => (value === 'default' ? false : true)),
    title: yup.string().required(),
    rare: yup
      .string()
      .required()
      .test('select2', 'Выберите значение', (value) => (value === 'default' ? false : true)),
    quality: yup
      .string()
      .required()
      .test('select3', 'Выберите значение', (value) => (value === 'default' ? false : true)),
    winchance: yup.number().required(),
  });

  const { register, handleSubmit, formState } = useForm<TItem>({ resolver: yupResolver(schema) });

  const onSubmit = (data: TItem) => {
    setAddSkinFormActive(false);
    addItem(data);
  };

  const handleDelete = () => {
    setAddSkinFormActive(false);
  };

  return (
    <Box className="add-skin-form">
      <Box className="add-skin-form__form">
        <Box>Тип</Box>
        <AdminSelect defaultValue={'default'} {...register('type')} error={!!formState.errors.type}>
          <MenuItem value="default" disabled hidden sx={{ display: 'none' }}>
            Выбрать
          </MenuItem>
          {skinProperties.type.map((type, index) => {
            return (
              <MenuItem value={type} key={index}>
                {type}
              </MenuItem>
            );
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Название</Box>
        <AdminInput {...register('title')} error={!!formState.errors.title} />
      </Box>
      <Box className="add-skin-form__form">
        <Box>Редкость</Box>
        <AdminSelect defaultValue={'default'} {...register('rare')} error={!!formState.errors.rare}>
          <MenuItem value="default" disabled hidden sx={{ display: 'none' }}>
            Выбрать
          </MenuItem>
          {skinProperties.rare.map((rare, index) => {
            return (
              <MenuItem value={rare} key={index}>
                {rare}
              </MenuItem>
            );
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Качество</Box>
        <AdminSelect defaultValue={'default'} {...register('quality')} error={!!formState.errors.quality}>
          <MenuItem value="default" disabled hidden sx={{ display: 'none' }}>
            Выбрать
          </MenuItem>
          {skinProperties.quality.map((quality, index) => {
            return (
              <MenuItem value={quality} key={index}>
                {quality}
              </MenuItem>
            );
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Процент выпадения</Box>
        <AdminInput placeholder="Число" {...register('winchance')} />
      </Box>
      <Box className="add-skin-form__button-container">
        <ButtonBasic className="admin" onClick={handleSubmit(onSubmit)}>
          Добавить
        </ButtonBasic>
        <ButtonBasic
          className="outlined"
          sx={{ heigth: '38px', borderRadius: '5px', padding: '8px 38px' }}
          onClick={handleDelete}
        >
          Отменить
        </ButtonBasic>
      </Box>
    </Box>
  );
};
