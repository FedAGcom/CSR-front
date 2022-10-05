import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, PrivacyPolicyPage } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
