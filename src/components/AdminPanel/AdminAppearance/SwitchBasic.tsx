import { styled, Switch, SwitchProps } from '@mui/material';
import React, { forwardRef } from 'react';

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 62,
  height: 27,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(33px)',
      '& .MuiSwitch-thumb': {
        color: '#fff',
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#B81034',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
  },

  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
    color: '#898989',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#CBCBCB' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '47%',
      transform: 'translateY(-50%)',
    },
    '&:before': {
      content: '"Да"',
      left: 4,
      fontSize: '14px',
    },
    '&:after': {
      content: '"Нет"',
      right: 3,
      color: '#898989',
      fontSize: '14px',
    },
  },
}));

export const SwitchBasic = forwardRef(function SwitchBasic(props, ref) {
  return <CustomSwitch defaultChecked {...props} inputRef={ref} sx={{ m: 1 }} />;
});
