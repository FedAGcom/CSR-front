import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Divider } from '@mui/material';
import { ButtonBasic } from '../../../BasicComponents';
import { CaseHeaderForm, AddSkinButton, AddSkinForm, CreateCaseButton } from './';
import { FC, useState, } from 'react';
import { Skin } from './Skin';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TEditableCase, TItem } from './types';
import axios from 'axios';
import { token } from '../token';

type TCaseInputs = {title: string; price: string};

type TModalContentProps = {
  editableCase: TEditableCase | null | undefined;
  setModalOpen: (value: boolean) => void;
  getCases: () => void;
};


export const ModalContent: FC<TModalContentProps> = ({ editableCase, setModalOpen, getCases }) => {
  const [isAddSkinActive, setAddSkinActive] = useState(false);
  const [items, setItems] = useState(editableCase ? editableCase.packItemsList : []);
  const [file, setFile] = useState<string | ArrayBuffer | null | undefined>(editableCase ? editableCase.image : '');
  const [inputValues , setInputValues]  = useState({title: '' , price : ''})
  const [isEditableCase, setIsEditableCase] = useState(editableCase ? true: false)
  const [createdElementId, setCreatedElementId] = useState()
  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
  });
  const methods = useForm<TCaseInputs>({ resolver: yupResolver(schema)});
  const getInputsValue = (values: TCaseInputs) => setInputValues(values);

  const addItem = (item: TItem) => {
    if (Array.isArray(items)) {
      setItems([...items, item]);
    } else {
      setItems([item]);
    }
  };

  const createCase = async () => {
    const obj = { title: inputValues.title, price: inputValues.price, file: file };
    await axios
      .post('http://csgofarm.online/api/v1/packs', obj, {
        headers: { Authorization: token, 'Content-Type': 'application/json' },
      })
      .then((response)=> setCreatedElementId(response.data.id))    
      setIsEditableCase(true)
      getCases()
  }

  const changeItem = (item: TItem, index: number) => {
    const newItems = items?.slice(0);
    newItems?.splice(index, 1, item);
    if (Array.isArray(newItems)) {
      setItems([...newItems]);
    }
  };

  const deleteItem = (index: number) => {
    const newItems = items?.slice(0);
    newItems?.splice(index, 1);
    if (Array.isArray(newItems)) {
      setItems([...newItems]);
    }
  };


  //TODO заменить правильными запросами с правильным токеном
  const onSubmit =  () => {
    
    setModalOpen(false)
    getCases();
  };

  return (
    <>
      <form  onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CaseHeaderForm editableCase={editableCase} setFile={setFile} getInputValue={getInputsValue}/>

          { isEditableCase
            ?
              <>
                <Box className="admin-cases__modal-subtitle">Содержимое кейса</Box>
                <Divider className="admin-cases__divider" />
                <Box className="admin-cases__modal-skins">
                  {isAddSkinActive ? (
                    <>
                      <AddSkinForm setAddSkinFormActive={setAddSkinActive} addItem={addItem} id={createdElementId} editableCase={editableCase}/>
                    </>
                  ) : (
                    <>
                      <AddSkinButton onClick={() => setAddSkinActive(!isAddSkinActive)} />
                    </>
                  )}
                  {items?.map((item: TItem, index: number) => {
                    return <Skin item={item} key={index} index={index} changeItem={changeItem} deleteItem={deleteItem} />;
                  })}
                </Box>
              </>
            :
              <>
              <CreateCaseButton onClick={createCase}/> 
              </>
          }
        </FormProvider>
        <Divider className="admin-cases__divider" />
        <ButtonBasic type="submit" className="admin" sx={{ margin: '0 25px 0 auto', display: 'block' }}>
          Сохранить
        </ButtonBasic>
      </form>
    </>
  );
};