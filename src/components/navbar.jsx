import logo from '../assets/images/navbar/logo.svg';
import URLCatcher from '../assets/images/navbar/URLCatcher.svg';
import LogOut from '../assets/images/navbar/LogOut.svg';
import MyPAGE from '../assets/images/navbar/MYPAGE.svg';
import schedule from '../assets/images/navbar/schedule.svg';
import Tinder from '../assets/images/navbar/TinderforTravel.svg';
import React from 'react';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-10 py-6 bg-white">
        {/* 로고 */}
        <div>
            <img src={logo} alt="logo" className="w-45 h-auto object-contain"/>
        </div>
        
        {/* 메뉴 리스트 */}
        <div className="flex items-center">
          <a href="urlcatcher"><img src={URLCatcher} alt="URLCatcher" className="w-48 h-auto block p-8"/></a>
          <a href="tinder"><img src={Tinder} alt="Tinder"  className="w-55 h-auto block p-8"/></a>
          <a href="schedule"><img src={schedule} alt="schedule" className="w-40 h-auto block p-8"/></a>
          <a href="mypage"><img src={MyPAGE} alt="MYPAGE" className="w-35 h-auto block p-8"/></a>
          <a href="logout"><img src={LogOut} alt="LogOut" className="w-35 h-auto block p-8"/></a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;