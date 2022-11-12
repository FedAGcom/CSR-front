import { useState } from 'react';
import { FAQ, Logo, OnlineAmount, HeaderSteam, HeaderPlusIcon } from '../svg';
import { Box, Avatar, Container } from '@mui/material';
import { HeaderButton } from './HeaderButton/HeaderButton';
import { flagRu } from '../images';
import { LoginModal } from '../index';
import { LocalizationModal } from './LocalizationModal/LocalizationModal';
import { BalanceModal } from '../index';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { useSelector } from 'react-redux';
import { getColorHeaderLeft, getColorHeaderRight } from '../../store/selectors/getSettingsAppearance';

export const Header = () => {
  const { user, isAuth } = useAppSelector((state) => state.userSlice);
  const serverColorHeaderLeft = useSelector(getColorHeaderLeft);
  const serverColorHeaderRight = useSelector(getColorHeaderRight);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [isTradeModalOpen, setTradeModalOpen] = useState<boolean>(false);
  const [isBalanceModalOpen, setBalanceModalOpen] = useState<boolean>(false);
  const handleCloseBalance = () => setBalanceModalOpen(false)
  const handleCloseTrade = () => setTradeModalOpen(false)

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  // get from backend
  const onlineUsers = 666;
  //const userName = user.nickNameSteam;
  const country = 'Россия';
  const currency = 'РУБ';
  //const balanceValue = user.balance;

  // get from redux
  //const isAuth = false;

  return (
    <header className="header" style={{background: `linear-gradient(60deg, ${serverColorHeaderLeft} 50%, ${serverColorHeaderRight} 50%)`}}>
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Box className="header__content">
          <Box className="header__column1">
            <Box className="header__logo" onClick={() => navigate('/')}>
              <Logo />
            </Box>
            <Box className="header__users-online">
              <OnlineAmount />
              <Box component="span">{onlineUsers}</Box>
              <Box>онлайн</Box>
            </Box>
            <HeaderButton
              className="FAQ-button"
              variant="text"
              startIcon={<FAQ />}
              onClick={() => console.log('FAQ page')}
            >
              FAQ
            </HeaderButton>
          </Box>
          <Box className="header__column2">
            <Box className="header__location" onClick={handleModalOpen}>
              <Box className="header__flag" component="img" alt="Country icon" src={flagRu}></Box>
              <Box className="header__country">{country}</Box>
              <Box className="header__currency">{currency}</Box>
            </Box>
            <LocalizationModal isOpen={isModalOpen} handleClose={handleModalClose}></LocalizationModal>
            {isAuth ? (
              <>
                <Box className="header__user-info" onClick={() => navigate('/account')}>
                  <img className="header__user-avatar" src={user.steamAvatarMedium} alt="" />
                  {/* <Avatar /> */}
                  <Box>
                    <Box className="header__username">{user.nickNameSteam}</Box>
                    <Box className="header__balance">
                      Баланс:
                      <Box component="span" className="header__balance-value">
                        {user.balance?.toLocaleString('ru')}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <BalanceModal open={isBalanceModalOpen} onClose={handleCloseBalance} />
                <HeaderButton className="add-button" variant="contained" startIcon={<HeaderPlusIcon /> } onClick={() => setBalanceModalOpen(true)}>
                  пополнить
                </HeaderButton>
              </>
            ) : (
              <>
                <LoginModal show={show} onClose={() => setShow(false)} />

                <HeaderButton
                  className="login-button"
                  onClick={() => setShow(true)}
                  variant="contained"
                  endIcon={<HeaderSteam />}
                >
                  ВОЙТИ
                </HeaderButton>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </header>
  );
};
