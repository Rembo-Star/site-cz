import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onCTA: () => void;
}

export function Hero({ onCTA }: HeroProps) {
  const [onlineUsers, setOnlineUsers] = useState(2847);

  useEffect(() => {
    // Симуляция изменения количества онлайн пользователей
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 10) - 4; // От -4 до +5
        const newValue = prev + change;
        // Держим значение в диапазоне 2500-3500
        return Math.max(2500, Math.min(3500, newValue));
      });
    }, 4000); // Обновление каждые 4 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758524941076-fbaf24c28732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGludGltYXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjQyNDIxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Intimate encounters"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-900/70 to-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 max-w-lg mx-auto text-center">
        {/* Online Users Counter */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <Users className="w-4 h-4 text-green-400" />
          <span className="text-white">
            <span className="font-semibold">{onlineUsers.toLocaleString()}</span> online teraz
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white mb-4">
          Nájdi si spoločnosť na dnes večer
        </h1>

        {/* Subheading */}
        <p className="text-white/90 mb-3">
          Bez záväzkov. Len ty a tvoje túžby.
        </p>

        <p className="text-white/80 mb-10">
          Tisíce ľudí z celého Slovenska hľadajú to isté, čo ty.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCTA}
          className="w-full bg-[#FF6A5C] text-white py-5 rounded-lg hover:bg-[#ff5545] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] mb-6"
        >
          Začni Teraz – Zadarmo
        </button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-[#FF6A5C]" />
            <span className="text-sm">100% Diskrétne</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#FF6A5C]" />
            <span className="text-sm">Súkromné správy</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#FF6A5C]" />
            <span className="text-sm">18+ Len dospelí</span>
          </div>
        </div>
      </div>
    </div>
  );
}
