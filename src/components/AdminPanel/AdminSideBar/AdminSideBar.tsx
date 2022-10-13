import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { CasesIcon, Money, PromoCode, UsersIcon, Logs, Support, Settings, AdminExit } from '../../svg';
import { AdminSettingsModal } from '../AdminSettings/AdminSettingsModal';
import { CommonBtn } from '../AdminSettings/AdminSettings';

export const AdminSideBar = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const setActive = (index: number) => {
    return activeIcon === index ? '#e4b8b8' : ' #fff';
  };

  const [isExit, setExit] = useState<boolean>(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      text: 'Пользователи',
      en: 'users',
      icon: <UsersIcon stroke={setActive(0)} />,
    },
    {
      text: 'Кейсы',
      en: 'create-case',
      icon: <CasesIcon fill={setActive(1)} />,
    },
    {
      text: 'Промокоды',
      en: 'promocodes',
      icon: <PromoCode fill={setActive(2)} />,
    },
    {
      text: 'Выдача баланса',
      en: 'balance',
      icon: <Money fill={setActive(3)} />,
    },
    {
      text: 'Логи',
      en: 'logs',
      icon: <Logs fill={setActive(4)} />,
    },
    {
      text: 'Тех.поддержка',
      en: 'tech-support',
      icon: <Support fill={setActive(5)} />,
    },
    {
      text: 'Настройки',
      en: 'settings',
      icon: <Settings fill={setActive(6)} />,
    },
  ];

  return (
    <Drawer className="admin-panel-drawer" variant="permanent" anchor="left">
      <Box className="admin-panel-icon__wrapper">
        <Box className="admin-panel-icon__box"></Box>
        <Typography className="admin-panel-icon__title">Admin</Typography>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <ListItem className="admin-panel-items" key={item.text} disablePadding>
            <NavLink
              onClick={() => setActiveIcon(index)}
              className={({ isActive }) => (isActive ? 'admin-panel-link__choose' : 'admin-panel-link')}
              to={`/admin/${item.en}`}
            >
              <ListItemIcon className="admin-panel-items__icon">{item.icon}</ListItemIcon>
              <ListItemText primary={<Typography className="admin-panel-items__text">{item.text}</Typography>} />
            </NavLink>
          </ListItem>
        ))}
        <ListItem className="admin-panel-items" disablePadding>
          <NavLink className="admin-panel-link" to="#">
            <ListItemIcon className="admin-panel-items__icon">
              <AdminExit />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ color: '#FB0000' }} className="admin-panel-items__text" onClick={() => setExit(true)}>
                  Выход
                </Typography>
              }
            />
          </NavLink>
        </ListItem>

        <AdminSettingsModal
          open={isExit}
          onClose={() => setExit(false)}
          title="Выход из панели"
          subtitle="Вы точно хотите выйти из панели администратора?"
        >
          <div className="admin-settings__exit">
            <CommonBtn className="outlined" btnName="Отменить" onClick={() => setExit(false)} />
            <CommonBtn btnName="Выйти" onClick={() => navigate('/')} />
          </div>
        </AdminSettingsModal>
      </List>
    </Drawer>
  );
};
