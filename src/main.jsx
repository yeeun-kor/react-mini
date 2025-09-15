import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './supabase/authUser';
import { SupabaseProvider } from './supabase/client';
const MovieDetail = React.lazy(() => import('./components/MovieDetail'));

createRoot(document.getElementById('root')).render(
  <SupabaseProvider>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </SupabaseProvider>,
);
