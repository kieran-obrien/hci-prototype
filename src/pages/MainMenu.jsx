import { useNavigate } from "react-router-dom";
import { getTheme, toggleTheme } from "../utils/theme";

export default function MainMenu() {
  const nav = useNavigate();
  const theme = getTheme();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="my-10 text-6xl font-bold ">Corton Clicks</h1>
      <div className="divider w-1/2"></div>
      <div className="flex flex-col sm:flex-row justify-start gap-10 items-start w-full">
        <button
          className="btn btn-accent btn-lg w-1/2"
          onClick={() => nav("/play")}
          aria-label="Play game"
        >
          Play Game
        </button>

        <button
          className="btn btn-accent btn-lg w-1/2"
        >
          Friends
        </button>

        <button
          className="btn btn-accent btn-lg w-1/2"
          onClick={() => nav("/settings")}
          aria-label="Open settings"
        >
          Settings
        </button>

        <button
          className="btn btn-accent btn-lg w-1/2"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
