import { Box } from '@mui/material';
import { ButtonBasic } from '../../..';
import { AdminInput } from './AdminInput';

export const CasesSearchForm = () => {
  return (
    <Box className="admin-cases__search-form">
      <AdminInput type="search" placeholder="Название кейса" />
      <ButtonBasic className="admin" type="submit">
        Найти
      </ButtonBasic>
    </Box>
  );
};