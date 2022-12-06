import { Button as MUIButton, ButtonProps, SxProps } from '@mui/material';
import { useSelector } from 'react-redux';
import { getColorButtons } from '../../../store/selectors/getSettingsAppearance';

interface IMyButtonProps extends ButtonProps {
  className?: string;
}

export const ButtonBasic = (props: IMyButtonProps) => {
  const serverColorButtons = useSelector(getColorButtons);

  const btnStyles: SxProps = {
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    padding: '16px 32px',
    lineHeight: '20px',
    textTransform: 'initial',
  };

  const disabled: SxProps = {
    '&:disabled': {
      color: '#737373',
      background: '#24232A',
      border: '2px solid #737373',
    },
  };

  const skinsBtn: SxProps = {
    color: '#fff',
    background: '#737373',
    cursor: 'initial',
    '&:hover': {
      color: '#fff',
      background: '#737373',
    },
  };

  const primary: SxProps = {
    color: '#fff',
    backgroundColor: serverColorButtons ?? '#B81034',
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: '#D2002D',
    },
  };

  const outlined: SxProps = {
    color: '#B81034',
    border: '2px solid #B81034',
    backgroundColor: 'transparent',
    '&:hover': {
      textDecoration: 'initial',
      color: '#D2002D',
      border: '2px solid #D2002D',
      backgroundColor: 'transparent',
    },
  };

  const text: SxProps = {
    padding: '0',
    color: '#fff',
    fontWeight: 400,
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  };

  const adminButton: SxProps = {
    padding: '10px 45px',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#B81034',
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: '#D2002D',
    },
  };

  const supRemoveBtn: SxProps = {
    width: '160px',
    height: '38px',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: 'transparent',
    border: '1px solid #FB0000',
    marginTop: '5px',
    '&:hover': {
      border: '1px solid #ce4d4d',
      color: '#FB0000',
      backgroundColor: '#000',
    },
  };

  let styles = { ...btnStyles };
  if (props.className === 'primary') styles = { ...styles, ...primary };
  else if (props.className === 'outlined') styles = { ...styles, ...outlined };
  else if (props.disabled) styles = { ...styles, ...disabled };
  else if (props.className === 'text') styles = { ...styles, ...text };
  else if (props.className === 'admin') styles = { ...styles, ...adminButton };
  else if (props.className === 'skins') styles = { ...styles, ...skinsBtn };
  else if (props.className === 'supRemoveBtn') styles = { ...styles, ...supRemoveBtn };

  return <MUIButton {...props} disableRipple={false} sx={{ ...styles, ...props.sx }}></MUIButton>;
};
