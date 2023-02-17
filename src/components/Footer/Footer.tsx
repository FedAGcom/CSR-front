import { Grid, Box, Container, Link, Stack } from '@mui/material';
import { FooterKey, FooterNet, FooterPerson, LogoFooter, SocialFacebook, SocialInstagram, SocialSteam } from '../svg';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getColorFooterUp, getColorFooterDown, getFooterLogo } from '../../store/selectors/getSettingsAppearance';
import { useGetOpenCaseCountQuery, useGetUsersCountQuery } from '../../store/slices/statisticsSlise';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


type TFooterStatisticProps = {
  openCases: number | string;
  onlineUsers: number | string;
  totalUsers: number;
};

type TFooterStatisticItemInfo = {
  amount: number | string;
  title: string;
};

type TFooterLink = {
  value: string;
  url: string;
};

const FooterStatisticItemInfo: FC<TFooterStatisticItemInfo> = ({ amount, title }) => {
  return (
    <Box>
      <Box className="footer-statistic-item__amount">{amount.toLocaleString('en-US')}</Box>
      <Box className="footer-statistic-item__title">{title}</Box>
    </Box>
  );
};

const FooterStatistic: FC<TFooterStatisticProps> = ({ openCases, onlineUsers, totalUsers }) => {
  const serverColorFooterUp = useSelector(getColorFooterUp);
  const { t } = useTranslation();

  const theme = useTheme();
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box className="footer-statistic" sx={{ backgroundColor: serverColorFooterUp }}>
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          {matchesDownMd && <Grid item xs={12} md={4} style={{marginBottom: '55px'}}>
              <Box className="footer-statistic-item" style={{justifyContent: 'center'}}>
                <FooterKey />
                <FooterStatisticItemInfo amount={openCases} title={t('footerStatistic.cases')} />
              </Box>
          </Grid> }
          {matchesDownMd &&  <Grid item xs={12} md={4} style={{marginBottom: '55px'}}>
            <Box className="footer-statistic-item" style={{justifyContent: 'center'}}>
              <FooterNet />
              <FooterStatisticItemInfo amount={onlineUsers} title={t('footerStatistic.online')} />
            </Box>
          </Grid> }
          {matchesDownMd && <Grid item xs={12} md={4} style={{marginBottom: '55px'}}>
            <Box className="footer-statistic-item" style={{justifyContent: 'center'}}>
              <FooterPerson />
              <FooterStatisticItemInfo amount={totalUsers} title={t('footerStatistic.users')} />
            </Box>
          </Grid> }
          
          {!matchesDownMd && <Grid item xs={12} md={4}>
            <Box className="footer-statistic-item">
              <FooterKey />
              <FooterStatisticItemInfo amount={openCases} title={t('footerStatistic.cases')} />
            </Box>
          </Grid> }
          {!matchesDownMd &&  <Grid item xs={12} md={4}>
            <Box className="footer-statistic-item">
              <FooterNet />
              <FooterStatisticItemInfo amount={onlineUsers} title={t('footerStatistic.online')} />
            </Box>
          </Grid> }
          {!matchesDownMd &&   <Grid item xs={12} md={4}>
            <Box className="footer-statistic-item">
              <FooterPerson />
              <FooterStatisticItemInfo amount={totalUsers} title={t('footerStatistic.users')} />
            </Box>
          </Grid> }
        </Grid>
      </Container>
    </Box>
  );
};

const FooterLink: FC<TFooterLink> = ({ value, url }) => {
  return (
    <Box sx={{ marginTop: '5px' }}>
      <Link href={url} underline="hover" color="inherit">
        {value}
      </Link>
    </Box>
  );
};

