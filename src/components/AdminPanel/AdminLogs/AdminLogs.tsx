import { MenuItem, Select, SelectChangeEvent, SxProps, Table, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { ButtonBasic, InputBasic } from '../../BasicComponents';

const btn = {
  width: '136px',
  height: '38px',
  borderRadius: '5px',
};

const input = {
  width: '634px',
  height: '38px',
};

const select: SxProps = {
  width: '230px',
  height: '38px',
  background: '#1C1B21',
  border: '1px solid #FFFFFF',
  borderRadius: '5px',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#808080',
  marginTop: '10px',
};

// const users = [
//   { id: 1, name: 'vladis192@mail.ru', trade: true, balance: 200 },
//   { id: 2, name: 'dis192@mail.ru', trade: true, balance: 200 },
//   { id: 3, name: 'vldis192@mail.ru', trade: true, balance: 200 },
//   { id: 4, name: 'vls12@mail.ru', trade: true, balance: 200 },
//   { id: 5, name: 'vla@mail.ru', trade: false, balance: 200 },
//   { id: 6, name: 'vladis2@mail.ru', trade: true, balance: 200 },
// ];

const logs = {
  id: 1,
  logs: [
    { date: '211', action: 'Выполнил вход' },
    { date: '2131', action: 'Выполнил вход' },
    { date: '21321', action: 'Выполнил вход' },
    { date: '2111', action: 'Выполнил вход' },
    { date: '21881', action: 'Выполнил вход' },
  ],
};

export const AdminLogs = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  return (
    <div className="admin-logs">
      <h3 className="admin-logs__title">Логи</h3>

      <div className="admin-logs__search">
        <p className="admin-logs__search-title">Поиск</p>

        <div className="admin-logs__search-block">
          <InputBasic placeholder="Пользователь: номер или никнейм" style={input} />
          <ButtonBasic className="primary" onClick={() => alert('dddddd')} style={btn}>
            Найти
          </ButtonBasic>
        </div>

        <div className="admin-logs__search-selects">
          <Select
            sx={select}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">Все</MenuItem>
            <MenuItem value={10}>KekLol</MenuItem>
            <MenuItem value={20}>LolKek</MenuItem>
            <MenuItem value={30}>ThirtyShop</MenuItem>
          </Select>

          <Select
            sx={select}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">Сегодня</MenuItem>
            <MenuItem value={10}>За три дня</MenuItem>
            <MenuItem value={20}>LolKek</MenuItem>
            <MenuItem value={30}>ThirtyShop</MenuItem>
          </Select>
        </div>
      </div>

      <div className="admin-logs__user">Выбранный пользователь</div>

      <Table className="admin-users">
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
          <TableCell align="center" width="12%" className="admin-users__modal">
            Открыть
          </TableCell>
        </TableRow>
      </Table>

      <div className="admin-logs__logs-title">Логи</div>
      <div className="admin-logs__logs-actions-title">
        <div>Время</div>
        <div>Действие</div>
      </div>

      {logs.logs.map((key) => (
        <div key={key.date} className="admin-logs__logs-actions">
          <div className="admin-logs__logs-time">{key.date}</div>
          <div>{key.action}</div>
        </div>
      ))}

      <div className="admin-logs__logs-end">Конец логов</div>
    </div>
  );
};
