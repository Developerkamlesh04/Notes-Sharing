import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={`bg-[#000000] dark:bg-[#363636] min-h-screen`}>
      <div className="bg-gradient-to-r from-neutral-300 to-stone-400 min-h-screen">
        <Navbar />
        <main className="min-h-screen dark:bg-[#363636]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
