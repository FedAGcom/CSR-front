import { Button as MUIButton, ButtonProps, SxProps } from '@mui/material';
import { useSelector } from 'react-redux';
import { getColorButtons } from '../../../store/selectors/getSettingsAppearance';

interface IMyButtonProps extends ButtonProps {
  className?: string;
}

export function HeaderButton(props: IMyButtonProps) {
  const serverColorButtons = useSelector(getColorButtons);

  const btnStyles: SxProps = {
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontFamily: 'Gilroy, sans-serif',
    width: 'auto',
    boxShadow: 'none',
    color: '#fff',
  };

  const loginButton: SxProps = {
    backgroundColor: serverColorButtons ?? '#B81034',
    width: '127px',
    height: '42px',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: '#D2002D',
      boxShadow: 'none',
    },
  };

  const addButton: SxProps = {
    backgroundColor: serverColorButtons ?? '#B81034',
    width: '127px',
    height: '33px',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: '#D2002D',
      boxShadow: 'none',
    },
  };

  const faqButton: SxProps = {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: 'rgba(255, 255, 255, 0.01)',
      boxShadow: 'none',
    },
  };

  let styles = { ...btnStyles };
  if (props.className === 'login-button') styles = { ...styles, ...loginButton };
  if (props.className === 'add-button') styles = { ...styles, ...addButton };
  if (props.className === 'FAQ-button') styles = { ...styles, ...faqButton };

  return <MUIButton {...props} disableRipple={true} sx={{ ...styles, ...props.sx }}></MUIButton>;
}
