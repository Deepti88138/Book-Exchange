import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Index from './pages/Index';
import AddBook from './pages/AddBook';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BorrowRequests from './pages/BorrowRequests';
import ExchangeChat from './pages/ExchangeChat';
import Membership from './pages/Membership';
import MyHistory from './pages/MyHistory';
import SearchBooks from './pages/SearchBooks';
import Forgot from './pages/Forgot';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>

       
        <Route path="/" element={<Layout />}>

          <Route index element={<Index />} />
          <Route path="AddBook" element={<AddBook />} />
          <Route path="SearchBooks" element={<SearchBooks />} />
          <Route path="MyHistory" element={<MyHistory />} />
          <Route path="BorrowRequests" element={<BorrowRequests />} />
          <Route path="ExchangeChat" element={<ExchangeChat />} />
          <Route path="Membership" element={<Membership />} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EditProfile" element={<EditProfile />} />

        </Route>

       
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgot" element={<Forgot />} />

      </Routes>
    </Router>
  );
}

export default App;




