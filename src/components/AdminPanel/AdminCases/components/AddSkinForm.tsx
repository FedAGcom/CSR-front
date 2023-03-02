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
import axios from 'axios';
import { token } from '../token';


type TAddSkinFormProps = {
  setAddSkinFormActive: (value: boolean) => void;
  addItem: (item: TItem) => void;
  editableCase: any | null | undefined;
  id: number| undefined
};

export const AddSkinForm: FC<TAddSkinFormProps> = ({ setAddSkinFormActive, addItem ,editableCase , id}) => {
 
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
    winchance: yup
    .number()
    .required()
    .min(0, "Min is 0")
    .max(99, "max is 99"),
    price: yup.number().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<TItem>({ resolver: yupResolver(schema) });
  

  const onSubmit = async (data: TItem) => {
    if (editableCase) {      

      await axios
        .post(`http://csgofarm.online/api/v1/packs/addItems/${editableCase.id}`, data, {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        })
        .then(() => setAddSkinFormActive(false))
    } else {  
      await axios
        .post(`http://csgofarm.online/api/v1/packs/addItems/${id}`, data, {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        })
        .then(() => setAddSkinFormActive(false));
    }
        
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
        <AdminSelect defaultValue={'default'} {...register('type')} error={!!errors.type}>
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
        <AdminInput {...register('title')} error={!!errors.title} />
      </Box>
      <Box className="add-skin-form__form">
        <Box>Редкость</Box>
        <AdminSelect defaultValue={'default'} {...register('rare')} error={!!errors.rare}>
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
        <AdminSelect defaultValue={'default'} {...register('quality')} error={!!errors.quality}>
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
        <AdminInput   placeholder="Число"  {...register("winchance")}  />
        {errors.winchance && <p>{"Min value is 0 max is 99"}</p>}
      </Box>
      <Box className="add-skin-form__form">
        <Box>Стоимость</Box>
        <AdminInput placeholder="Число" {...register('price' , {valueAsNumber: true})} />
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