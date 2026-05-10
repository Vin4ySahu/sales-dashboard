import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
  Legend,
);

const CustomerSatisfactionCard = () => {
  const labels = ["", "", "", "", ""];

  const data = {
    labels,
    datasets: [
      {
        label: "Last Month",
        data: [25, 35, 30, 40, 38],
        borderColor: "#6366f1",
        backgroundColor: "transparent",
        tension: 0.5,
        pointRadius: 3,
        pointBackgroundColor: "#6366f1",
        borderWidth: 2,
      },
      {
        label: "This Month",
        data: [40, 50, 48, 58, 55],
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6,182,212,0.15)",
        fill: true,
        tension: 0.5,
        pointRadius: 3,
        pointBackgroundColor: "#06b6d4",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const monthlySales = [
    {
      color: "#6366f1",
      label: "Last Month",
      amount: "$3,004",
    },
    {
      color: "#06b6d4",
      label: "This Month",
      amount: "$4,504",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-72">
      <h3 className="font-bold text-gray-800 mb-4">Customer Satisfaction</h3>

      <div className="h-36">
        <Line data={data} options={options} />
      </div>

      <div className="flex justify-around mt-3">
        {monthlySales.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="text-lg font-semibold"
              style={{ color: item.color }}
            >
              →
            </span>

            <div>
              <p className="text-[10px] text-gray-400">{item.label}</p>

              <p className="text-sm font-bold text-gray-700">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSatisfactionCard;
