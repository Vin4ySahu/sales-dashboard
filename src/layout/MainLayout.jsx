import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";

const MainLayout = ({ children, title }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="shrink-0 h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="shrink-0">
          <Header title={title} />
        </div>

        <main className="flex-1 overflow-y-auto bg-[#F1F4FA] p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
