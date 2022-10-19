import axios from 'axios';
import { Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";
// import { casesForAdmin } from "../../../mocks/casesForAdmin";
import { CaseCreateButton, CasesSearchForm, Case, ModalAdmin, ModalContent } from "./components";
import { TCase, TEditableCase } from './components/types';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhemlyYWZhaWwiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2NjAyNTkwNCwiZXhwIjoxNjY2NjMwNzA0fQ._GcEyB3FZP1OqzypDNLSB9_19QDU2fQ_C1-liYkTPVk';

const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token,
  }
}

export const AdminCases = () => {

  const getCases = async () => {
    axios.get('http://5.101.51.15/api/v1/packs', headers)
      .then((resp) => {
        setCases(resp.data.content);
      })
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      await getCases();
    }
    fetchDataAsync();
  }, [])

  const [cases, setCases] = useState<TCase[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  // если кейс есть, то открываю модалку для редактирования этого кейса
  // и передаю его в контент модалки, если null то открываю модалку для создания нового кейса
  const [editableCase, setEditableCase] = useState<TEditableCase | null>(); 

  const handleCreateButton = () => {
    setEditableCase(null);
    setModalOpen(true);
  }

  const handleCaseClick = (caseId: number) => {
      const currentCase = cases?.find(item => item.id === caseId)
      setEditableCase(currentCase);
      setModalOpen(true);
  }

  return(
    <Box className='admin-cases'>
      <Box component='h1' className='admin-cases__title'>Кейсы</Box>
      <Divider className='admin-cases__divider'/>
      <CasesSearchForm />

      <Box className="admin-cases__cases-container">
        <CaseCreateButton onClick={handleCreateButton}/>

        {cases?.map((caseItem) => {
          return <Case key={caseItem.id} caseItem={caseItem} onClick={() => handleCaseClick(caseItem.id)}></Case>
        })}

      </Box>
      <ModalAdmin 
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={editableCase ? `Кейс "${editableCase?.title}"` : 'Кейс'}>
          <ModalContent editableCase={editableCase} setModalOpen={setModalOpen}/>
      </ModalAdmin>
    </Box>
  )
}

