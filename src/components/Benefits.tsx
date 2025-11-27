import { CheckCircle, Zap, Lock, Users } from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-[#C1173C]">
        {icon}
      </div>
      <h3 className="text-white mb-3" style={{ fontSize: '20px' }}>
        {title}
      </h3>
      <p className="text-[#B5B5B5] max-w-[280px] mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
}

export function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: <CheckCircle size={48} strokeWidth={1.5} />,
      title: "Skutečné profily",
      description: "Ověřený systém verifikace vylučuje falešné účty."
    },
    {
      id: 2,
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: "Rychlá komunikace",
      description: "Začněte konverzaci během několika sekund bez dlouhých registrací."
    },
    {
      id: 3,
      icon: <Lock size={48} strokeWidth={1.5} />,
      title: "Soukromí",
      description: "Vaše údaje nikam nepředáváme. Chráníme každý váš krok."
    },
    {
      id: 4,
      icon: <Users size={48} strokeWidth={1.5} />,
      title: "Ženy, které se opravdu chtějí sejít",
      description: "Žádné hry. Jen ty, které jsou naladěné na komunikaci."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#141417]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-white text-center mb-16" style={{ fontSize: '48px' }}>
          Proč nás muži volí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map(benefit => (
            <BenefitItem key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}