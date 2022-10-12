import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import { AdminUsersModal } from './AdminUsersModal';

export const UsersTable = () => {
  const [isOpenModal, setOpen] = useState<boolean>(false);
  const id = 11291;
  const abc = 11291;

  return (
    <Table className="admin-users">
      <TableHead>
        <TableCell width="10%" align="center">
          №
        </TableCell>
        <TableCell width="20%" align="center">
          Ник
        </TableCell>
        <TableCell width="25%" align="center">
          Почта
        </TableCell>
        <TableCell width="11%" align="center">
          Трейд ссылка
        </TableCell>
        <TableCell width="15%" align="center">
          Баланс
        </TableCell>
        <TableCell width="12%" align="center">
          Действие
        </TableCell>
      </TableHead>

      <TableBody>
        <TableRow className="admin-users__wrapper">
          <TableCell align="center" width="10%">
            11291
          </TableCell>
          <TableCell align="center" width="20%">
            Nickname
          </TableCell>
          <TableCell align="center" width="25%">
            vladis192@mail.ru
          </TableCell>
          <TableCell width="11%" style={{ color: '#B81034' }} align="center">
            Есть
          </TableCell>
          <TableCell align="center" width="15%">
            3.900 ₽
          </TableCell>
          <TableCell
            align="center"
            width="12%"
            className="admin-users__modal"
            onClick={() => {
              if (id === abc) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          >
            Открыть
          </TableCell>

          <AdminUsersModal open={isOpenModal} onClose={() => setOpen(false)} id={id} name="Sladko dunul" />
        </TableRow>
        <TableRow className="admin-users__wrapper">
          <TableCell align="center" width="10%">
            11292
          </TableCell>
          <TableCell align="center" width="20%">
            Nickname
          </TableCell>
          <TableCell align="center" width="25%">
            vladis192@mail.ru
          </TableCell>
          <TableCell align="center" width="11%">
            Нет
          </TableCell>
          <TableCell align="center" width="15%">
            3.500 ₽
          </TableCell>
          <TableCell
            align="center"
            width="12%"
            className="admin-users__modal"
            onClick={() => {
              if (id === abc) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          >
            Открыть
          </TableCell>

          <AdminUsersModal open={isOpenModal} onClose={() => setOpen(false)} id={1122} name="Sladko dunul" />
        </TableRow>
      </TableBody>
    </Table>
  );
};
