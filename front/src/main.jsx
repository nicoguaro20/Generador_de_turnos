
import "./reset.css";
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { TodosProvider } from "./context/Todos.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <todosProvider>
        <App />
      </todosProvider>
    </BrowserRouter>
  </StrictMode>
)