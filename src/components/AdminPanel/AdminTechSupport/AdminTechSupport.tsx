import { Box, Typography, Divider } from '@mui/material';
import { AdminTechSupportSearchForm } from './AdminTechSupportSearchForm';

export function AdminTechSupport() {
  return (
    <Box className='admin-tech-support'>
      <Typography component='h1' className='admin-tech-support__title'>Тех. поддержка</Typography>
      <Divider className='admin-tech-support__divider'/>
      <Box className='admin-tech-support__text-box'>
        <Typography component='h2' className='admin-tech-support__sub-title'>Заявки</Typography>
        <Typography component='span' className='admin-tech-support__requests-number'>0</Typography>
      </Box>
      <AdminTechSupportSearchForm />
    </Box>
  )
}