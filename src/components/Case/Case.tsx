import { Box } from '@mui/material';
import { caseImage } from '../images';

export const Case = () => {
  // get from backend???
  const price = 350;
  const title = 'Засекреченноe';

  return (
    <Box className="case block__item">
      <Box className="case__image"></Box>
      <Box component="img" src={caseImage} alt="case image"></Box>
      <Box className="case__price">{price} &#8381;</Box>
      <Box className="case__title">{title}</Box>
    </Box>
  );
};
