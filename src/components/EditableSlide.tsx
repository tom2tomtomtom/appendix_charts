import React, { useRef } from "react";

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

  // Placeholder for AI rewrite (future)
  const handleRewrite = () => {
    // Could call API here
    alert("AI rewrite coming soon!");
  };

  return (
    <div className="w-full max-w-4xl aspect-video bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Chart placeholder */}
        <div className="w-full h-2/3 flex items-center justify-center mb-6">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl border border-blue-200">
            Chart.js Placeholder
          </div>
        </div>
        {/* Editable title */}
        <h2
          ref={titleRef}
          contentEditable
          suppressContentEditableWarning
          className="text-2xl font-bold mb-2 outline-none focus:ring-2 focus:ring-blue-300 rounded px-2"
          data-testid="slide-title"
        >
          {initialTitle}
        </h2>
        {/* Editable caption/insight */}
        <div
          ref={captionRef}
          contentEditable
          suppressContentEditableWarning
          className="text-lg text-gray-700 mb-4 outline-none focus:ring-2 focus:ring-blue-200 rounded px-2 min-h-[2em]"
          data-testid="slide-caption"
        >
          {initialCaption}
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
