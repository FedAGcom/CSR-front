import { SxProps, Select as MUISelect, SelectProps } from '@mui/material';

function Select(props: SelectProps) {
  const SelectStyles: SxProps = {
    boxSizing: 'border-box',
    borderRadius: '5px',
    width: '100%',
    color: '#8A8A8A',
    background: 'transparent',
    border: '1px solid #fff',
    fontFamily: 'inherit',
    fontSize: '16px',
    lineHeight: '19px',
    padding: '0 !important',
    '& div': {
      padding: '12px 15px',
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

  return <MUISelect {...props} sx={{ ...SelectStyles, ...props.sx }} />;
}

export default Select;
