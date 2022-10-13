import { Box, Divider } from "@mui/material";
import { casesForAdmin } from "../../../mocks/casesForAdmin";
import { CaseCreateButton, CasesSearchForm, Case } from "./components";

export const AdminCases = () => {
  return(
    <Box className='admin-cases'>
      <Box component='h1' className='admin-cases__title'>Кейсы</Box>
      <Divider className='admin-cases__divider'/>
      <CasesSearchForm></CasesSearchForm>

      <Box className="admin-cases__cases-container">
        <CaseCreateButton onClick={() => console.log('create button clicked')}/>

        {casesForAdmin.map((caseItem) => {
          return <Case key={caseItem.id} caseItem={caseItem} onClick={() => console.log('case clicked')}></Case>
        })}

      </Box>
      
    </Box>
  )
}