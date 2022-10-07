import { Box } from '@mui/material';
import { HeaderAndFooter, PrizeBlock } from '../../components';
import { FAQ } from './FAQ';
import { TechSupportForm } from './TechSupportForm';

export const TechSupportPage = () => {
  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Box className="tech-support">
          <Box className="tech-support__title">Техническая поддержка</Box>
          <Box className="tech-support__subtitle">
            Воспользуйтесь ответами на <span>часто задаваемые вопросы</span>,
            <br />а если не найдёте интересующий вас ответ, будем рады помочь!
          </Box>
          <TechSupportForm />
          <FAQ />
        </Box>
      </HeaderAndFooter>
    </>
  );
};
