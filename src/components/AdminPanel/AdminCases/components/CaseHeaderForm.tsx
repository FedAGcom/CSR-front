import { useFormContext, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { AdminInput } from "./AdminInput";

export const CaseHeaderForm = () => {

  const { register } = useFormContext();

  return(
    <Box className="case-header-form">
      <Box className="case-header-form__form">
        <Box>Название</Box>
        <AdminInput 
          type="text"
          placeholder="Название кейса"
          {...register('title')}
        />
      </Box>
      <Box className="case-header-form__form">
        <Box>Стоимость</Box>
        <AdminInput 
         type="text"
         placeholder="Сумма"
         {...register('price')}
        />
      </Box>
    </Box>
  )
}