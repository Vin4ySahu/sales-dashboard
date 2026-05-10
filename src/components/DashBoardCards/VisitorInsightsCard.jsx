import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FiSearch, FiBell, FiChevronDown, FiUpload } from "react-icons/fi";

import { BsCircleFill } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,

  LineElement,
  PointElement,

  Tooltip,
  Legend,
);
const VisitorInsightsCard = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Loyal Customers",
        data: [180, 220, 260, 200, 280, 320, 260, 300, 340, 280, 220, 180],
        borderColor: "#a855f7",
        backgroundColor: "transparent",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 2.5,
      },
      {
        label: "New Customers",
        data: [220, 260, 300, 260, 200, 280, 380, 300, 250, 300, 260, 220],
        borderColor: "#ef4444",
        backgroundColor: "transparent",
        tension: 0.5,
        pointRadius: 4,
        pointBackgroundColor: "#ef4444",
        borderWidth: 2.5,
      },
      {
        label: "Unique Customers",
        data: [260, 300, 220, 280, 320, 260, 300, 340, 280, 260, 300, 260],
        borderColor: "#22c55e",
        backgroundColor: "transparent",
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 2.5,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 }, color: "#9ca3af" },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: { font: { size: 10 }, color: "#9ca3af", stepSize: 100 },
        min: 0,
        max: 400,
      },
    },
  };

  const customers = [
    {
      color: "#a855f7",
      label: "Loyal Customers",
    },
    {
      color: "#ef4444",
      label: "New Customers",
    },
    {
      color: "#22c55e",
      label: "Unique Customers",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1  h-72">
      <h3 className="font-bold text-gray-800 mb-4">Visitor Insights</h3>
      <div className="h-44">
        <Line data={data} options={options} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {customers.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <BsCircleFill
              style={{ color: item.color }}
              className="text-[8px]"
            />
            <span className="text-[10px] text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorInsightsCard;
