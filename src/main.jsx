import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './supabase/authUser';
import { SupabaseProvider } from './supabase/client';

createRoot(document.getElementById('root')).render(
  <SupabaseProvider>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </SupabaseProvider>,
);
