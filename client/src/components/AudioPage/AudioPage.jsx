import { useState } from "react";
import MicrophoneButton from "../MicrophoneButton/MicrophoneButton";
import { Button } from "@nextui-org/react";
import Visualizer from "../Visualizer/Visualizer";

export default function AudioPage() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleConversation = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div style={{ padding: 50 }}>
      <MicrophoneButton isRecording={isRecording} />
      <Button
        color={isRecording ? "danger" : "primary"}
        onPress={toggleConversation}
      >
        {isRecording ? "Завершити розмову" : "Почати розмову"}
      </Button>
      <Visualizer isRecording={isRecording} />
    </div>
  );
}
