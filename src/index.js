import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCity from './AddCity';
import { NotificationsProvider } from '@mantine/notifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NotificationsProvider>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<App/>}></Route>
<Route path="/cities/:country" element={<AddCity/>}></Route>

</Routes>
</BrowserRouter>
</NotificationsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
