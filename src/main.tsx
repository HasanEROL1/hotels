import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// query client kurulumu

const queryClient = new QueryClient()

// query client provider ile uygulamayı sarmalama
createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>    
  <App />
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)