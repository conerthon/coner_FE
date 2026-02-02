import React, { useState, useEffect } from 'react'; // 1. useState, useEffect 불러오기
import airplane from '../assets/images/airplane.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
  // 2. 애니메이션 상태 관리
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 렌더링된 후 짧은 시간 뒤에 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // 0.1초 뒤 실행 (자연스러운 효과)

    return () => clearTimeout(timer);
  }, []);

  return (
    // 전체 컨테이너
    <div className="flex flex-row items-center justify-between px-10 md:px-24 py-10 bg-white min-h-[70vh] overflow-hidden">
      
      {/* 왼쪽 텍스트 영역 
         transition-all: 모든 속성 애니메이션 허용
         duration-1000: 1초 동안 실행
         ease-out: 끝부분에서 부드럽게 감속
         조건부 클래스: isVisible이 true면 원래 위치/불투명, false면 아래로 10칸/투명
      */}
      <div 
        className={`flex-1 space-y-8 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            완벽한 여행 리모컨,
          </h1>
          <h1 className="text-5xl font-extrabold text-gray-800 mt-2">
            TRAVEL MATE
          </h1>
        </div>
        <br></br>
        
        <p className="text-gray-500 text-lg leading-relaxed">
          우리는 여행 정보를 수집(SAVE)만 하고, 실행(DO)하지 못합니다.<br />
          흩어진 데이터를 시각화해 보여주는 여행 준비 도움이,<br />
          트래블 메이트와 함께해보세요!
        </p>

        <Link to="/urlcatcher">
          <button className="flex items-center bg-[#486284] hover:bg-[#3b4d64] text-white px-8 py-3 rounded-full font-medium transition-all shadow-md">
            → 바로가기
          </button>
        </Link>
      </div>

      {/* 오른쪽 이미지 영역 
         왼쪽 텍스트보다 살짝 늦게 올라오도록 delay-300 (0.3초 지연) 추가
      */}
      <div 
        className={`flex-1 flex justify-end h-[500px] transform transition-all duration-1000 ease-out  ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="w-full max-w-[600px] h-full overflow-hidden rounded-l-[150px] shadow-2xl">
          <img 
            src={airplane} 
            alt="Airplane" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;