import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ButtonBasic } from '../../components';
import { ArrowBack } from '../svg';

export const ButtonBackToMain = () => {
  const navigate = useNavigate();
  return (
    <Box className="button-back-to-main">
      <ButtonBasic className="text" startIcon={<ArrowBack />} onClick={() => navigate('/')}>
        Вернуться на главную
      </ButtonBasic>
    </Box>
  );
};
