import React from "react";
import { useTranslation } from "react-i18next";

export default function CourtInformation() {
  const { t } = useTranslation();

  const mockInfo = [
    "Come and try your hand at one of the most popular sports in Viet Nam. Badminton is a hugely technical sport that requires a great amount of precision, flexibility, strategy, agility, and responsiveness.",
    "Badminton is a fantastic (and fun) way to get a full body workout. The sport involves a great amount of running, jumping, and swinging, which actively utilises all the major muscle groups not only does it condition the body, it also exercises the brain, as it tests alertness and requires strategic thought throughout the game. It may be tough at first, but you’ll build up endurance in no time.",
    "If you’re new to the sport, book a session with friends and family to have a friendly hit, or if you’re a seasoned professional, stun others with your backhands!",
  ];
  return (
    <div>
      {/* left col  */}
      <div>
        <p>{t("SERVE IT, SMASH IT, WIN IT, LOVE IT")}</p>
        {mockInfo?.map((data, index) => (
          <p key={index}>{t(data)}</p>
        ))}
      </div>

      {/* right col  */}
      <div>
        <button>{t("Booking now")}</button>
        <div>
          <p>{t("location")}</p>
          {/* data location here  */}
          <p>data location here</p>
        </div>

        <div>
          <p>{t("operating hours")}</p>
          {/* data OPERATING HOURS here  */}
          <p>data OPERATING HOURS here</p>
        </div>
      </div>
    </div>
  );
}
