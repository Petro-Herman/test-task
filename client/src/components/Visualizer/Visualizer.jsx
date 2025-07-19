import { useEffect, useRef } from "react";
import { AudioVisualizer } from "react-audio-visualize";

export default function Visualizer({ isRecording }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isRecording) return;
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      audioRef.current.srcOject = stream;
    });
  }, [isRecording]);

  return (
    <div>
      <audio ref={audioRef} autoPlay muted />
      {isRecording && <AudioVisualizer audio={audioRef} />}
    </div>
  );
}
