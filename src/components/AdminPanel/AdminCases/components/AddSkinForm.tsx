import { useForm } from 'react-hook-form';
import { Box, MenuItem } from "@mui/material";
import { skinProperties } from "../../../../mocks/skinProperties";
import { ButtonBasic } from "../../../BasicComponents";
import { AdminInput } from "./AdminInput";
import { AdminSelect } from "./AdminSelect";
import { TrashIconAdmin } from '../../../svg';
import { FC } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type TAddFormInputs = {
  type: string;
  title: string;
  skin: string;
  rare: string;
  quality: string;
  winchance: number;
}

type TAddSkinFormProps = {
  setAddSkinFormActive: (value: boolean) => void;
  addItem: (item: any) => void
}

export const AddSkinForm: FC<TAddSkinFormProps> = ( {setAddSkinFormActive, addItem} ) => {

  const schema = yup.object().shape({
    type: yup.string().required('Не указан тип').test('select', 'Выберите значение', (value) => value === 'default' ? false : true),
    title: yup.string().required('Не указано название').test('select2', 'Выберите значение', (value) => value === 'default' ? false : true),
    skin: yup.string().required('Не указан скин').test('select3', 'Выберите значение', (value) => value === 'default' ? false : true),
    rare: yup.string().required('Не указана редкость').test('select4', 'Выберите значение', (value) => value === 'default' ? false : true),
    quality: yup.string().required('Не указано качество').test('select5', 'Выберите значение', (value) => value === 'default' ? false : true),
    winchance: yup.number().required('Не указан процент'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<TAddFormInputs>({resolver: yupResolver(schema)});

  const onSubmit = (data: any) => {
    console.log(data);
    setAddSkinFormActive(false);
    addItem(data);
  }

  const handleDelete = () => {
    setAddSkinFormActive(false);
  }

  return (

    <Box className="add-skin-form">
      <Box className="add-skin-form__form">
        <Box>Тип</Box>
        <AdminSelect
          defaultValue={"default"}
          {...register("type")}
        >
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          {skinProperties.types.map((type, index) => {
            return <MenuItem value={type} key={index}>{type}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Название</Box>
        <AdminSelect 
          defaultValue={"default"}
          {...register("title")}
        >
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          {skinProperties.titles.map((title, index) => {
            return <MenuItem value={title} key={index}>{title}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Скин</Box>
        <AdminSelect 
          defaultValue={"default"}
          {...register("skin")}
        >
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          {skinProperties.skins.map((skin, index) => {
            return <MenuItem value={skin} key={index}>{skin}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Редкость</Box>
        <AdminSelect 
          defaultValue={"default"}
          {...register("rare")}
        >
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          {skinProperties.rarities.map((rare, index) => {
            return <MenuItem value={rare} key={index}>{rare}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Качество</Box>
        <AdminSelect 
          defaultValue={"default"}
          {...register("quality")}
        >
          <MenuItem value="default" disabled hidden sx={{display: 'none'}}>Выбрать</MenuItem>
          {skinProperties.qualities.map((quality, index) => {
            return <MenuItem value={quality} key={index}>{quality}</MenuItem>
          })}
        </AdminSelect>
        {/* {errors?.quality? <Box className='add-skin-form__error'>{`${errors.type?.message}`}</Box> : <></>} */}
      </Box>
      <Box className="add-skin-form__form">
        <Box>Процент выпадения</Box>
        <AdminInput 
          placeholder='Число'
          {...register("winchance")}
        />
      </Box>
      <Box className="add-skin-form__button-container">
        <ButtonBasic 
          className="admin" 
          onClick={handleSubmit(onSubmit)}
        >
          Добавить
        </ButtonBasic>
        <ButtonBasic 
          startIcon={<TrashIconAdmin/>}
          className="outlined"
          sx={{heigth: '38px', borderRadius:"5px", padding: '8px 38px'}}
          onClick={handleDelete}
        >
          Удалить
        </ButtonBasic>
      </Box>
    </Box>

  )
}