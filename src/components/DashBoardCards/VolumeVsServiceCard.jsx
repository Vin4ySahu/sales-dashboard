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

const VolumeVsServiceCard = () => {
  const labels = ["", "", "", ""];

  const data = {
    labels,
    datasets: [
      {
        data: [40, 50, 30, 60],
        label: "Volume",
        backgroundColor: "#10b981",
        borderRadius: 0.5,
        stack: "combined",
        barPercentage: 0.3,
      },
      {
        label: "Service",
        data: [60, 40, 70, 40],
        backgroundColor: "#3b82f6",
        borderRadius: 0.5,
        stack: "combined",
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "false",
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },

      y: {
        stacked: true,
        beginAtZero: true,
        grid: { display: false },

        ticks: {
          display: false,
        },
      },
    },
  };

  const stats = [
    {
      color: "#22c55e",
      label: "Volume",
      value: "1,135",
    },
    {
      color: "#3b82f6",
      label: "Services",
      value: "635",
    },
  ];

  return (
    <div className="h-72 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-4">Volume vs Service Level</h3>

      <div className="h-36 border-b border-gray-400 mt-7">
        <Bar data={data} options={options} />
      </div>

      <div className="flex justify-around mt-3">
        {stats.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <BsCircleFill
              style={{ color: item.color }}
              className="text-[8px]"
            />

            <div className="text-center">
              <p className="text-[10px] text-gray-400">{item.label}</p>

              <p className="text-sm font-bold text-gray-700">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolumeVsServiceCard;
