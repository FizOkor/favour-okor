import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import '@fontsource-variable/roboto-condensed'
// import '@fontsource/ubuntu-mono';
// Supports weights 300-800
import '@fontsource-variable/host-grotesk/wght.css';
import '@fontsource-variable/roboto-mono/wght.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
