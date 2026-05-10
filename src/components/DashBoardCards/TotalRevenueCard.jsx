import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { BsCircleFill } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TotalRevenueCard = () => {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Online Sales",
        data: [12000, 19000, 8000, 17000, 6000, 13000, 20000],
        backgroundColor: "#3b82f6",
        borderRadius: 3,
        barPercentage: 0.5,
      },
      {
        label: "Offline Sales",
        data: [8000, 12000, 15000, 10000, 18000, 9000, 14000],
        backgroundColor: "#86efac",
        borderRadius: 3,
        barPercentage: 0.5,
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
        ticks: { font: { size: 9 }, color: "#9ca3af" },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: {
          font: { size: 9 },
          color: "#9ca3af",
          callback: (v) => `${v / 1000}k`,
        },
        min: 0,
        max: 25000,
      },
    },
  };

  const sales = [
    {
      color: "#3b82f6",
      label: "Online Sales",
    },
    {
      color: "#86efac",
      label: "Offline Sales",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-72">
      <h3 className="font-bold text-gray-800 mb-4">Total Revenue</h3>

      <div className="h-44">
        <Bar data={data} options={options} />
      </div>

      <div className="flex gap-5 justify-center mt-4">
        {sales.map((item) => (
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

export default TotalRevenueCard;
