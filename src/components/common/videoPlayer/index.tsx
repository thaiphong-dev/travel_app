import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    typeof window !== "undefined" && setHasWindow(true);
  }, []);

  return (
    <div className="flex justify-center items-center player-wrapper">
      {hasWindow && (
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          controls
          url={url}
        />
      )}
    </div>
  );
}
