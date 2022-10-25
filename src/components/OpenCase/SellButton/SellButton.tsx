import { Button, SxProps } from '@mui/material';
import { SellBtn } from '../../svg';

const button: SxProps = {
  gap: '8px',
  width: '226px',
  height: '52px',
  color: '#B81034',
  textTransform: 'initial',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '22px',
  background: '#24232A',
  borderRadius: '10px',
  border: '1px solid #B81034',
  boxShadow: '0px 0px 10px #BE2E4D',
  transition: '0.4s easy',
  '&:hover': {
    backgroundColor: '#D2002D',
    color: '#FFFFFF',
  },
  '&:hover svg': {
    fill: '#FFFFFF',
  },
};

export const SellButton = () => {
  return (
    <Button startIcon={<SellBtn />} sx={button}>
      Продать
    </Button>
  );
};
