import { useForm } from 'react-hook-form';
import { Box, MenuItem } from "@mui/material";
import { skinProperties } from "../../../../mocks/skinProperties";
import { ButtonBasic } from "../../../BasicComponents";
import { AdminInput } from "./AdminInput";
import { AdminSelect } from "./AdminSelect";
import { TrashIconAdmin } from '../../../svg';
import { FC } from 'react';

type TAddSkinFormProps = {
  setAddSkinFormActive: (value: boolean) => void;
}

export const AddSkinForm: FC<TAddSkinFormProps> = ( {setAddSkinFormActive} ) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setAddSkinFormActive(false);
  }

  const handleDelete = () => {
    setAddSkinFormActive(false);
  }

  return (

    <Box className="add-skin-form">
      <Box className="add-skin-form__form">
        <Box>Тип</Box>
        <AdminSelect
          defaultValue={skinProperties.types[0]}
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
          defaultValue={skinProperties.titles[0]}
          {...register("title")}
        >
          {skinProperties.titles.map((title, index) => {
            return <MenuItem value={title} key={index}>{title}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Скин</Box>
        <AdminSelect 
          defaultValue={skinProperties.skins[0]}
          {...register("title")}
        >
          {skinProperties.skins.map((skin, index) => {
            return <MenuItem value={skin} key={index}>{skin}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Редкость</Box>
        <AdminSelect 
          defaultValue={skinProperties.rarities[0]}
          {...register("rare")}
        >
          {skinProperties.rarities.map((rare, index) => {
            return <MenuItem value={rare} key={index}>{rare}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Качество</Box>
        <AdminSelect 
          defaultValue={skinProperties.qualities[0]}
          {...register("quality")}
        >
          {skinProperties.qualities.map((quality, index) => {
            return <MenuItem value={quality} key={index}>{quality}</MenuItem>
          })}
        </AdminSelect>
      </Box>
      <Box className="add-skin-form__form">
        <Box>Качество</Box>
        <AdminInput 
          placeholder='Число'
          {...register("winChance")}
        />
      </Box>
      <Box className="add-skin-form__button-container">
        <ButtonBasic className="admin" onClick={handleSubmit(onSubmit)}>Добавить</ButtonBasic>
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