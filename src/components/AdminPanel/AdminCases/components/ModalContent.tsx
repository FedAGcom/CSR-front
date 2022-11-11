import { useForm, FormProvider } from 'react-hook-form';
import { Box, Divider } from '@mui/material';
import { ButtonBasic } from '../../../BasicComponents';
import { CaseHeaderForm, AddSkinButton, AddSkinForm } from './';
import { FC, useState } from 'react';
import { Skin } from './Skin';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TEditableCase, TItem } from './types';
import axios from 'axios';
import { token } from '../token';

type TCaseInputs = {
  title: string;
  price: number;
};

type TModalContentProps = {
  editableCase: TEditableCase | null | undefined;
  setModalOpen: (value: boolean) => void;
  getCases: () => void;
};

export const ModalContent: FC<TModalContentProps> = ({ editableCase, setModalOpen, getCases }) => {
  const [isAddSkinActive, setAddSkinActive] = useState(false);
  const [items, setItems] = useState(editableCase ? editableCase.packItemsList : []);
  const [file, setFile] = useState<string | ArrayBuffer | null | undefined>(editableCase ? editableCase.image : '');

  const addItem = (item: TItem) => {
    if (Array.isArray(items)) {
      setItems([...items, item]);
    } else {
      setItems([item]);
    }
  };

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

  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
  });

  const methods = useForm<TCaseInputs>({ resolver: yupResolver(schema) });

  //TODO заменить правильными запросами с правильным токеном
  const onSubmit = async (data: TCaseInputs) => {
    if (editableCase) {
      const obj = { id: editableCase.id, title: data.title, price: data.price, items: items, file: file };
      await axios
        .put('http://csgofarm.online/api/v1/packs', obj, {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        })
        .then(() => setModalOpen(false));
    } else {
      const obj = { title: data.title, price: data.price, items: items, file: file };
      await axios
        .post('http://csgofarm.online/api/v1/packs', obj, {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        })
        .then(() => setModalOpen(false));
    }
    getCases();
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CaseHeaderForm editableCase={editableCase} setFile={setFile} />
          <Box className="admin-cases__modal-subtitle">Содержимое кейса</Box>
          <Divider className="admin-cases__divider" />
          <Box className="admin-cases__modal-skins">
            {isAddSkinActive ? (
              <AddSkinForm setAddSkinFormActive={setAddSkinActive} addItem={addItem} />
            ) : (
              <AddSkinButton onClick={() => setAddSkinActive(!isAddSkinActive)} />
            )}
            {items?.map((item: TItem, index: number) => {
              return <Skin item={item} key={index} index={index} changeItem={changeItem} deleteItem={deleteItem} />;
            })}
          </Box>
        </FormProvider>
        <Divider className="admin-cases__divider" />
        <ButtonBasic type="submit" className="admin" sx={{ margin: '0 25px 0 auto', display: 'block' }}>
          Сохранить
        </ButtonBasic>
      </form>
    </>
  );
};
