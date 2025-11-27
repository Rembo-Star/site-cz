import { Search, MessageCircle, Calendar } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
}

function Step({ icon, step, title, description }: StepProps) {
  return (
    <div className="text-center relative">
      <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#C1173C] to-[#8B0E29] rounded-2xl text-white shadow-lg">
        {icon}
      </div>
      <div className="absolute top-8 left-4 w-8 h-8 bg-[#0D0D0F] border-2 border-[#C1173C] rounded-full flex items-center justify-center text-[#C1173C]" style={{ fontSize: '14px' }}>
        {step}
      </div>
      <h3 className="text-white mb-3" style={{ fontSize: '24px' }}>
        {title}
      </h3>
      <p className="text-[#B5B5B5] max-w-[300px] mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <Search size={36} />,
      title: "Vyber si ženu",
      description: "Prohlížej profily těch, které jsou online právě teď."
    },
    {
      id: 2,
      icon: <MessageCircle size={36} />,
      title: "Otevři chat",
      description: "Ona dostane upozornění a uvidí tvůj profil jako první."
    },
    {
      id: 3,
      icon: <Calendar size={36} />,
      title: "Domluvte si schůzku",
      description: "Pokud je vzájemný zájem, přejděte k osobnímu setkání."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#141417]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-white text-center mb-4" style={{ fontSize: '48px' }}>
          Jak to funguje
        </h2>
        <p className="text-white/60 text-center mb-16 max-w-[600px] mx-auto" style={{ fontSize: '20px' }}>
          Tři jednoduché kroky k seznámení
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#C1173C]/50 via-[#C1173C] to-[#C1173C]/50"></div>
          
          {steps.map(step => (
            <Step key={step.id} step={step.id} {...step} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#C1173C] text-white px-12 py-5 rounded-xl hover:bg-[#d11a44] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(193,23,60,0.4)]" style={{ fontSize: '18px' }}>
            Začít hned teď
          </button>
        </div>
      </div>
    </section>
  );
}