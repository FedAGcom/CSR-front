import axios from 'axios';
import { Box, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { CaseCreateButton, CasesSearchForm, Case, ModalAdmin, ModalContent } from './components';
import { TCase, TEditableCase } from './components/types';
import { token } from './token';

const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
};
//----------------------------------------------------------

export const AdminCases = () => {
  const [cases, setCases] = useState<TCase[]>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editableCase, setEditableCase] = useState<TEditableCase | null>();
  const [searchQuery, setSearchQuery] = useState<string>('');

  //TODO заменить правильным запросом с правильным токеном
  const getCases = async () => {
    await axios.get('http://5.101.51.15/api/v1/packs', headers).then((resp) => {
      setCases(resp.data.content);
    });
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await getCases();
    };
    fetchDataAsync();
  }, []);

  const handleCreateButton = () => {
    setEditableCase(null);
    setModalOpen(true);
  };

  const handleCaseClick = (caseId: number) => {
    console.log('case id', caseId);
    const currentCase = cases?.find((item) => item.id === caseId);
    setEditableCase(currentCase);
    setModalOpen(true);
  };

  console.log(cases);

  return (
    <Box className="admin-cases">
      <Box component="h1" className="admin-cases__title">
        Кейсы
      </Box>
      <Divider className="admin-cases__divider" />
      <CasesSearchForm setSearchQuery={setSearchQuery} />

      <Box className="admin-cases__cases-container">
        <CaseCreateButton onClick={handleCreateButton} />

        {cases
          ?.filter((caseItem) => caseItem.title.toLowerCase().includes(searchQuery))
          .map((caseItem) => {
            return (
              <Case
                key={caseItem.id}
                caseItem={caseItem}
                onClick={() => handleCaseClick(caseItem.id)}
                actualCase={caseItem}
              ></Case>
            );
          })}
      </Box>
      <ModalAdmin
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={editableCase ? `Кейс "${editableCase?.title}"` : 'Кейс'}
      >
        <ModalContent editableCase={editableCase} setModalOpen={setModalOpen} getCases={getCases} />
      </ModalAdmin>
    </Box>
  );
};
