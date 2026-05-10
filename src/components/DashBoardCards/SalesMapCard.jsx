import { useEffect, useRef } from "react";
import { Chart, Tooltip, Legend } from "chart.js";
import {
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
} from "chartjs-chart-geo";
import * as topojson from "topojson-client";

Chart.register(
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
  Tooltip,
  Legend,
);

const NUM2ISO = {
  4: "AFG",
  8: "ALB",
  12: "DZA",
  24: "AGO",
  32: "ARG",
  36: "AUS",
  40: "AUT",
  50: "BGD",
  56: "BEL",
  68: "BOL",
  76: "BRA",
  100: "BGR",
  116: "KHM",
  120: "CMR",
  124: "CAN",
  152: "CHL",
  156: "CHN",
  170: "COL",
  180: "COD",
  203: "CZE",
  208: "DNK",
  218: "ECU",
  818: "EGY",
  231: "ETH",
  246: "FIN",
  250: "FRA",
  276: "DEU",
  288: "GHA",
  300: "GRC",
  320: "GTM",
  340: "HND",
  348: "HUN",
  356: "IND",
  360: "IDN",
  364: "IRN",
  368: "IRQ",
  372: "IRL",
  376: "ISR",
  380: "ITA",
  392: "JPN",
  398: "KAZ",
  404: "KEN",
  410: "KOR",
  414: "KWT",
  484: "MEX",
  504: "MAR",
  524: "NPL",
  528: "NLD",
  554: "NZL",
  566: "NGA",
  578: "NOR",
  586: "PAK",
  604: "PER",
  608: "PHL",
  616: "POL",
  620: "PRT",
  634: "QAT",
  642: "ROU",
  643: "RUS",
  682: "SAU",
  724: "ESP",
  752: "SWE",
  756: "CHE",
  764: "THA",
  784: "ARE",
  792: "TUR",
  804: "UKR",
  826: "GBR",
  840: "USA",
  858: "URY",
  860: "UZB",
  862: "VEN",
  704: "VNM",
  887: "YEM",
  894: "ZMB",
  716: "ZWE",
  384: "CIV",
};

const HIGHLIGHT = {
  USA: { color: "#F5A623", label: "USA" },
  CHN: { color: "#E05C97", label: "China" },
  BRA: { color: "#E03030", label: "Brazil" },
  SAU: { color: "#4CAF50", label: "Saudi Arabia" },
  IDN: { color: "#9B59B6", label: "Indonesia" },
  COL: { color: "#3B9EDB", label: "Colombia" },
};

const SalesMapCard = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadMap = async () => {
      try {
        const res = await fetch("/maps/world.json");
        const world = await res.json();

        if (!isMounted || !canvasRef.current) return;

        const countries = topojson.feature(
          world,
          world.objects.countries,
        ).features;

        const data = countries.map((feature) => {
          const iso = NUM2ISO[String(parseInt(feature.id, 10))] ?? null;
          const highlight = iso ? HIGHLIGHT[iso] : null;

          return {
            feature,
            value: highlight ? 1 : 0,
            iso,
            fillColor: highlight ? highlight.color : "#D9DEE4",
            label: highlight
              ? highlight.label
              : (feature.properties?.name ?? ""),
          };
        });

        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }

        chartRef.current = new Chart(canvasRef.current, {
          type: "choropleth",
          data: {
            labels: data.map((d) => d.label),
            datasets: [
              {
                label: "Sales",
                data,
                backgroundColor: (ctx) => ctx.raw?.fillColor ?? "#D9DEE4",

                hoverBackgroundColor: (ctx) => {
                  const c = ctx.raw?.fillColor ?? "#D9DEE4";

                  return c === "#D9DEE4" ? "#C8CDD3" : c + "cc";
                },

                borderColor: "#ffffff",
                borderWidth: 0.5,
                hoverBorderColor: "#ffffff",
                hoverBorderWidth: 1.5,
              },
            ],
          },

          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 600,
              easing: "easeOutQuart",
            },

            plugins: {
              legend: { display: false },

              tooltip: {
                backgroundColor: "#1e293b",
                titleColor: "#f1f5f9",
                bodyColor: "#94a3b8",
                borderColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                padding: 10,
                cornerRadius: 8,

                callbacks: {
                  title: (items) => items[0]?.label || "Unknown",

                  label: (item) =>
                    item.raw?.value ? ` Highlighted market` : ` No data`,
                },
              },
            },

            scales: {
              projection: {
                axis: "x",
                projection: "equalEarth",
              },

              color: {
                axis: "x",
                display: false,
              },
            },
          },
        });
      } catch (e) {
        console.error("Map load error:", e);
      }
    };

    loadMap();

    return () => {
      isMounted = false;

      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-72">
      <h3 className="font-bold text-gray-800 mb-4">Sales Mapping by Country</h3>

      <div className="relative h-48">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default SalesMapCard;
