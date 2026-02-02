import React, { useState, useEffect } from 'react';
import logo from '../assets/images/navbar/logo.svg';
import URLCatcher from '../assets/images/navbar/URLCatcher.svg';
import LogOut from '../assets/images/navbar/LogOut.svg';
import Login from '../assets/images/navbar/Login.svg'; 
import MyPAGE from '../assets/images/navbar/MYPAGE.svg';
import schedule from '../assets/images/navbar/schedule.svg';
import groupIcon from '../assets/images/navbar/group.svg'; 
import Tinder from '../assets/images/navbar/TinderforTravel.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  // --- [추가됨] 모달 관련 상태 ---
  const [showGroupModal, setShowGroupModal] = useState(false); // 모달 표시 여부
  const [newGroupName, setNewGroupName] = useState("");      // 입력한 그룹 이름
  const [inviteCode, setInviteCode] = useState("");          // 생성된 랜덤 초대코드

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    navigate('/');
  };

  const [myGroups, setMyGroups] = useState([
    { id: 1, name: '덕성여대' },
    { id: 2, name: '코너' },
  ]);

  const [menuView, setMenuView] = useState('main');

  // --- [추가됨] 랜덤 초대코드 생성 함수 (숫자+영어 6자리) ---
  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // --- [수정됨] 그룹 추가 버튼 핸들러 ---
  const handleAddGroup = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate('/login'); // window.location 대신 navigate 사용 권장
      return;
    }
    
    // 모달을 열기 전에 초기화 및 코드 생성
    setNewGroupName("");
    setInviteCode(generateRandomCode());
    setShowGroupModal(true); // 모달 열기
  };

  // --- [추가됨] 초대코드 복사 함수 ---
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      alert("초대코드가 복사되었습니다!");
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  // --- [추가됨] 모달 닫기 ---
  const closeGroupModal = () => {
    setShowGroupModal(false);
  };

  // --- [추가됨] 그룹 생성 완료 (서버 연동 시 여기에 로직 추가) ---
  const handleSubmitGroup = () => {
    if(!newGroupName.trim()) {
      alert("그룹 이름을 입력해주세요.");
      return;
    }
    alert(`그룹 '${newGroupName}'이(가) 생성되었습니다!`);
    // 여기에 실제 서버로 데이터를 보내는 코드를 추가하면 됩니다.
    setShowGroupModal(false);
  };

  const handleMouseLeave = () => {
    setMenuView('main');
  };

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-6 bg-white relative z-40">
        {/* 로고 */}
        <Link to="/"> 
          <img src={logo} alt="logo" className="w-45 h-auto object-contain" />
        </Link>

        {/* 메뉴 리스트 */}
        <div className="flex items-center">
          <Link to="/urlcatcher">
            <img src={URLCatcher} alt="URLCatcher" className="w-48 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
          </Link>
          <Link to="/tinder">
            <img src={Tinder} alt="Tinder" className="w-57 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
          </Link>
          <Link to="/schedule">
            <img src={schedule} alt="schedule" className="w-42 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
          </Link>

          {/* 그룹 메뉴 */}
          <div className="relative group" onMouseLeave={handleMouseLeave}>
              <img src={groupIcon} alt="Group" className="w-32 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />

            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-48 bg-white border border-gray-200 rounded-lg shadow-xl group-hover:block z-50 overflow-hidden">
              {myGroups.length === 0 ? (
                <button onClick={handleAddGroup} className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  그룹 추가
                </button>
              ) : (
                <>
                  {menuView === 'main' && (
                    <div className="flex flex-col">
                      <button onClick={handleAddGroup} className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                        그룹 추가
                      </button>
                      <button onClick={() => setMenuView('list')} className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                        그룹 선택
                      </button>
                    </div>
                  )}
                  {menuView === 'list' && (
                    <div className="flex flex-col">
                      <div className="bg-gray-50 px-4 py-2 text-xs font-bold text-gray-500 border-b border-gray-200">
                        그룹 선택
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {myGroups.map((group) => (
                          <a key={group.id} href={`/group/${group.id}`} className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-50 last:border-none">
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

          <a href="mypage">
            <img src={MyPAGE} alt="MYPAGE" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
          </a>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="focus:outline-none">
              <img src={LogOut} alt="LogOut" className="w-35 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
            </button>
          ) : (
            <Link to="/login">
              <img src={Login} alt="Login" className="w-29 h-auto block p-8 transition duration-300 ease-in-out hover:-translate-y-2" />
            </Link>
          )}
          
        </div>
      </nav>

      {/* ▼▼▼ [추가됨] 그룹 생성 모달 (팝업창) ▼▼▼ */}
      {showGroupModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[400px] transform transition-all scale-100">
            {/* 모달 헤더 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">새 그룹 만들기</h2>
            
            {/* 그룹 이름 입력 칸 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">그룹 이름</label>
              <input 
                type="text" 
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="여행 그룹 이름을 입력하세요"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#486284] transition-all"
              />
            </div>

            {/* 초대코드 표시 및 복사 영역 */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-600 mb-2">초대 코드</label>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 px-4 py-3 rounded-lg text-center font-mono text-lg font-bold text-gray-700 tracking-widest border border-gray-200">
                  {inviteCode}
                </div>
                <button 
                  onClick={handleCopyCode}
                  className="bg-[#486284] hover:bg-[#3b4d64] text-white px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  복사
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">* 친구에게 코드를 공유하여 그룹에 초대하세요.</p>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3">
              <button 
                onClick={closeGroupModal}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition-colors"
              >
                취소
              </button>
              <button 
                onClick={handleSubmitGroup}
                className="flex-1 px-4 py-3 rounded-xl bg-[#2F4A6D] hover:bg-[#243a56] text-white font-bold transition-colors shadow-md"
              >
                생성하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;