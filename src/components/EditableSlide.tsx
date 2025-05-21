import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

interface EditableSlideProps {
  initialTitle?: string;
  initialCaption?: string;
}

export const EditableSlide: React.FC<EditableSlideProps> = ({
  initialTitle = "Quarterly Revenue Trends",
  initialCaption = "Q3 sees the highest spend in rural regions.",
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [title, setTitle] = useState(initialTitle);
  const [caption, setCaption] = useState(initialCaption);

  // persist edits in localStorage
  useEffect(() => {
    const storedTitle = localStorage.getItem("slide-title");
    const storedCaption = localStorage.getItem("slide-caption");
    if (storedTitle) setTitle(storedTitle);
    if (storedCaption) setCaption(storedCaption);
  }, []);

  useEffect(() => {
    localStorage.setItem("slide-title", title);
    localStorage.setItem("slide-caption", caption);
  }, [title, caption]);

  // render simple line chart once on mount
  useEffect(() => {
    if (!canvasRef.current) return;
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Revenue",
            data: [3, 4, 5, 4, 6, 7],
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246,0.4)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
    return () => {
      chart.destroy();
    };
  }, []);

  // Placeholder for AI rewrite (future)
  const handleRewrite = () => {
    // Could call API here
    alert("AI rewrite coming soon!");
  };

  return (
    <div className="w-full max-w-4xl aspect-video bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full h-2/3 flex items-center justify-center mb-6">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
        {/* Editable title */}
        <h2
          ref={titleRef}
          contentEditable
          suppressContentEditableWarning
          className="text-2xl font-bold mb-2 outline-none focus:ring-2 focus:ring-blue-300 rounded px-2"
          data-testid="slide-title"
          onInput={(e) => setTitle(e.currentTarget.innerText)}
        >
          {title}
        </h2>
        {/* Editable caption/insight */}
        <div
          ref={captionRef}
          contentEditable
          suppressContentEditableWarning
          className="text-lg text-gray-700 mb-4 outline-none focus:ring-2 focus:ring-blue-200 rounded px-2 min-h-[2em]"
          data-testid="slide-caption"
          onInput={(e) => setCaption(e.currentTarget.innerText)}
        >
          {caption}
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleRewrite}
            type="button"
          >
            Rewrite with AI
          </button>
          <span className="text-xs text-gray-400">(coming soon)</span>
        </div>
      </div>
    </div>
  );
};
