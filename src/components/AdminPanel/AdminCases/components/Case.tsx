import { Box } from '@mui/material';
import { FC } from 'react';
import { TCase, TEditableCase } from './types';

type TCaseProps = {
  caseItem: TCase;
  onClick: () => void;
  actualCase: TEditableCase;
};

export const Case: FC<TCaseProps> = ({ caseItem, onClick, actualCase }) => {
  const src = actualCase?.image ? actualCase.image : 'https://app.certcentral.com/static/frontend/img/no-image.png';

  return (
    <Box className="admin-case" onClick={onClick}>
      <Box className="admin-case__title">{`Кейс "${caseItem.title}"`}</Box>
      <Box component="img" src={src} alt="case image" height="115px" className="admin-case__image"></Box>
    </Box>
  );
};
