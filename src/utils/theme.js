export function getTheme() {
  try {
    const t = localStorage.getItem("hci:theme");
    if (t) return t;
  } catch (e) {}
  // default to light
  return document.documentElement.dataset.theme || "light";
}

export function setTheme(theme) {
  try {
    localStorage.setItem("hci:theme", theme);
  } catch (e) {}
  document.documentElement.dataset.theme = theme;
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

export function getColorBlind() {
  try {
    return localStorage.getItem("hci:colorBlind") === "true";
  } catch (e) {
    return false;
  }
}

export function setColorBlind(enabled) {
  try {
    localStorage.setItem("hci:colorBlind", enabled ? "true" : "false");
  } catch (e) {}
  if (enabled) document.body.classList.add("cb-mode");
  else document.body.classList.remove("cb-mode");
}

export function getDyslexic() {
  try {
    return localStorage.getItem("hci:dyslexic") === "true";
  } catch (e) {
    return false;
  }
}

export function setDyslexic(enabled) {
  try {
    localStorage.setItem("hci:dyslexic", enabled ? "true" : "false");
  } catch (e) {}
  if (enabled) document.body.classList.add("dyslexic");
  else document.body.classList.remove("dyslexic");
}

export function toggleDyslexic() {
  const next = !getDyslexic();
  setDyslexic(next);
  return next;
}

// initialize on import
setTheme(getTheme());
setColorBlind(getColorBlind());
setDyslexic(getDyslexic());
// text size (px)
export function getTextSize() {
  try {
    const v = localStorage.getItem("hci:textSize");
    if (v) return Number(v);
  } catch (e) {}
  // default 16px
  return 16;
}

export function setTextSize(px) {
  try {
    localStorage.setItem("hci:textSize", String(px));
  } catch (e) {}
  document.documentElement.style.fontSize = px + "px";
}

// initialize text size
setTextSize(getTextSize());
