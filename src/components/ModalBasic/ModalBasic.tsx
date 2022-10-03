import { FC } from 'react';
import { Modal as MuiModal, Box, IconButton } from '@mui/material';
import { CloseIcon } from '../svg';
import type { SxProps } from '@mui/material';

const modalContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

const modalContent: SxProps = {
  borderRadius: '20px',
  backgroundColor: '#2D2B34',
  outline: 'none',
  width: '730px',
  padding: '25px 25px 60px 25px',
};

const closeButton: SxProps = {
  textAlign: 'end',
};

type TModalBasicProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalBasic: FC<TModalBasicProps> = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open}>
      <Box sx={modalContainer}>
        <Box sx={modalContent}>
          <Box sx={closeButton}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Box>
    </MuiModal>
  );
};
