import { Box, Divider } from "@mui/material";
import { useState } from "react";
import { casesForAdmin } from "../../../mocks/casesForAdmin";
import { CaseCreateButton, CasesSearchForm, Case, ModalAdmin } from "./components";

export const AdminCases = () => {

  const [cases, setCases] = useState(casesForAdmin);
  const [isModalOpen, setModalOpen] = useState(false);

  // если кейс есть, то открываю модалку для редактирования этого кейса
  // и передаю его в контент модалки, если null то открываю модалку для создания нового кейса
  const [editableCase, setEditableCase] = useState<any>(null); 

  const handleCreateButton = () => {
    console.log('create button clicked');
    setEditableCase(null);
    setModalOpen(true);
  }

  const handleCaseClick = (caseId: number) => {
    console.log('case clicked');
    const currentCase = cases.find(item => item.id === caseId)
    setEditableCase(currentCase);
    setModalOpen(true);
  }

  return(
    <Box className='admin-cases'>
      <Box component='h1' className='admin-cases__title'>Кейсы</Box>
      <Divider className='admin-cases__divider'/>
      <CasesSearchForm></CasesSearchForm>

      <Box className="admin-cases__cases-container">
        <CaseCreateButton onClick={handleCreateButton}/>

        {cases.map((caseItem) => {
          return <Case key={caseItem.id} caseItem={caseItem} onClick={() => handleCaseClick(caseItem.id)}></Case>
        })}

      </Box>
      <ModalAdmin 
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={editableCase ? `Кейс "${editableCase?.title}"` : 'Кейс'}>
        МОДАЛКА
      </ModalAdmin>
      
    </Box>
  )
}

