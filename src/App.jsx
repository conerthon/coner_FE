import { useState } from 'react'
//페이지 이동 도구 추가
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import Navbar from './components/navbar';
import './App.css'
import Bottom from './components/bottom';

//페이지  추가
import Login from './pages/Auth/Login';
//import Signup from './pages/Auth/Signup';

function App() {
  

  return (

    <BrowserRouter>
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. 상단 네비바 (따로 짜신다고 한 부분) */}
      <Navbar />

      {/* 2. 본문 히어로 섹션 */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
         { /*<Route path="/signup" element={<Signup />} />*/}
        </Routes>
      </main>
      <Bottom />
    </div>

    </BrowserRouter>
  )
}

export default App
