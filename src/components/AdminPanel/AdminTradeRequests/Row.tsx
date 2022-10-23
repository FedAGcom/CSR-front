import { memo } from 'react';
import { TableRow, TableCell } from '@mui/material';
import { ButtonBasic } from '../../index';
import { ITradeRequest } from './types';

interface IRowProps extends ITradeRequest {
  index: number
  onOpen: (index: number) => void
}

function Row({index, onOpen, id, num, nick, email, tradeUrl, items}: IRowProps) {
  return (
    <TableRow key={id}>
      <TableCell>{num}</TableCell>
      <TableCell>{nick}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className={tradeUrl ? 'withUrl' : 'withoutUrl'}>{tradeUrl ? 'Есть' : 'Нет'}</TableCell>
      <TableCell>{items.length}</TableCell>
      <TableCell>
        <ButtonBasic className='text' onClick={() => onOpen(index)}>Открыть</ButtonBasic>
      </TableCell>
    </TableRow>
  )
}

export default memo(Row);