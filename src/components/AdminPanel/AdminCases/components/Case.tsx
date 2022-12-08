import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import { deletePack } from '../../../../store/slices/packsSlice';
import { ButtonBasic, ModalBasic } from '../../../BasicComponents';
import { CloseModalAdminIcon } from '../../../svg';
import { CommonBtn } from '../../AdminSettings/AdminSettings';
import { AdminSettingsModal } from '../../AdminSettings/AdminSettingsModal';
import { TCase, TEditableCase } from './types';

type TCaseProps = {
  caseItem: TCase;
  onClick: () => void;
  actualCase: TEditableCase;
  id: number;
};

export const Case: FC<TCaseProps> = ({ caseItem, onClick, actualCase, id }) => {
  const src = actualCase?.image ? actualCase.image : 'https://app.certcentral.com/static/frontend/img/no-image.png';
  const dispatch = useAppDispatch()
  const [isExit, setIsExit] = useState(false)

  const handleDelete = (e : React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsExit(true)
  }
  const handleSubmit = (id: number) => {
    dispatch(deletePack(id))
    setIsExit(false)
  }

  return (
    <>
    <Box className="admin-case" onClick={onClick}>
      <Box className="admin-case__title">{`Кейс "${caseItem.title}"`}</Box>
      <Box component="img" src={src} alt="case image" height="115px" className="admin-case__image"></Box>
      <CloseModalAdminIcon className="admin-case__delete" onClick={handleDelete}/>
      <AdminSettingsModal
          open={isExit}
          onClose={() => setIsExit(false)}
          title=""
          subtitle="Вы точно хотите удалить кейс?"
        >
          <div className="admin-settings__exit">
            <CommonBtn className="outlined" btnName="Нет" onClick={() => setIsExit(false)} />
            <CommonBtn btnName="Да" onClick={() => handleSubmit(id)} />
          </div>
        </AdminSettingsModal>
    </Box>
    </>
  );
};
