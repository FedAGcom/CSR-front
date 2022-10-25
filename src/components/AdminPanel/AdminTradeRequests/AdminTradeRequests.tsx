import { useState, useCallback } from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Row from './Row';
import TradeRequestsModal from './TradeRequestModal';
import { titleStyles, tableStyles } from './styles';
import { tradeRequests } from '../../../mocks';

export function AdminTradeRequests() {
  const [requestIndex, setRequestIndex] = useState<null | number>(null);

  const openRequestHandler = useCallback(
    function (requestIndex: number) {
      setRequestIndex(requestIndex);
    },
    [setRequestIndex],
  );

  function confirmHandler() {
    console.log('Confirm');
    setRequestIndex(null);
  }

  return (
    <Box>
      <Typography component="h1" sx={titleStyles}>
        Запросы на трейд
      </Typography>

      <TableContainer>
        <Table sx={tableStyles}>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Ник</TableCell>
              <TableCell>Почта</TableCell>
              <TableCell>Трейд ссылка</TableCell>
              <TableCell>Кол-во скинов</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradeRequests.map((request, index) => {
              return <Row key={request.id} {...request} index={index} onOpen={openRequestHandler} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {requestIndex || requestIndex === 0 ? (
        <TradeRequestsModal
          open={requestIndex || requestIndex === 0 ? true : false}
          onClose={() => setRequestIndex(null)}
          onConfirm={confirmHandler}
          {...tradeRequests[requestIndex]}
        />
      ) : null}
    </Box>
  );
}
