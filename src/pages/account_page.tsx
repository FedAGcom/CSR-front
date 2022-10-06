import { Box, Container } from '@mui/material';
import {
  HeaderAndFooter,
  PrizeBlock,
  AccountHeaderField,
  AccountCaseField,
  AccountSoldItemsField,
} from '../components';

export const AccountPage = () => {
  return (
    <>
      <HeaderAndFooter>
        <PrizeBlock />
        <Box className="account">
          <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
            <Box sx={{ maxWidth: '1158px' }} className="account-wrapper">
              <AccountHeaderField />
              <AccountCaseField />
              <AccountSoldItemsField />
            </Box>
          </Container>
        </Box>
      </HeaderAndFooter>
    </>
  );
};
