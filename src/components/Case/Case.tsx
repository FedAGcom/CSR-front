import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { caseImage } from '../images';
import { useAppSelector } from '../../store';
import { rubToUsd } from '../../translations/rubToUsd';

interface ICaseProps {
  id: number;
  img: string;
  title: string;
  price?: number;
  disabled?: boolean;
}

export const Case = (props: ICaseProps) => {
  const currency = useAppSelector(state => state.userSlice.currency);
  const navigate = useNavigate();

  const sign = currency === 'USD' ? "$" : '₽';
  console.log(currency);

  return (
    <Box className="case block__item" onClick={() => navigate('/open-case' + '/' + props.id)}>
      <Box className="case__image"></Box>
      <Box
        component="img"
        src={props.img ? props.img : caseImage}
        alt="case image"
        sx={{ width: '255px', height: '255px', overflow: 'hidden' }}
      ></Box>
      <Box className="case__price">{rubToUsd(props.price, currency)} {sign}</Box>
      <Box className="case__title">{props.title}</Box>
    </Box>
  );
};

Case.defaultProps = {
  disabled: true,
  title: 'Тестовый кейс',
  price: 100,
  id: Math.random(),
  img: caseImage,
};
