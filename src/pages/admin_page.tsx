import { memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AdminSideBar } from '../components';
import { Header } from '../components';

const AdminPage = () => {
  return (
    <Box className="admin">
      <Header />
      <Box sx={{ borderTop: '1px solid #BDBDBD', display: 'flex', height: '100vh', justifyContent: 'center' }}>
        <AdminSideBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Box sx={{ padding: '30px 0px 30px 30px', width: '855px' }}>
            <Outlet />
          </Box>
        </Suspense>
      </Box>
    </Box>
  );
};

export const AdminLayout = memo(AdminPage);
