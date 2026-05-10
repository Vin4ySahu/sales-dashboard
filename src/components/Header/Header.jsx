import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiGlobe,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiZap,
} from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
const Header = ({ title }) => {
  return (
    <>
      <header className="bg-white h-16 flex items-center px-6 gap-4 shadow-sm">
        <div className="flex items-center gap-2.5 shrink-0 mr-2">
          <span className=" text-[26px] font-semibold text-[#151D48] hidden sm:block">
            {title}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />
        {/* Search Bar */}
        <div className="flex-1 max-w-sm">
          <div className="flex items-center bg-slate-100 hover:bg-slate-200 transition-colors rounded-xl px-3.5 py-2.5 gap-2.5 cursor-text">
            <FiSearch className="text-blue-600 w-4 h-4 shrink-0" />
            <input
              className="text-sm  flex-1 select-none border-0 outline-none"
              placeholder="Search here..."
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl  hover:bg-slate-100 hover:text-slate-800 transition-all text-sm font-medium">
            <FiGlobe className="w-4 h-4" />
            <span className="hidden sm:block ">Eng (US)</span>
            <FiChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[#f4e8d2] hover:bg-slate-100 hover:text-slate-800 transition-all">
            <FiBell className="w-5 h-5 text-[#f3bd5c]" />
            <span className="absolute top-1.5 right-1.5 w-1 h-1 bg-rose-500 rounded-full " />
          </button>

          <div className="w-px h-6 bg-slate-200 mx-1.5" />

          <button className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl hover:bg-slate-100 transition-all group">
            <div className="relative w-8 h-8 rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm">
              <FaRegUser />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />
            </div>
            <div className="hidden md:flex flex-col items-start leading-none gap-0.5">
              <span className="text-sm font-semibold text-slate-800">
                Musfiq
              </span>
              <span className="text-xs text-slate-400">Admin</span>
            </div>
            <FiChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
