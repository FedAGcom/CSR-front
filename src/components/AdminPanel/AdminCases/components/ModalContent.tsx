import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { Box, Divider } from "@mui/material"
import { ButtonBasic } from "../../../BasicComponents";
import { CaseHeaderForm, AddSkinButton, AddSkinForm } from "./";
import { useState } from "react";
import { Skin } from "./Skin";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type TCaseInputs = {
  title: string;
  price: number;
}

export const ModalContent = ({editableCase}: any) => {

  const [isAddSkinActive, setAddSkinActive] = useState(false);
  const [items, setItems] = useState(editableCase ? editableCase.items : []);

  const addItem = (item : any) => {
    setItems([...items, item]);
  }

  const schema = yup.object().shape({
    title: yup.string().required('Не указано название'),
    price: yup.number().required('Не указана цена'),
  });

  const methods = useForm<TCaseInputs>({resolver: yupResolver(schema)});

  const onSubmit = (data: any) => {

    // склейка тайтл + скин для бэка 
    const finalItems = items.map((item: any) => {
      return ({
          type: item.type,
          title: `${item.title} | ${item.skin}`,
          rare: item.rare,
          quality: item.quality,
          winChance: item.winchance
      })
    })
    const finalCase = {
      title: data.title,
      price: data.price,
      items: finalItems,
    }
    // здесь должна быть отправка на бэк 
    console.log('SUBMIT : --', finalCase);
    // alert(JSON.stringify(finalCase));
  }

  return(
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CaseHeaderForm />
          <Box className="admin-cases__modal-subtitle">Содержимое кейса</Box>
          <Divider  className="admin-cases__divider"/>
          <Box className="admin-cases__modal-skins">
            {
              isAddSkinActive ? (
                <AddSkinForm setAddSkinFormActive={setAddSkinActive} addItem={addItem}/>
              ) : (
                <AddSkinButton onClick={() => setAddSkinActive(!isAddSkinActive)}/>
              )
            }
            {
              items.map((item: any, index: number) => {
                return <Skin item={item} key={index}/>
              })
            }
            
          </Box>
        </FormProvider>
        <Divider  className="admin-cases__divider"/>
        <ButtonBasic
              type="submit"
              className="admin"
              sx={{margin: '0 25px 0 auto', display: 'block'}}
            >
              Сохранить
            </ButtonBasic>
      </form>
    </>
  )
}