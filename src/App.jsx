import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import GameScreen from "./pages/GameScreen";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter basename="/hci-prototype">
      <div className="min-h-screen">
        <header className="w-full p-4 flex justify-between items-center"></header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/play" element={<GameScreen />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
1;
export default App;
