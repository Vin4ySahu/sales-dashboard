const products = [
  { id: "01", name: "Home Decor Range", color: "#3b82f6", pct: 45 },
  { id: "02", name: "Disney Princess Pink Bag 18'", color: "#22c55e", pct: 29 },
  { id: "03", name: "Bathroom Essentials", color: "#8b5cf6", pct: 18 },
  { id: "04", name: "Apple Smartwatches", color: "#f59e0b", pct: 25 },
];

const TopProductsCard = () => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-72">
    <h3 className="font-bold text-gray-800 mb-4">Top Products</h3>

    <div className="mt-6.5">
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 gap-y-3 items-center text-xs text-gray-400 mb-2">
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span>Sales</span>
      </div>

      <div className="mt-5.5">
        {products.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 items-center mb-4"
          >
            <span className="text-xs font-medium text-gray-700 w-5">
              {p.id}
            </span>

            <span className="text-xs font-medium text-gray-700 truncate">
              {p.name}
            </span>

            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${p.pct}%`,
                  backgroundColor: p.color,
                }}
              />
            </div>

            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full border"
              style={{
                color: p.color,
                backgroundColor: `${p.color}18`,
                borderColor: p.color,
              }}
            >
              {p.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopProductsCard;
