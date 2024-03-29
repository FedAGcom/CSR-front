import { FC } from 'react';
import { Modal as MuiModal, ModalProps, Box, IconButton } from '@mui/material';
import { CloseIcon } from '../../svg';
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

const modalContentAdmin: SxProps = {
  borderRadius: '10px',
  backgroundColor: '#2D2B34',
  outline: 'none',
  width: '790px',
  padding: '30px',
};

const closeButton: SxProps = {
  textAlign: 'end',
};

const closeButtonAdmin: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingBottom: '15px',
  borderBottom: '1px solid #BDBDBD',
};

export const ModalBasic: FC<ModalProps> = (props) => {
  return (
    <MuiModal {...props}>
      <Box sx={modalContainer}>
        <Box sx={modalContent} style={props.style} onClick={(e) => e.stopPropagation()}>
          <Box sx={closeButton}>
            <IconButton onClick={(e) => props.onClose && props.onClose(e, 'escapeKeyDown')} className="modal-close">
              <CloseIcon />
            </IconButton>
          </Box>
          {props.children}
        </Box>
      </Box>
    </MuiModal>
  );
};

type TModalUsersAdminProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  id: number;
  name: string;
};

export const ModalUsersAdmin: FC<TModalUsersAdminProps> = ({ open, onClose, children, name, id }) => {
  return (
    <MuiModal open={open} onClick={onClose}>
      <Box sx={modalContainer}>
        <Box sx={modalContentAdmin} onClick={(e) => e.stopPropagation()}>
          <Box sx={closeButtonAdmin}>
            <Box className="aum__title">
              <span>{name}</span> (#{id})
            </Box>
            <IconButton onClick={onClose} className="modal-close">
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Box>
    </MuiModal>
  );
};

type TModalPromoProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  name: string;
  abc?: number;
};

export const ModalPromo: FC<TModalPromoProps> = ({ open, onClose, children, name }) => {
  return (
    <MuiModal open={open} onClick={onClose}>
      <Box sx={modalContainer}>
        <Box sx={modalContentAdmin} onClick={(e) => e.stopPropagation()}>
          <Box sx={closeButtonAdmin}>
            <Box className="aum__title">
              Промокод <span>{name}</span>
            </Box>
            <IconButton onClick={onClose} className="modal-close">
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </Box>
    </MuiModal>
  );
};
