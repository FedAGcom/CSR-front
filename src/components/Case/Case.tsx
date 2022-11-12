import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { caseImage } from '../images';

interface ICaseProps {
  id: number;
  img: string;
  title: string;
  price?: number;
  disabled?: boolean;
}

export const Case = (props: ICaseProps) => {
  
  const navigate = useNavigate()

  return (
    <Box className="case block__item" onClick={() => navigate('/open-case' + '/' + props.id)}>
      <Box className="case__image"></Box>
      <Box component="img" src={props.img ? props.img : caseImage} alt="case image" sx={{width: "255px"}}></Box>
      <Box className="case__price">{props.price} &#8381;</Box>
      <Box className="case__title">{props.title}</Box>
    </Box>
  );
};

Case.defaultProps = {
  disabled: true,
  title: "Тестовый кейс",
  price: 100,
  id: Math.random(),
  img: caseImage
};