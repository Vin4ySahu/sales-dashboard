import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TargetVsRealityCard = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Reality Sales",
        data: [8000, 12000, 9000, 14000, 10000, 13000, 11000],
        backgroundColor: "#fbbf24",
        borderRadius: 6,
        barPercentage: 0.45,
        categoryPercentage: 0.65,
      },
      {
        label: "Target Sales",
        data: [10000, 9000, 12000, 11000, 13000, 10000, 14000],
        backgroundColor: "#86efac",
        borderRadius: 6,
        barPercentage: 0.45,
        categoryPercentage: 0.65,
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
      y: { display: false },
    },
  };
  const salesData = [
    {
      color: "#fbbf24",
      label: "Reality Sales",
      category: "Global",
      value: "8,823",
    },
    {
      color: "#86efac",
      label: "Target Sales",
      category: "Commercial",
      value: "12,122",
    },
  ];
  return (
    <div className="h-72 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-4">Target vs Reality</h3>

      <div className="h-32">
        <Bar data={data} options={options} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {salesData.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${item.color}30` }}
            >
              <div
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
            </div>

            <div>
              <p className="text-[11px] font-semibold text-gray-700">
                {item.label}
              </p>

              <p className="text-[9px] text-gray-400">{item.category}</p>
            </div>

            <p
              className="ml-auto text-sm font-bold"
              style={{ color: item.color }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetVsRealityCard;
