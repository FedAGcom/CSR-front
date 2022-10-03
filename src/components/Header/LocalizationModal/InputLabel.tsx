import { InputLabel as MUIInputLabel, InputLabelProps, SxProps } from '@mui/material';

export function InputLabel(props: InputLabelProps) {
  const inputStyles: SxProps = {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 500,
  };

  return <MUIInputLabel {...props} sx={{ ...inputStyles, ...props.sx }} />;
}
