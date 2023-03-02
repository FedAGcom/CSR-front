import { Box } from '@mui/system';
import { FC } from 'react';

type TCreateCaseButton = {
    onClick: () => void;
  };

export const CreateCaseButton: FC<TCreateCaseButton> = ({onClick}) => {
  return (
        <Box className="add-skin-button" onClick={onClick}>
          <Box>Создать Кейс</Box>
        </Box>
    )
}