export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#4a0000] via-[#1f0000] to-black">

      {/* Soft Background Glow */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-red-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-[150px] animate-pulse delay-3000"></div>

      {/* Card */}
      <div className="relative z-20 max-w-xl w-[90%] md:w-[75%] bg-white/10 backdrop-blur-xl px-10 py-14 rounded-3xl shadow-2xl border border-white/10 text-center
        animate-[popIn_0.9s_ease-out]">

        {/* Title with scaling animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide
          animate-[fadeScale_1.4s_ease-out]">
          The Guide
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-300 text-sm md:text-lg tracking-wide animate-[fadeIn_1.4s_ease-out]">
          Your Companion to Knowledge, Culture & Inspiration
        </p>

        {/* Animated Dots Loader */}
        <div className="flex justify-center gap-3 mt-8">
          <span className="w-3 h-3 bg-white/80 rounded-full animate-[dotBounce_1s_infinite]"></span>
          <span className="w-3 h-3 bg-white/80 rounded-full animate-[dotBounce_1s_infinite_0.2s]"></span>
          <span className="w-3 h-3 bg-white/80 rounded-full animate-[dotBounce_1s_infinite_0.4s]"></span>
        </div>

        {/* Launching Heading */}
        <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-orange-400 animate-[fadeIn_1.8s_ease-out]">
          Launching Soon
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base animate-[fadeIn_2s_ease-out]">
          We're crafting something meaningful and beautiful for you.  
          Stay tuned for updates — coming very soon!
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes popIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes dotBounce {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.6); opacity: 1; }
          100% { transform: scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
