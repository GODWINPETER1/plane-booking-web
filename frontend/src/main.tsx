import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext'
import { AdminRoutes } from './admin/routes/adminRoutes';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <AuthProvider>
          <AppRoutes />
          <AdminRoutes/>
    </AuthProvider>
  </StrictMode>,
)
