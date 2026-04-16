import { useEffect, useState } from "react";
import {
  getTheme,
  setTheme,
  getColorBlind,
  setColorBlind,
  getDyslexic,
  setDyslexic,
  getTextSize,
  setTextSize,
} from "../utils/theme";
import SettingsNode from "../ui-components/settings-node";
import ControlsNode from "../ui-components/controls-node";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [theme, setLocalTheme] = useState(getTheme());
  const [cb, setCb] = useState(getColorBlind());
  const [dys, setDys] = useState(getDyslexic());
  const [textSize, setTextSizeState] = useState(getTextSize());
  const navigate = useNavigate();

  useEffect(() => {
    setLocalTheme(getTheme());
  }, []);

  function onToggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setLocalTheme(next);
  }

  function onToggleCB() {
    const next = !cb;
    setColorBlind(next);
    setCb(next);
  }

  function onToggleDys() {
    const next = !dys;
    setDyslexic(next);
    setDys(next);
  }

  function onChangeTextSize(e) {
    const v = Number(e.target.value);
    setTextSize(v);
    setTextSizeState(v);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Settings</h2>

      <button
        className="btn btn-tertiary mb-6"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
      >
        Back
      </button>

      <section className="mb-6">
        <h3 className="font-bold mb-2">General</h3>
        <div className="divider"></div>
        <div className="flex items-center gap-4">
          <div>Theme:</div>
          <div className="badge badge-outline">
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </div>
          <button className="btn btn-sm" onClick={onToggleTheme}>
            Toggle
          </button>
        </div>
      </section>

      <section>
        <h3 className="font-bold mb-2">Accessibility</h3>
        <div className="divider"></div>
        <SettingsNode
          id="color-blind-toggle"
          label="Color-blind friendly mode"
          description="When enabled, interface uses higher contrast and simplified color cues."
          checked={cb}
          onChange={onToggleCB}
        />
        <SettingsNode
          id="dyslexic-toggle"
          label="Dyslexic-friendly font"
          description="When enabled, the UI will use a dyslexia-friendly font for improved readability."
          checked={dys}
          onChange={onToggleDys}
        />
        <SettingsNode
          label="Subtitles"
          description="Turn on or off subtitles for audio content."
        />
        <SettingsNode
          label="Audio Descriptions"
          description="Enable audio descriptions for visual content."
        />
        <SettingsNode
          input_type="range"
          id="text-size"
          label="Text Size"
          description={`Adjust the size of text for better readability. (${textSize}px)`}
          min={12}
          max={24}
          step={1}
          value={textSize}
          onChange={onChangeTextSize}
        />
        <SettingsNode
          input_type="range"
          label="Master Volume"
          description="Adjust the master volume for all audio content."
        />
        <ControlsNode />
      </section>
    </div>
  );
}
