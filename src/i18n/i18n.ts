import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Shop: "Shop",
      "About Us": "About Us",
      "Booking now": "Booking now",
      Location: "Location",
      "operating hours": "operating hours",
      "booking hours": "booking hours",
      "Welcome to": "Welcome to",
      "SERVE IT, SMASH IT, WIN IT, LOVE IT":
        "SERVE IT, SMASH IT, WIN IT, LOVE IT",
      "Come and try your hand at one of the most popular sports in Viet Nam. Badminton is a hugely technical sport that requires a great amount of precision, flexibility, strategy, agility, and responsiveness.":
        "Come and try your hand at one of the most popular sports in Viet Nam. Badminton is a hugely technical sport that requires a great amount of precision, flexibility, strategy, agility, and responsiveness.",
      "Badminton is a fantastic (and fun) way to get a full body workout. The sport involves a great amount of running, jumping, and swinging, which actively utilises all the major muscle groups not only does it condition the body, it also exercises the brain, as it tests alertness and requires strategic thought throughout the game. It may be tough at first, but you’ll build up endurance in no time.":
        "Badminton is a fantastic (and fun) way to get a full body workout. The sport involves a great amount of running, jumping, and swinging, which actively utilises all the major muscle groups not only does it condition the body, it also exercises the brain, as it tests alertness and requires strategic thought throughout the game. It may be tough at first, but you’ll build up endurance in no time.",
      "If you’re new to the sport, book a session with friends and family to have a friendly hit, or if you’re a seasoned professional, stun others with your backhands!":
        "If you’re new to the sport, book a session with friends and family to have a friendly hit, or if you’re a seasoned professional, stun others with your backhands!",
      "Experience the most popular badminton courts in HCM City. Stun others with your splendid display of backhand and smash strokes!":
        "Experience the most popular badminton courts in HCM City. Stun others with your splendid display of backhand and smash strokes!",
    },
  },
  vi: {
    translation: {
      Shop: "Cửa hàng",
      "About Us": "Về chúng tôi",
      "Contact Us": "Liên hệ",
      "Booking now": "Đặt sân ngay",
      location: "địa chỉ",
      "Welcome to": "Xin chào bạn đến với",
      "operating hours": "Giờ làm việc",
      "booking hours": "giờ cho thuê",
      "SERVE IT, SMASH IT, WIN IT, LOVE IT":
        "TẬN HƯỞNG, THỂ HIỆN, CHIẾN THẮNG, ĐAM MÊ",
      "Come and try your hand at one of the most popular sports in Viet Nam. Badminton is a hugely technical sport that requires a great amount of precision, flexibility, strategy, agility, and responsiveness.":
        "Hãy đến và thử sức với một trong những môn thể thao phổ biến nhất tại Việt Nam. Cầu lông là một môn thể thao kỹ thuật cao yêu cầu sự chính xác, linh hoạt, chiến lược, sự nhạy bén và sự nhanh nhẹn.",
      "Badminton is a fantastic (and fun) way to get a full body workout. The sport involves a great amount of running, jumping, and swinging, which actively utilises all the major muscle groups not only does it condition the body, it also exercises the brain, as it tests alertness and requires strategic thought throughout the game. It may be tough at first, but you’ll build up endurance in no time.":
        "Cầu lông là một cách tuyệt vời (và vui vẻ) để có một buổi tập toàn diện cho cơ thể. Môn thể thao này đòi hỏi một lượng lớn chạy, nhảy và đánh vợt, hoạt động tích cực sử dụng tất cả các nhóm cơ chính, không chỉ rèn luyện cơ thể, mà cầu lông cũng rèn luyện não bộ, khi nó kiểm tra sự tỉnh táo và đòi hỏi suy nghĩ chiến lược suốt trận đấu.. Ban đầu có thể khó khăn, nhưng bạn sẽ xây dựng được sức bền trong thời gian ngắn. ",
      "If you’re new to the sport, book a session with friends and family to have a friendly hit, or if you’re a seasoned professional, stun others with your backhands!":
        "Nếu bạn mới bắt đầu với môn thể thao này, hãy đặt một buổi tập với bạn bè và gia đình để tham gia trận đấu thân thiện, hoặc nếu bạn là một cầu thủ chuyên nghiệp, hãy làm cho người khác kinh ngạc với các cú đánh backhand của bạn!",
      "Experience the most popular badminton courts in HCM City. Stun others with your splendid display of backhand and smash strokes!":
        "Trải nghiệm sân cầu lông phổ biến nhất tại Thành phố Hồ Chí Minh. Làm cho người khác trầm trồ bởi bản biểu diễn tuyệt vời của bạn với những cú đánh backhand và smash!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
