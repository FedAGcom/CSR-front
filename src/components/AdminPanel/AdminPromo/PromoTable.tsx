import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { Promo } from '../../svg';
import { AdminPromoModal } from './AdminPromoModal';

export const PromoTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Table className="admin-users">
        <TableHead>
          <TableCell align="center" width="10%">
            №
          </TableCell>
          <TableCell align="center" width="15%">
            Промокод
          </TableCell>
          <TableCell align="center" width="25%">
            Что дает
          </TableCell>
          <TableCell align="center" width="25%">
            Кол-во использований
          </TableCell>
          <TableCell align="center" width="15%">
            Валиден до
          </TableCell>
          <TableCell align="center" width="12%">
            Действия
          </TableCell>
        </TableHead>

        <TableBody>
          <div className="create" onClick={open}>
            <div className="create__title">
              <Promo />
              Создать промокод
            </div>
          </div>
          {/* <TableRow className="admin-users__wrapper">
            <TableCell align="center" width="10%">
              22
            </TableCell>
            <TableCell align="center" width="15%" style={{ color: '#B81034' }}>
              FedAG2022
            </TableCell>
            <TableCell align="center" width="25%">
              3 бесплатных кейса
            </TableCell>
            <TableCell align="center" width="25%">
              Неограничено
            </TableCell>
            <TableCell width="15%" align="center">
              15/10/2022
            </TableCell>
            <TableCell align="center" width="12%" className="admin-users__modal" onClick={open}>
              Открыть
            </TableCell>
          </TableRow> */}
          <AdminPromoModal open={isOpen} onClose={() => setIsOpen(false)} name={`FedAG2022`} />
        </TableBody>
      </Table>
    </>
  );
};
