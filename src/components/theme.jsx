export const setTheme = (mode) => {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
};

export const getStoredTheme = () => {
  return localStorage.getItem("theme") || "light";
};
