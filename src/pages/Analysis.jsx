import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HealthDashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    water: 0,
    calories: 0,
    focus: 0,
    sleep: 0,
    stress: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("healthData");

    if (saved) {
      const parsed = JSON.parse(saved);

      setData({
        water: parsed.water || 0,
        calories: parsed.calories || 0,
        focus: parsed.focus || 0,
        sleep: parsed.sleep || 0,
        stress: parsed.stress || 0,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-[360px] bg-white rounded-[30px] p-5 shadow-xl">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            ←
          </button>
          <h1 className="font-semibold text-gray-800">Analysis</h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* WATER */}
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col justify-between h-44">
            <h2 className="text-sm font-semibold">Water</h2>

            <div className="flex items-end justify-between h-16 mt-2">
              {[40, 60, 50, 70, 55, 65, 45, 75].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-sky-300 rounded-full"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="bg-sky-300 rounded-xl p-3 mt-2">
              <p className="text-white font-semibold text-sm">
                {data.water} Gelas
              </p>
            </div>
          </div>

          {/* OLAHRAGA */}
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-between h-44">
            <h2 className="text-sm font-semibold self-start">Olahraga</h2>

            <div className="relative">
              <svg className="w-24 h-24 -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="251"
                  strokeDashoffset={251 - (data.calories / 3000) * 251}
                  strokeLinecap="round"
                  className="text-sky-400"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sky-400 font-bold text-lg">
                  {data.calories}
                </span>
                <span className="text-[10px] text-gray-400">
                  calories
                </span>
              </div>
            </div>
          </div>

          {/* FOKUS */}
          <div className="bg-gray-50 rounded-2xl p-4 h-32 flex flex-col justify-between">
            <h2 className="text-sm font-semibold">Fokus</h2>
            <div>
              <p className="text-sky-400 text-xl font-bold">
                {data.focus}
              </p>
              <p className="text-xs font-semibold">Hours</p>
            </div>
          </div>

          {/* STRESS */}
          <div className="bg-gray-50 rounded-2xl p-4 h-44 flex flex-col justify-between">
            <h2 className="text-sm font-semibold">Stress</h2>

            <div className="flex justify-center">
              <svg
                viewBox="0 0 32 32"
                className="w-14 h-14 text-red-400 stroke-current fill-none"
                strokeWidth="1.5"
              >
                <path d="M16 28.5L4.5 17C2 14.5 2 10.5 4.5 8s6.5-2.5 9 0l2.5 2.5 2.5-2.5c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9L16 28.5z" />
              </svg>
            </div>

            <p className="text-sky-400 font-bold text-lg text-left">
              {data.stress}
            </p>
          </div>

          {/* SLEEP */}
          <div className="bg-gray-50 rounded-2xl p-4 h-32 flex flex-col justify-between">
            <h2 className="text-sm font-semibold">Sleep</h2>
            <div>
              <p className="text-sky-400 text-xl font-bold">
                {data.sleep}
              </p>
              <p className="text-xs font-semibold">hours</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}