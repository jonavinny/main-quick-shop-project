import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";
import NavBar from "./nav"

function MainLayout() {
  return (
    <div className="relative m-0 p-0 bg-black h-screen flex flex-col">
      <NavBar />
      <Main />
    </div>
  );
}

function Main() {
  useLayoutEffect(() => {
    document
      .getElementById("main-container")
      .scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div
      id="main-container"
      className="flex-1 overflow-y-scroll no-scrollbar"
    >
      <Outlet />
    </div>
  );
}

export default MainLayout;
