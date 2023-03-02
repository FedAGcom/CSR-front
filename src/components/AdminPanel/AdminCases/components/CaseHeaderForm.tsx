import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import { AdminInput } from './AdminInput';
import { AddImageButton } from './AddImageButton';
import { TEditableCase } from './types';
import { FC, useState, useEffect } from 'react';


type TCaseHeaderFormProps = {
  editableCase: TEditableCase | null | undefined;
  setFile: (string: string | ArrayBuffer | null) => void;
  getInputValue: (values:{price: string, title: string}) => void;

};

export const CaseHeaderForm: FC<TCaseHeaderFormProps> = ({ editableCase, setFile , getInputValue  }) => {
  const { register } = useFormContext();
  const [title , settitle] = useState('')
  const [price , setPrice] = useState('')

  const handelChange = (e: any, callback:any)  => {callback(e.target.value)}
  
  useEffect(()=>{
    getInputValue({price, title})
  }, [price, title])

  return (
    <Box className="case-header-form">
      <Box className="case-header-form__form">
        <Box>Название</Box>
        <AdminInput
          defaultValue={editableCase ? editableCase.title : null}
          type="text"
          placeholder="Название кейса"
          {...register('title' , {
            onChange:(e) => { handelChange(e , settitle)},
          })}
        />
      </Box>
      <Box className="case-header-form__form">
        <Box>Стоимость</Box>
        <AdminInput
          defaultValue={editableCase ? editableCase.price : null}
          type="string"
          placeholder="Сумма"
          {...register('price' , {
            onChange:(e) => { handelChange(e , setPrice)},
          })}
        />
      </Box>
      <AddImageButton setFileToForm={setFile} editableCase={editableCase} />
    </Box>
  );
};