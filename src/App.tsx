import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AdminUsers,
  AdminBalance,
  AdminTechSupport,
  AdminSettings,
  AdminPromo,
  AdminCases,
  AdminLogs,
  AdminTradeRequests,
} from './components';
import Cookies from 'js-cookie';
import {
  MainPage,
  PrivacyPolicyPage,
  TechSupportPage,
  TermsOfServicePage,
  AccountPage,
  AdminLayout,
  OpenCase,
} from './pages/index';
import { useAppDispatch, useAppSelector } from './store';
import { fetchUser } from './store/slices/userSlice';

function App() {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/tech-support" element={<TechSupportPage />} />
        {user.role === 'admin' ? (
          <>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/promocodes" element={<AdminPromo />} />
              <Route path="/admin/balance" element={<AdminBalance />} />
              <Route path="/admin/logs" element={<AdminLogs />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/tech-support" element={<AdminTechSupport />} />
              <Route path="/admin/cases" element={<AdminCases />} />
              <Route path="/admin/trade-requests" element={<AdminTradeRequests />} />
            </Route>
          </>
        ) : (
          <Route path="/admin" element={<MainPage />}></Route>
        )}
        <Route path="/open-case" element={<OpenCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
