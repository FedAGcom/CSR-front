import { SxProps, Select as MUISelect, SelectProps} from '@mui/material';
import { forwardRef } from 'react';

export const AdminSelect = forwardRef<JSX.Element, SelectProps>(function Select(props: SelectProps, ref) {
  const selectStyles: SxProps = {
    boxSizing: 'border-box',
    height: '38px',
    borderRadius: '5px',
    width: '100%',
    color: '#8A8A8A',
    background: 'transparent',
    border: '1px solid #fff',
    fontFamily: 'inherit',
    fontSize: '16px',
    lineHeight: '19px',
    '& div': {
      padding: '9px 15px',
    },
    '& svg path': {
      fill: '#fff',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
      outline: 'none !important',
    },
    '&.Mui-focused': {
      color: '#fff',
    },
    '&.Mui-error': {
      border: '1px solid #FB0000',
    },
  };

  return (
    <MUISelect 
      {...props} 
      sx={{ ...selectStyles, ...props.sx }} 
      ref={ref}
    />
  );
});