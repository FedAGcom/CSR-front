import React from 'react';
import { Checkbox as MUICheckbox, CheckboxProps, SxProps } from '@mui/material';
import { CheckboxChecked, CheckboxUnchecked } from '../../svg/index';

export function Checkbox(props: CheckboxProps) {
  const styles: SxProps = {
    fontSize: 20,
    padding: 0,
    background: '#FFF',
  };

  return (
    <MUICheckbox
      {...props}
      icon={<CheckboxUnchecked />}
      checkedIcon={<CheckboxChecked />}
      disableRipple={true}
      sx={{ ...styles, ...props.sx }}
    />
  );
}
