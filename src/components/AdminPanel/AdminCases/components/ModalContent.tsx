import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { Box, Divider } from "@mui/material"
import { ButtonBasic } from "../../../BasicComponents";
import { CaseHeaderForm, AddSkinButton, AddSkinForm } from "./";
import { useState } from "react";

export const ModalContent = () => {

  const [isAddSkinActive, setAddSkinActive] = useState(false);

  const methods = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  }

  return(
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CaseHeaderForm />
          <Box className="admin-cases__modal-subtitle">Содержимое кейса</Box>
          <Divider  className="admin-cases__divider"/>
          {
            isAddSkinActive ? (
              <AddSkinForm setAddSkinFormActive={setAddSkinActive}/>
            ) : (
              <AddSkinButton onClick={() => setAddSkinActive(!isAddSkinActive)}/>
            )
          }

          <Divider  className="admin-cases__divider"/>
          <ButtonBasic
            type="submit"
            className="admin"
            sx={{marginRight: '25px', textAlign: 'end'}}
          >
            Сохранить
          </ButtonBasic>
        </FormProvider>
      </form>
    </>
  )
}