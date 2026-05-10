import { FiDownload } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { BsFileBarGraphFill } from "react-icons/bs";
import { LuUserRoundPlus } from "react-icons/lu";
const cards = [
  {
    icon: BsFileBarGraphFill,
    iconBg: "bg-[#FFD6D6]",
    iconColor: "text-[#FF4D4D]",
    value: "$1k",
    label: "Total Sales",
    change: "+8% from yesterday",
    changeColor: "text-[#4CAF82]",
    cardBg: "bg-[#FFE2E5]",
  },
  {
    icon: LuClipboardList,
    iconBg: "bg-[#FFE4C8]",
    iconColor: "text-[#FF8C42]",
    value: "300",
    label: "Total Order",
    change: "+5% from yesterday",
    changeColor: "text-[#4CAF82]",
    cardBg: "bg-[#FFF4DE]",
  },
  {
    icon: IoBagCheckOutline,
    iconBg: "bg-[#C8F0D8]",
    iconColor: "text-[#22A85A]",
    value: "5",
    label: "Product Sold",
    change: "+1.2% from yesterday",
    changeColor: "text-[#4CAF82]",
    cardBg: "bg-[#DCFCE7]",
  },
  {
    icon: LuUserRoundPlus,
    iconBg: "bg-[#DDD6F8]",
    iconColor: "text-[#7C5CBF]",
    value: "8",
    label: "New Customers",
    change: "0.5% from yesterday",
    changeColor: "text-[#4CAF82]",
    cardBg: "bg-[#F3F0FD]",
  },
];

const TodaysSales = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm  h-72">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-[#05004E]">Today's Sales</h2>
          <p className="text-sm text-slate-400 mt-0.5">Sales Summery</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 text-slate-500 text-sm font-medium px-4 py-2 rounded-xl hover:bg-slate-50 transition-colors">
          <FiDownload className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="flex  gap-3">
        {cards.map((item) => (
          <div
            key={item.label}
            className={`${item.cardBg} rounded-2xl p-5 flex-1`}
          >
            <div
              className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}
            >
              <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>

            <div>
              <p className="text-xl font-bold text-slate-800">{item.value}</p>
              <p className="text-[12px] text-slate-500 mt-0.5">{item.label}</p>
              <p className={`text-[10px] font-medium mt-1 ${item.changeColor}`}>
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysSales;
