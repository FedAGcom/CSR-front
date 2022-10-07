import { Radio as MUIRadio, RadioProps, SxProps } from '@mui/material';
import { RadioCheckedIcon, RadioUncheckedIcon } from '../../svg/index';

export const RadioBtn = (props: RadioProps) => {
  const styles: SxProps = {
    padding: 0,
    background: '#FFF',
    '&:hover': { backgroundColor: '#e1de2f' },
  };

  return (
    <MUIRadio
      {...props}
      icon={<RadioUncheckedIcon />}
      checkedIcon={<RadioCheckedIcon />}
      disableRipple={true}
      sx={{ ...styles, ...props.sx }}
    />
  );
};
