import { Box, InputLabel } from '@mui/material';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { InputBasic } from '../../BasicComponents';
import { EditIcon } from '../../svg';
import { useDispatch } from 'react-redux';
import {
  getBackgroundCase,
  getBackgroundMainBottom,
  getFooterLogo,
  getHeaderLogo,
  getTextImage,
} from '../../../store/slices/appearanceSlice';

interface IInputTypeFile {
  htmlFor: string;
  id: string;
  registerName: string;
  children: ReactNode;
}

export const InputTypeFile = ({ htmlFor, id, children }: IInputTypeFile) => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>();
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      switch (id) {
        case 'textImage':
          dispatch(getTextImage(reader.result));
          break;
        case 'backgroundCase':
          dispatch(getBackgroundCase(reader.result));
          break;
        case 'backgroundMainBottom':
          dispatch(getBackgroundMainBottom(reader.result));
          break;
        case 'footerLogo':
          dispatch(getFooterLogo(reader.result));
          break;
        case 'headerLogo':
          dispatch(getHeaderLogo(reader.result));
          break;
      }
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Box className="labelWrapper">
      {imageSrc ? <img style={{ width: '100%', height: '100%' }} src={`${imageSrc}`} /> : children}
      <InputLabel htmlFor={htmlFor}>
        <EditIcon />
      </InputLabel>
      <InputBasic id={id} type="file" onChange={handleChange} />
    </Box>
  );
};
