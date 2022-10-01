import { FAQ, Logo, OnlineAmount, HeaderSteam, HeaderPlusIcon } from '../svg';
import { Box, Avatar, Container } from '@mui/material';
import { HeaderButton } from './HeaderButton';
import { flagRu } from '../images';

export const Header = () => {
  // get from backend
  const onlineUsers = 666;
  const userName = 'sladko puknul';
  const country = 'Россия';
  const currency = 'РУБ';
  const balanceValue = 910;

  // get from redux
  const isAuth = false;

  return (
    <header className="header">
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Box className="header__content">
          <Box className="header__column1">
            <Logo />
            <Box className="header__users-online">
              <OnlineAmount />
              <Box component="span">{onlineUsers}</Box>
              <Box>онлайн</Box>
            </Box>
            <HeaderButton className="FAQ-button" variant="text" startIcon={<FAQ />}>
              FAQ
            </HeaderButton>
          </Box>
          <Box className="header__column2">
            <Box className="header__location" onClick={() => console.log('OPEN MODAL select country and currency')}>
              <Box className="header__flag" component="img" alt="Country icon" src={flagRu}></Box>
              <Box className="header__country">{country}</Box>
              <Box className="header__currency">{currency}</Box>
            </Box>
            {isAuth ? (
              <>
                <Box className="header__user-info" onClick={() => console.log('go to user page')}>
                  <Avatar />
                  <Box>
                    <Box className="header__username">{userName}</Box>
                    <Box className="header__balance">
                      Баланс:
                      <Box component="span" className="header__balance-value">
                        {balanceValue}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <HeaderButton className="add-button" variant="contained" startIcon={<HeaderPlusIcon />}>
                  пополнить
                </HeaderButton>
              </>
            ) : (
              <HeaderButton className="login-button" variant="contained" endIcon={<HeaderSteam />}>
                ВОЙТИ
              </HeaderButton>
            )}
          </Box>
        </Box>
      </Container>
    </header>
  );
};
