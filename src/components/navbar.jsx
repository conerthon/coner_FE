/*
import logo from '../assets/images/navbar/logo.svg';
import URLCatcher from '../assets/images/navbar/URLCatcher.svg';
import LogOut from '../assets/images/navbar/LogOut.svg';
import MyPAGE from '../assets/images/navbar/MYPAGE.svg';
import schedule from '../assets/images/navbar/schedule.svg';
import group from '../assets/images/navbar/group.svg';
import Tinder from '../assets/images/navbar/TinderforTravel.svg';
import React from 'react';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-10 py-6 bg-white">
        {/* 로고 *///}
//        <div>
//            <img src={logo} alt="logo" className="w-45 h-auto object-contain"/>
//        </div>
        
        {/* 메뉴 리스트 */}
/*        <div className="flex items-center">
          <a href="urlcatcher"><img src={URLCatcher} alt="URLCatcher" className="w-48 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
          <a href="tinder"><img src={Tinder} alt="Tinder"  className="w-57 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
          <a href="schedule"><img src={schedule} alt="schedule" className="w-42 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
          <a href="group"><img src={group} alt="MYPAGE" className="w-32 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
         <a href="mypage"><img src={MyPAGE} alt="MYPAGE" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
          <a href="logout"><img src={LogOut} alt="LogOut" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2"/></a>
        </div>
*///      </nav>
//    );
//  };
//  
//  export default Navbar;
//
import React, { useState } from 'react';
import logo from '../assets/images/navbar/logo.svg';
import URLCatcher from '../assets/images/navbar/URLCatcher.svg';
import LogOut from '../assets/images/navbar/LogOut.svg';
import MyPAGE from '../assets/images/navbar/MYPAGE.svg';
import schedule from '../assets/images/navbar/schedule.svg';
import groupIcon from '../assets/images/navbar/group.svg'; // 이름 충돌 방지를 위해 group -> groupIcon으로 변경 권장
import Tinder from '../assets/images/navbar/TinderforTravel.svg';

const Navbar = () => {
  // [상태 1] 로그인 여부 (실제 구현 시엔 전역 상태나 Context에서 가져오세요)
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  // [상태 2] 내 그룹 리스트 (데이터가 비어있으면 '그룹 추가'만 뜸)
  const [myGroups, setMyGroups] = useState([
    { id: 1, name: '덕성여대' },
    { id: 2, name: '코너' },
  ]);

  // [상태 3] 드롭다운 메뉴 상태 ('main': 기본 버튼들, 'list': 그룹 리스트)
  const [menuView, setMenuView] = useState('main');

  // [핸들러 1] 그룹 추가 클릭 시
  const handleAddGroup = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다."); // 선택 사항
      window.location.href = '/login'; // 로그인 페이지로 이동
      return;
    }
    console.log("그룹 추가 페이지로 이동");
    // window.location.href = '/add-group';
  };

  // [핸들러 2] 마우스가 떠날 때 메뉴 상태 초기화
  const handleMouseLeave = () => {
    setMenuView('main');
  };

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
      {/* 로고 */}
      <div>
        <img src={logo} alt="logo" className="w-45 h-auto object-contain" />
      </div>

      {/* 메뉴 리스트 */}
      <div className="flex items-center">
        <a href="urlcatcher">
          <img src={URLCatcher} alt="URLCatcher" className="w-48 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
        </a>
        <a href="tinder">
          <img src={Tinder} alt="Tinder" className="w-57 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
        </a>
        <a href="schedule">
          <img src={schedule} alt="schedule" className="w-42 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
        </a>

        {/* ▼▼▼ [Group 메뉴 수정 부분] ▼▼▼ */}
        <div 
          className="relative group" 
          onMouseLeave={handleMouseLeave} // 마우스 떠나면 메뉴 초기화
        >
          {/* 메인 아이콘 */}
          <a href="group" className="block">
            <img src={groupIcon} alt="Group" className="w-32 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
          </a>

          {/* 드롭다운 메뉴 (group-hover로 호버 시 표시) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-48 bg-white border border-gray-200 rounded-lg shadow-xl group-hover:block z-50 overflow-hidden">
            
            {/* Case A: 이전에 추가한 그룹이 없을 때 -> '그룹 추가'만 보여줌 */}
            {myGroups.length === 0 ? (
              <button 
                onClick={handleAddGroup}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                그룹 추가
              </button>
            ) : (
              // Case B: 그룹이 있을 때
              <>
                {/* 1. 메뉴 뷰: '그룹 추가' & '그룹 선택' 버튼 표시 */}
                {menuView === 'main' && (
                  <div className="flex flex-col">
                    <button 
                      onClick={handleAddGroup}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100"
                    >
                      그룹 추가
                    </button>
                    <button 
                      onClick={() => setMenuView('list')} // 클릭 시 리스트 뷰로 전환
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      그룹 선택
                    </button>
                  </div>
                )}

                {/* 2. 리스트 뷰: '그룹 선택' (헤더 역할) & 그룹 목록 표시 */}
                {menuView === 'list' && (
                  <div className="flex flex-col">
                    {/* 상단 헤더 (다시 돌아가거나 현재 상태 표시) */}
                    <div className="bg-gray-50 px-4 py-2 text-xs font-bold text-gray-500 border-b border-gray-200">
                      그룹 선택
                    </div>
                    
                    {/* 그룹 리스트 */}
                    <div className="max-h-60 overflow-y-auto">
                      {myGroups.map((group) => (
                        <a 
                          key={group.id} 
                          href={`/group/${group.id}`} 
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-50 last:border-none"
                        >
                          {group.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* ▲▲▲ [Group 메뉴 수정 끝] ▲▲▲ */}

        <a href="mypage">
          <img src={MyPAGE} alt="MYPAGE" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
        </a>
        <a href="logout">
          <img src={LogOut} alt="LogOut" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;