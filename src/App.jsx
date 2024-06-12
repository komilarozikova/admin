import { createContext, useContext, useEffect, useState } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound, Profile, Users } from "./screens";
import Signin from "./components/signin/Signin";

const LoginContext = createContext({ isLogin: false, setLogin: () => { } });

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLogin, setLogin] = useState(() => {
    // Initialize from localStorage or default to false if not present
    return JSON.parse(localStorage.getItem("isLogin")) || false;
  });

  // Save to localStorage whenever isLogin changes
  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <LoginContext.Provider value={{ isLogin, setLogin }}>
          <Routes>
            <Route path="/" element={<Signin />} />
            {isLogin && (
              <Route element={<BaseLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users" element={<Users />} />
              </Route>
            )}
          </Routes>
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
          >
            <img
              className="theme-icon"
              src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            />
          </button>
        </LoginContext.Provider>
      </Router>
    </>
  );
}

export { LoginContext };

export default App;
