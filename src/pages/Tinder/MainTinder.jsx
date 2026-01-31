import { useState } from "react";
import SwipeCard from "./SwipeCard";
import NoPicture from "./ThereisNoPicture";
export default function MainTinder() {
  // 사용자 선택 사진 목록 (임시로 더미 이미지)
  const [cards, setCards] = useState([
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200",
  ]);

  // 좌/우 스와이프 결과 처리
  const handleSwipe = (direction) => {
    if (direction === "left") {
      console.log("❌ 삭제된 카드");
    } else {
      console.log("💚 유지된 카드");
    }

    // 현재 카드 제거 → 다음 카드 보여주기
    setCards((prev) => prev.slice(1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <p className="text-sm text-gray-400 mb-2">3/3</p>
      <h1 className="text-5xl font-extrabold mb-2">TINDER FOR TRAVEL</h1>
      <p className="text-gray-500 mb-8">
        싸우지 말고, 스와이프로 결정하세요!
      </p>

      {/* 카드 영역 */}
      <div className="relative w-[320px] h-[200px] md:w-[520px] md:h-[320px]">
        {/* 다음 카드 (뒤에 살짝 보이게) */}
        {cards[1] && (
          <img
            src={cards[1]}
            alt=""
            className="absolute top-2 left-2 w-full h-full object-cover rounded-3xl opacity-60"
          />
        )}

        {/* 현재 카드 */}
        {cards[0] && (
          <SwipeCard image={cards[0]} onSwipe={handleSwipe} />
        )}
      </div>
    </div>
  );
}