const FooterInfo = () => {
  const { t } = useTranslation();
  const serverColorFooterDown = useSelector(getColorFooterDown);
  const serverFooterLogo = useSelector(getFooterLogo);
  const theme = useTheme();
  const matchesDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box className="footer-info" sx={{ backgroundColor: serverColorFooterDown }}>
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Grid container direction="row">
          <Grid item xs={12} sm={5}>
            {serverFooterLogo ? (
              <Box
                component="img"
                style={{ width: '160px', height: '44px' }}
                src={`${serverFooterLogo}`}
                alt="headerImage"
              ></Box>
            ) : (
              <LogoFooter />
            )}
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={1} sx={{ marginTop: '10px' }}>
              <Link href="https://www.instagram.com/">
                <SocialInstagram />
              </Link>
              <Link href="https://www.facebook.com/">
                <SocialFacebook />
              </Link>
              <Link href="https://store.steampowered.com/">
                <SocialSteam />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container>
              { matchesDownSm &&  <Grid item xs={12} style={{marginTop: '25px', marginBottom: '25px'}}>
                  <Box className="footer-info__title">{t('footerInfo.serviceInfo.title')}</Box>
                  <FooterLink value={t('footerInfo.serviceInfo.info.verification')} url="#" />
                  <FooterLink value={t('footerInfo.serviceInfo.info.terms_of_Service')} url="/terms-of-service" />
                  <FooterLink value={t('footerInfo.serviceInfo.info.privacy_police')} url="/privacy-policy" />
                  <FooterLink value={t('footerInfo.serviceInfo.info.tech_support')} url="/tech-support" />
              </Grid> }
              { matchesDownSm &&   <Grid item xs={12}  style={{marginTop: '25px', marginBottom: '25px'}}>
                  <Box className="footer-info__title">{t('footerInfo.accountInfo.title')}</Box>
                  <FooterLink value={t('footerInfo.accountInfo.info.account')} url="/account" />
                  <FooterLink value={t('footerInfo.accountInfo.info.cases')} url="#" />
                  <FooterLink value={t('footerInfo.accountInfo.info.features')} url="#" />
              </Grid> }
              { matchesDownSm &&   <Grid item xs={12} style={{marginTop: '25px', marginBottom: '25px'}}>
                <Box className="footer-info__title">{t('footerInfo.fedagRoulette.title')}</Box>
                <FooterLink value={t('footerInfo.fedagRoulette.info.dailyCase')} url="#" />
                <FooterLink value={t('footerInfo.fedagRoulette.info.stock')} url="#" />
              </Grid> }
              
              { !matchesDownSm &&  <Grid item sm={4}>
                <Box className="footer-info__title">{t('footerInfo.serviceInfo.title')}</Box>
                <FooterLink value={t('footerInfo.serviceInfo.info.verification')} url="#" />
                <FooterLink value={t('footerInfo.serviceInfo.info.terms_of_Service')} url="/terms-of-service" />
                <FooterLink value={t('footerInfo.serviceInfo.info.privacy_police')} url="/privacy-policy" />
                <FooterLink value={t('footerInfo.serviceInfo.info.tech_support')} url="/tech-support" />
              </Grid> }
              { !matchesDownSm &&   <Grid item sm={4}>
                <Box className="footer-info__title">{t('footerInfo.accountInfo.title')}</Box>
                <FooterLink value={t('footerInfo.accountInfo.info.account')} url="/account" />
                <FooterLink value={t('footerInfo.accountInfo.info.cases')} url="#" />
                <FooterLink value={t('footerInfo.accountInfo.info.features')} url="#" />
              </Grid> }
              { !matchesDownSm &&   <Grid item sm={4}>
                <Box className="footer-info__title">{t('footerInfo.fedagRoulette.title')}</Box>
                <FooterLink value={t('footerInfo.fedagRoulette.info.dailyCase')} url="#" />
                <FooterLink value={t('footerInfo.fedagRoulette.info.stock')} url="#" />
              </Grid> }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const Footer = () => {
  const { data: count } = useGetOpenCaseCountQuery('');
  const { data: users } = useGetUsersCountQuery('');

  // get from backend
  const openCases = count ?? '';
  const onlineUsers = '* * *';
  const totalUsers = users ?? '';

  return (
    <footer className="footer">
      <FooterStatistic openCases={openCases} onlineUsers={onlineUsers} totalUsers={totalUsers} />
      <FooterInfo />
    </footer>
  );
};


