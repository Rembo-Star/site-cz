interface FinalCTAProps {
  onCTA: () => void;
}

export function FinalCTA({ onCTA }: FinalCTAProps) {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="mb-4">
          Pripravený na nové zážitky?
        </h2>
        
        <p className="text-gray-300 mb-8">
          Pripoj sa k tisícom ľudí, ktorí hľadajú casual stretnutia bez záväzkov.
        </p>

        <button
          onClick={onCTA}
          className="w-full bg-[#FF6A5C] text-white py-5 rounded-lg hover:bg-[#ff5545] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
        >
          Vstúpiť Teraz – 18+
        </button>

        <p className="text-gray-500 mt-4">
          Diskrétne • Bezpečné • Len pre dospelých
        </p>
      </div>
    </section>
  );
}
