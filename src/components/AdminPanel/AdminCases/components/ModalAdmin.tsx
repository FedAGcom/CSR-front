import { FC } from 'react';
import { Modal as MuiModal, Box, IconButton, Divider } from '@mui/material';
import { CloseModalAdminIcon } from '../../../svg';
import type { SxProps } from '@mui/material';

const modalContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

const modalContent: SxProps = {
  borderRadius: '10px',
  backgroundColor: '#2D2B34',
  outline: 'none',
  width: '790px',
  padding: '30px',
};

const header: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 25px 20px 25px',
};

type TModalBasicProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string
};

export const ModalAdmin: FC<TModalBasicProps> = ({ open, onClose, children, title }) => {
  return (
    <MuiModal open={open} onClick={onClose}>
      <Box sx={modalContainer}>
        <Box sx={modalContent} onClick={(e) => e.stopPropagation()}>
          <Box sx={header}>
            <Box sx={{fontSize: '20px', lineHeight: '24px'}}>{title}</Box>
            <IconButton onClick={onClose} sx={{padding: 0}}>
              <CloseModalAdminIcon />
            </IconButton>
          </Box>
          <Divider sx={{backgroundColor: '#BDBDBD', marginBottom: '20px'}}/>
          {children}
        </Box>
      </Box>
    </MuiModal>
  );
};