import Lottie from "lottie-react";
import animationData from "./mic.json.json";

export default function MicrophoneButton({ isRecording }) {
  return (
    <div style={{ width: 100, height: 100, margin: "20px auto" }}>
      <Lottie animationData={animationData} loop={isRecording} />
    </div>
  );
}
