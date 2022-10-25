import { Box } from '@mui/material';
import { EditImageIcon, PlusIconAdmin } from '../../../svg';
import { ChangeEvent, useState } from 'react';

type TAddImageButton = {
  setFileToForm: (file: File) => void;
};

export const AddImageButton = ({ setFileToForm }: TAddImageButton) => {
  const [isImage, setImage] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>();

  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(true);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
      setFileToForm(e.target.files[0]);
    }
  };

  // console.log('IMAGE', imageSrc);
  // console.log('FILE', file);

  return (
    <>
      {isImage ? (
        <Box className="case-header-form__form">
          <Box>Изображение кейса</Box>
          <Box className="case-header-form__add-image-button change">
            <img alt="" width="50px" src={`${imageSrc}`}></img>
            <label htmlFor="input-file" className="edit-image-icon">
              <EditImageIcon />
            </label>
          </Box>
          <input id="input-file" type="file" accept="image/*" onChange={imageHandler} style={{ display: 'none' }} />
        </Box>
      ) : (
        <Box className="case-header-form__form">
          <Box>Изображение кейса</Box>
          <label htmlFor="input-file" className="case-header-form__add-image-button">
            <PlusIconAdmin />
            <Box>
              Добавить
              <br />
              изображение
            </Box>
          </label>
          <input id="input-file" type="file" accept="image/*" style={{ display: 'none' }} onChange={imageHandler} />
        </Box>
      )}
    </>
  );
};
