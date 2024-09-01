import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bulma/css/bulma.css'
import './assets/css/custom.css'
import {AuthProvider} from "./context/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <AuthProvider>
    <App/>
    </AuthProvider>
    </StrictMode>
)
