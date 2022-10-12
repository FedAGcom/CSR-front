import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminUsers, AdminTechSupport } from './components';
import {
  MainPage,
  PrivacyPolicyPage,
  TechSupportPage,
  TermsOfServicePage,
  AccountPage,
  AdminLayout,
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/tech-support" element={<TechSupportPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/tech-support" element={<AdminTechSupport />} />
          <Route path="/admin/settings" element={<h3>Settings</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
