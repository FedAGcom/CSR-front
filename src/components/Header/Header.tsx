import { useState, useEffect } from 'react';
import { FAQ, Logo, OnlineAmount, HeaderSteam, HeaderPlusIcon } from '../svg';
import { Box, Avatar, Container } from '@mui/material';
import { HeaderButton } from './HeaderButton/HeaderButton';
import { flagRu, flagEn } from '../images';
import { LoginModal } from '../index';
import { LocalizationModal } from './LocalizationModal/LocalizationModal';
import { BalanceModal } from '../index';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { getColorHeaderLeft, getColorHeaderRight, getHeaderLogo } from '../../store/selectors/getSettingsAppearance';
import { useGetUsersCountQuery } from '../../store/slices/statisticsSlise';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import i18next from 'i18next';
import {setCurrency} from '../../store/slices/userSlice';


const languages: Record<string, {name: string, flag: string}> = {
  en: {name: 'English', flag: flagEn},
  ru: {name: 'Русский', flag: flagRu},
}

export const Header = () => {
  const currency = useAppSelector(state => state.userSlice.currency);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { user, isAuth } = useAppSelector((state) => state.userSlice);
  const serverColorHeaderLeft = useSelector(getColorHeaderLeft);
  const serverColorHeaderRight = useSelector(getColorHeaderRight);
  const serverHeaderLogo = useSelector(getHeaderLogo);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [isTradeModalOpen, setTradeModalOpen] = useState<boolean>(false);
  const [isBalanceModalOpen, setBalanceModalOpen] = useState<boolean>(false);
  const handleCloseBalance = () => setBalanceModalOpen(false);
  const handleCloseTrade = () => setTradeModalOpen(false);

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  const { data: users } = useGetUsersCountQuery('');
  const allUsers = users ?? '';
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (i18next.language === 'en') {
      dispatch(setCurrency('USD'));
    } else {
      dispatch(setCurrency('RUB'));
    }
  }, []);

  return (
    <header
      className="header"
      style={{ background: `linear-gradient(60deg, ${serverColorHeaderLeft} 50%, ${serverColorHeaderRight} 50%)` }}
    >
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Box className="header__content">
          <Box className="header__column1">
            <Box className="header__logo" onClick={() => navigate('/')}>
              {serverHeaderLogo ? (
                <Box
                  component="img"
                  style={{ width: '100%', height: '100%' }}
                  src={`${serverHeaderLogo}`}
                  alt="headerImage"
                ></Box>
              ) : (
                <Logo />
              )}
            </Box>
           {matches && <Box className="header__users-online">
              <OnlineAmount className="online-icon"/>
              <Box>{t('header.totalUsers')}:</Box>
              <Box component="span">{allUsers}</Box>
            </Box>}
            {matches && <HeaderButton
              className="FAQ-button"
              variant="text"
              startIcon={<FAQ />}
              onClick={() => navigate('/tech-support')}
            >
              FAQ
            </HeaderButton>}
          </Box>
          <Box className="header__column2">
            <Box className="header__location" onClick={handleModalOpen}>
              <Box className="header__flag" component="img" alt="Country icon" src={languages[i18next.language].flag}></Box>
              <Box className="header__country">{languages[i18next.language].name}</Box>
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
                      {t('header.balance')}:
                      <Box component="span" className="header__balance-value">
                        {user.balance?.toLocaleString('ru')}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {
                  isBalanceModalOpen ?
                  <BalanceModal 
                    open={isBalanceModalOpen} 
                    onClose={handleCloseBalance} 
                  /> :
                  null
                }
                <HeaderButton
                  className="add-button"
                  variant="contained"
                  startIcon={<HeaderPlusIcon />}
                  onClick={() => setBalanceModalOpen(true)}
                >
                  {t('header.topUp')}
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
                  {t('header.signIn')}
                </HeaderButton>
              </>
            )}
          </Box>
        </Box>
      </Container> 
    </header>
  );
};
