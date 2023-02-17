import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ButtonBasic } from '../../components';
import { ArrowBack } from '../svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ButtonBackToMain = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
    <Box className="button-back-to-main">
    {matchesUpLg && <ButtonBasic className="text" startIcon={<ArrowBack />} onClick={() => navigate('/')}>
        Вернуться на главную
      </ButtonBasic> }
    </Box>
    </>
  );
};
