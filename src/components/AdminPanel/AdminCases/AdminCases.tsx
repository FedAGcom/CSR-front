import { Box, Divider } from "@mui/material";
import { CasesSearchForm } from "./components";

export const AdminCases = () => {
  return(
    <Box className='admin-cases'>
      <Box component='h1' className='admin-cases__title'>Кейсы</Box>
      <Divider className='admin-cases__divider'/>
      <CasesSearchForm></CasesSearchForm>
    </Box>
  )
}