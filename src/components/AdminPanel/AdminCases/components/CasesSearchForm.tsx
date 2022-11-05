import { Box } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { ButtonBasic } from '../../..';
import { AdminInput } from './AdminInput';

type TCasesSearchFormProps = {
  setSearchQuery: (value: string) => void;
};

export const CasesSearchForm: FC<TCasesSearchFormProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    setSearchQuery(query);
  };

  return (
    <Box className="admin-cases__search-form">
      <AdminInput type="search" placeholder="Название кейса" onChange={handleChange} />
      <ButtonBasic className="admin" type="submit" onClick={handleClick}>
        Найти
      </ButtonBasic>
    </Box>
  );
};
