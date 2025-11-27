import { Clock, Eye, Flame, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Flame,
      title: 'Stretnutia bez záväzkov',
      description: 'Casual dating pre dospelých'
    },
    {
      icon: Clock,
      title: 'Rýchle a jednoduché',
      description: 'Dnes zaregistruj, dnes stretni'
    },
    {
      icon: Eye,
      title: '100% diskrétne',
      description: 'Tvoje súkromie je priorita'
    },
    {
      icon: Shield,
      title: 'Overení členovia',
      description: 'Bezpečné prostredie pre dospelých'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">
          Prečo práve my
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF6A5C]/20 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#FF6A5C]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
