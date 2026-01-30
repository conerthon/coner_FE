import { useState } from 'react'
import MainPage from './pages/mainPage';
import Navbar from './components/navbar';
import './App.css'
import Bottom from './components/bottom';

function App() {
  

  return (
    <>
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. 상단 네비바 (따로 짜신다고 한 부분) */}
      <Navbar />

      {/* 2. 본문 히어로 섹션 */}
      <main className="flex-1">
        <MainPage />
      </main>
      <Bottom />
    </div>

    </>
  )
}

export default App
