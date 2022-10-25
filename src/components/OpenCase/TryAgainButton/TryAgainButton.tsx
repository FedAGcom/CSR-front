import { Button, SxProps } from '@mui/material';
import { ReloadBtn } from '../../svg';

interface ITryAgainButtonProps {
  onClick: () => void;
}

const button: SxProps = {
  gap: '8px',
  width: '226px',
  height: '52px',
  textTransform: 'initial',
  color: '#FFFFFF',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '22px',
  background: '#B81034',
  borderRadius: '10px',
  border: '1px solid #B81034',
  boxShadow: '0px 0px 10px #BE2E4D',
  '&:hover': {
    backgroundColor: '#D2002D',
  },
};

export const TryAgainButton = (props: ITryAgainButtonProps) => {
  return (
    <Button {...props} sx={button}>
      <ReloadBtn />
      Открыть снова
    </Button>
  );
};
