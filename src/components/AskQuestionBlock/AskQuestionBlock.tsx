import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ButtonBasic } from '../../components';

export const AskQuestionBlock = () => {
  const navigate = useNavigate();

  return (
    <Box className="ask-question">
      <Box className="ask-question__text">
        Не нашли ответ на вопрос?&nbsp;
        <Box component="span">Задайте его нам!</Box>
      </Box>
      <ButtonBasic className="primary" onClick={() => navigate('/tech-support')}>
        Задать вопрос
      </ButtonBasic>
    </Box>
  );
};
