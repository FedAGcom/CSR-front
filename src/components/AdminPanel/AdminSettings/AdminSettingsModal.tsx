import React from 'react';
import { ModalBasic } from '../../index';

interface IPasswordModal {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const AdminSettingsModal: React.FC<IPasswordModal> = ({ open, onClose, title, subtitle, children }) => {
  return (
    <ModalBasic open={open} onClose={onClose} style={{ width: '540px', padding: '18px 18px 30px 18px' }}>
      <div className="admin-settings__modal">
        <p className="admin-settings__modal-title">{title}</p>
        <p className="admin-settings__modal-subtitle">{subtitle}</p>
        {children}
      </div>
    </ModalBasic>
  );
};
