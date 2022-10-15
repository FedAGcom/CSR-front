import { useFormContext, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { AdminInput } from "./AdminInput";

export const CaseHeaderForm = ({editableCase} : any) => {

  const { register } = useFormContext();

  return(
    <Box className="case-header-form">
      <Box className="case-header-form__form">
        <Box>Название</Box>
        <AdminInput 
          defaultValue={editableCase ? editableCase.title : null}
          type="text"
          placeholder="Название кейса"
          {...register('title')}
        />
      </Box>
      <Box className="case-header-form__form">
        <Box>Стоимость</Box>
        <AdminInput 
          defaultValue={editableCase ? editableCase.price : null}
          type="text"
          placeholder="Сумма"
          {...register('price')}
        />
      </Box>
      <Box className="case-header-form__form">
        <Box>Изображение кейса</Box>
        <input 
          type="file"
          placeholder="Сумма"
          {...register('image')}
        />
      </Box>
    </Box>
  )
}