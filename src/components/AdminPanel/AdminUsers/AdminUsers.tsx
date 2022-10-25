import React from 'react';
import { UsersTable } from './UsersTable';

export const AdminUsers = () => {
  return (
    <>
      <p className="admin-users__title">Модерация пользователей</p>
      <UsersTable />
    </>
  );
};
