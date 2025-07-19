import { NextUIProvider } from "@nextui-org/react";
import AudioPage from "./components/AudioPage/AudioPage";

function App() {
  return (
    <NextUIProvider>
      <AudioPage />
    </NextUIProvider>
  );
}

export default App;
