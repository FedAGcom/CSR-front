import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import { AdminInput } from './AdminInput';
import { AddImageButton } from './AddImageButton';
import { TEditableCase } from './types';

type TCaseHeaderFormProps = {
  editableCase: TEditableCase | null | undefined;
  setFile: (file: File) => void;
};

export const CaseHeaderForm = ({ editableCase, setFile }: TCaseHeaderFormProps) => {
  const { register } = useFormContext();

  return (
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
      <AddImageButton setFileToForm={setFile} />
    </Box>
  );
};
