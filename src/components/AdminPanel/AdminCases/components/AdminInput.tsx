import { forwardRef } from 'react';
import { Input as MUIInput, InputProps, SxProps } from '@mui/material';

export const AdminInput = forwardRef<JSX.Element, InputProps>(function InputBasic(props: InputProps, ref) {
  const inputStyles: SxProps = {
    boxSizing: 'border-box',
    borderRadius: '5px',
    padding: '10px 15px 9px 15px',
    width: '100%',
    color: '#8A8A8A',
    border: '1px solid #fff',
    height: '38px',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiInput-input': {
      padding: 0,
      lineHeight: '19px',
      textTransform: 'initial',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 500,
      fontSize: '16px',
    },
    '&.Mui-focused': {
      border: '1px solid #B81034',
      color: '#fff',
      boxShadow: '0px 0px 10px 2px rgba(184, 16, 52, 0.25)',
    },
  };

  return (
    <MUIInput 
      {...props} 
      autoComplete="off" 
      ref={ref} 
      disableUnderline={true} 
      sx={{ ...inputStyles, ...props.sx }} 
    />
  );
});
