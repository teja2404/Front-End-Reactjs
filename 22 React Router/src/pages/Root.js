import { Outlet } from "react-router-dom";
import MainNavigations from "./MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigations />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
