"use client";

import { useEffect, useState } from "react";

export default function InsightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  const insights = [
    { label: "PAK", value: 200, color: "bg-[#426633]", stroke: "#426633" },
    { label: "USA", value: 700, color: "bg-[#181E4C]", stroke: "#181E4C" },
    { label: "UK", value: 350, color: "bg-[#F3636D]", stroke: "#F3636D" },
    { label: "DE", value: 190, color: "bg-[#24313D]", stroke: "#24313D" },
    { label: "CA", value: 400, color: "bg-[#D20D24]", stroke: "#D20D24" },
    { label: "Others", value: 300, color: "bg-[#DECC67]", stroke: "#DECC67" },
  ];

  const totalValue = insights.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    setIsVisible(true);

    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues(
        insights.map((item) => Math.floor(item.value * progress))
      );
      setAnimatedTotal(Math.floor(totalValue * progress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(insights.map((item) => item.value));
        setAnimatedTotal(totalValue);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const currentTotal = animatedValues.reduce((sum, val) => sum + val, 0);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1d262b] mb-8 md:mb-12 lg:mb-16">
          Creator Network
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Chart */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Donut Chart */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="40"
                />
                {insights.map((item, index) => {
                  const animatedValue = animatedValues[index] || 0;
                  const previousTotal = animatedValues
                    .slice(0, index)
                    .reduce((sum, val) => sum + val, 0);
                  const percentage =
                    currentTotal > 0 ? (animatedValue / currentTotal) * 100 : 0;
                  const circumference = 2 * Math.PI * 80;
                  const offset =
                    currentTotal > 0
                      ? (previousTotal / currentTotal) * circumference
                      : 0;
                  const dashArray = `${
                    (percentage / 100) * circumference
                  } ${circumference}`;

                  return (
                    <circle
                      key={item.label}
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={item.stroke}
                      strokeWidth="40"
                      strokeDasharray={dashArray}
                      strokeDashoffset={-offset}
                      style={{
                        transition:
                          "stroke-dasharray 0.3s ease, stroke-dashoffset 0.3s ease",
                        opacity: isVisible ? 1 : 0,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1d262b]">
                  {animatedTotal}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-500 mt-2">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-6">
            {insights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.color}`}></div>
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-800">
                    {item.label}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d262b]">
                  {animatedValues[index] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
