import { useForm, FormProvider } from "react-hook-form";
import { Box, Divider } from "@mui/material"
import { ButtonBasic } from "../../../BasicComponents";
import { CaseHeaderForm, AddSkinButton, AddSkinForm } from "./";
import { useState } from "react";
import { Skin } from "./Skin";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TEditableCase, TItem } from "./types";

type TCaseInputs = {
  title: string;
  price: number;
}

type TModalContentProps = {
  editableCase: TEditableCase | null | undefined;
  setModalOpen: (value: boolean) => void
}

export const ModalContent = ({editableCase, setModalOpen}: TModalContentProps) => {

  const [isAddSkinActive, setAddSkinActive] = useState(false);
  const [items, setItems] = useState(editableCase ? editableCase.items : []);
  const [file, setFile] = useState<File | string | Blob>('');

  const addItem = (item : TItem) => {
    if (Array.isArray(items)) {
      setItems([...items, item]);
    } else {
      setItems([item]);
    }
  }

  const changeItem = (item: TItem, index: number) => {
    const newItems = items?.slice(0);
    newItems?.splice(index, 1, item);
    if (Array.isArray(newItems)) {
      setItems([...newItems]);
    }
  }

  const deleteItem = (index: number) => {
    const newItems = items?.slice(0);
    newItems?.splice(index, 1);
    if (Array.isArray(newItems)) {
      setItems([...newItems]);
    }
  }

  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
  });

  const methods = useForm<TCaseInputs>({resolver: yupResolver(schema)});

  const onSubmit = async (data: TCaseInputs) => {

  // склейка тайтл + скин для бэка 
    // const finalItems = items?.map((item: any) => {
    //   return ({
    //     type: item.type,
    //     title: `${item.title} | ${item.skin}`,
    //     rare: item.rare,
    //     quality: item.quality,
    //     winChance: item.winchance
    //   })
    // })

    // const finalCase = {
    //   title: data.title,
    //   price: data.price,
    //   items: finalItems,
    // }

    console.log('data ---', data);

    const myItems = [{
      type : "Rifle",
      title : "M4A1-S | Nightmare",
      rare : "Common",
      quality : "Field-Tested",
      winchance : 2.0
    }]

    const obj = {title: 'some title', price: 333, items: myItems};

    // const blob = new Blob([JSON.stringify(obj)], {type: 'application/json'})
    // formData.append('pack', blob);


    const formData = new FormData();
    formData.append('pack', JSON.stringify(obj));
    formData.append('file', file);

    const values = Object.fromEntries(formData.entries());
    console.log('values --- ', values );
    console.log('form data --- ', formData);

    const url = 'http://5.101.51.15/api/v1/packs';

    // axios.post(url, formData, headers).then(resp => console.log(resp)).catch(err => console.log('err --', err));

    let resp = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemlyYWZhaWwiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2NjAyNTkwNCwiZXhwIjoxNjY2NjMwNzA0fQ._GcEyB3FZP1OqzypDNLSB9_19QDU2fQ_C1-liYkTPVk',
       }
    });
    resp = await resp.json()
    console.log('responce --- ', resp);

    setModalOpen(false);
  }

  console.log('FILE --- ', file);

  return(
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)} >
        <FormProvider {...methods}>
          <CaseHeaderForm editableCase={editableCase} setFile={setFile}/>
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
              items?.map((item: TItem, index: number) => {
                return <Skin 
                  item={item} 
                  key={index} 
                  index={index}
                  changeItem={changeItem}
                  deleteItem={deleteItem}
                />
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