import {
  FiZap,
  FiGrid,
  FiBarChart2,
  FiUsers,
  FiFolder,
  FiCalendar,
  FiMessageSquare,
  FiShoppingBag,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiChevronRight,
  FiBell,
} from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import DabangProCard from "./DabangProCard";
import { RiPieChart2Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
const mainNav = [
  { icon: RiPieChart2Fill, label: "Dashboard", badge: null, url: "/" },
  { icon: FiUsers, label: "Users", badge: null, url: "/users" },

  { icon: FiBarChart2, label: "Leaderboard", badge: null },
  { icon: BsCart3, label: "Order", badge: "12" },
  { icon: FiShoppingBag, label: "Products", badge: null },
  { icon: GoGraph, label: "Sales Report", badge: null },

  { icon: FiSettings, label: "Setting", badge: null },
  { icon: FiLogOut, label: "Sign Out", badge: null },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="w-64 h-full bg-white flex flex-col shadow-sm">
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 h-16 shrink-0 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
          <FiZap className="text-white w-4 h-4" />
        </div>
        <span className="text-[18px] font-semibold tracking-tight text-slate-900">
          Dabang
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-6">
        <nav>
          <ul className="flex flex-col gap-2.5">
            {mainNav.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <li
                  key={item.label}
                  className=""
                  onClick={() => navigate(item?.url)}
                >
                  <div
                    className={`flex items-center  gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all group
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                  >
                    <item.icon
                      className={`w-4.5 h-4.5 shrink-0
                    ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
                    />
                    <span
                      className={`text-sm font-light flex-1 ${item.active ? "text-white" : ""}`}
                    >
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full leading-none
                      ${item.active ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-600"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <DabangProCard />
      </div>
    </aside>
  );
};

export default Sidebar;
