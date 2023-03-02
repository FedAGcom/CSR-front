import { useForm } from 'react-hook-form';
import { Box, MenuItem } from '@mui/material';
import { skinProperties } from '../../../../mocks/skinProperties';
import { ButtonBasic } from '../../../BasicComponents';
import { AdminInput } from './AdminInput';
import { AdminSelect } from './AdminSelect';
import { TrashIconAdmin } from '../../../svg';
import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TItem } from './types';

type TAddSkinFormProps = {
  setEditSkinFormActive: (value: boolean) => void;
  changeItem: (item: TItem, index: number) => void;
  deleteItem: (index: number) => void;
  item: TItem;
  index: number;
};

export const EditSkinForm: FC<TAddSkinFormProps> = ({ setEditSkinFormActive, changeItem, deleteItem, item, index }) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    winchance: yup.number().required(),
  });

  const { register, handleSubmit } = useForm<TItem>({ resolver: yupResolver(schema) });

  const onSubmit = (data: TItem) => {
    setEditSkinFormActive(false);
    changeItem(data, index);
  };

  const handleDelete = () => {
    deleteItem(index);
    setEditSkinFormActive(false);
  };

  return (
    <Box className="add-skin-form" sx={{ marginTop: '20px' }}>
      <Box className="add-skin-form__form">
        <Box>Тип</Box>
        <AdminSelect defaultValue={item.type} {...register('type')}>
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
        <AdminInput defaultValue={item.title} {...register('title')} />
      </Box>
      <Box className="add-skin-form__form">
        <Box>Редкость</Box>
        <AdminSelect defaultValue={item.rare} {...register('rare')}>
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
        <AdminSelect defaultValue={item.quality} {...register('quality')}>
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
        <AdminInput defaultValue={item.winchance} placeholder="Число" {...register('winchance')} />
      </Box>
      <Box className="add-skin-form__form">
        <Box>Стоимость</Box>
        <AdminInput placeholder="Число" {...register('price')} />
      </Box>
      <Box className="add-skin-form__button-container">
        <ButtonBasic className="admin" onClick={handleSubmit(onSubmit)}>
          Сохранить
        </ButtonBasic>
        <ButtonBasic
          startIcon={<TrashIconAdmin />}
          className="outlined"
          sx={{ heigth: '38px', borderRadius: '5px', padding: '8px 38px' }}
          onClick={handleDelete}
        >
          Удалить
        </ButtonBasic>
      </Box>
    </Box>
  );
};