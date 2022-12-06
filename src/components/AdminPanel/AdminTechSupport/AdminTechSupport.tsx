import { Box, Typography, Divider } from '@mui/material';
import { useGetRequestsQuery } from '../../../store/slices/supportSlice';
import { AdminTechSupportSearchForm } from './AdminTechSupportSearchForm';

export function AdminTechSupport() {
  const { data } = useGetRequestsQuery('');

  return (
    <Box className="admin-tech-support">
      <Typography component="h1" className="admin-tech-support__title">
        Тех. поддержка
      </Typography>
      <Divider className="admin-tech-support__divider" />
      <Box className="admin-tech-support__text-box">
        <Typography component="h2" className="admin-tech-support__sub-title">
          Заявки
        </Typography>
        <Typography component="span" className="admin-tech-support__requests-number">
          {data?.length || 0}
        </Typography>
      </Box>
      <AdminTechSupportSearchForm />
    </Box>
  );
}
