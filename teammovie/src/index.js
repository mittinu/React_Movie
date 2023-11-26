import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TicketBuying from './TicketBuying';
import List from './List';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ticketBuying" element={<TicketBuying />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
