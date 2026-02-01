import { useState, useEffect } from "react";
import SwipeCard from "./SwipeCard";

export default function MainTinder({ cardList }) {
  // 1. 틴더 내부에서 사용할 로컬 상태 (남은 카드 목록)
  const [cards, setCards] = useState([]);

  // 2. 부모(App.jsx)에서 받은 cardList가 바뀌면 초기화
  useEffect(() => {
    if (cardList && cardList.length > 0) {
      // cardList에서 이미지 URL만 뽑아서 세팅
      const images = cardList.map((item) => item.imageUrl);
      setCards(images);
    }
  }, [cardList]);

  // 3. 스와이프 핸들러
  const handleSwipe = (direction) => {
    if (direction === "left") {
      console.log("❌ 삭제 (Left)");
    } else {
      console.log("💚 유지 (Right)");
    }

    // 현재 카드(0번 인덱스) 제거 -> 다음 카드가 0번이 됨
    setCards((prev) => prev.slice(1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* 카드가 남아있을 때만 카운터 표시 */}
      {cards.length > 0 && (
        <p className="text-sm text-gray-400 mb-2">{cards.length}장 남음</p>
      )}

      <h1 className="text-5xl font-extrabold mb-2">TINDER FOR TRAVEL</h1>
      <p className="text-gray-500 mb-8">
        싸우지 말고, 스와이프로 결정하세요!
      </p>

      {/* 카드 영역 컨테이너 */}
      <div className="relative w-[320px] h-[200px] md:w-[520px] md:h-[320px]">
        
        {/* 카드가 다 떨어졌을 때 보여줄 화면 */}
        {cards.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 rounded-[30px] border-2 border-dashed border-gray-300 animate-fade-in">
            <p className="text-2xl font-bold text-gray-400 mb-2">모든 카드를 확인했어요! 🎉</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
            >
              다시 하기
            </button>
          </div>
        ) : (
          /* 카드가 있을 때 카드 렌더링 */
          <>
            {/* 1. 다음 카드 (뒤에 살짝 보이는 효과) */}
            {cards[1] && (
              <img
                src={cards[1]}
                alt="next"
                className="absolute top-4 left-0 w-full h-full object-cover rounded-[30px] opacity-50 scale-95 transition-all duration-300"
                style={{ zIndex: 0 }}
              />
            )}

            {/* 2. 현재 조작하는 카드 (맨 앞) */}
            {cards[0] && (
              <div className="absolute inset-0 z-10">
                 {/* [중요 수정] key={cards[0]} 추가 
                    이 부분이 없으면 React가 컴포넌트를 재사용해서 
                    다음 카드가 이미 옆으로 밀린 상태로 나타나는 버그가 발생합니다.
                 */}
                 <SwipeCard 
                    key={cards[0]} 
                    image={cards[0]} 
                    onSwipe={handleSwipe} 
                 />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}