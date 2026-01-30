import logo from '../assets/images/navbar/logo.svg';
import URLCatcher from '../assets/images/navbar/URLCatcher.svg';
import LogOut from '../assets/images/navbar/LogOut.svg';
import MyPAGE from '../assets/images/navbar/MYPAGE.svg';
import schedule from '../assets/images/navbar/schedule.svg';
import Tinder from '../assets/images/navbar/TinderforTravel.svg';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white w-full">
      {/* 로고 영역 */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-28 h-auto" />
      </div>
      
      {/* 메뉴 리스트: gap을 제거하고 자식 요소들에게 직접 여백을 줍니다. */}
      <div className="flex items-center">
        {/* 각 <a> 태그에 px-5 (좌우 여백)를 추가했습니다. */}
        <a href="urlcatcher" className="inline-block px-5 py-2 hover:opacity-70 transition-opacity">
          <img src={URLCatcher} alt="URLCatcher" className="h-4 w-auto block object-contain" />
        </a>
        <a href="tinder" className="inline-block px-5 py-2 hover:opacity-70 transition-opacity">
          <img src={Tinder} alt="Tinder" className="h-4 w-auto block object-contain" />
        </a>
        <a href="schedule" className="inline-block px-5 py-2 hover:opacity-70 transition-opacity">
          <img src={schedule} alt="schedule" className="h-4 w-auto block object-contain" />
        </a>
        <a href="mypage" className="inline-block px-5 py-2 hover:opacity-70 transition-opacity">
          <img src={MyPAGE} alt="MYPAGE" className="h-4 w-auto block object-contain" />
        </a>
        <a href="logout" className="inline-block px-5 py-2 hover:opacity-70 transition-opacity">
          <img src={LogOut} alt="LogOut" className="h-4 w-auto block object-contain" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;