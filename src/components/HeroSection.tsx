import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&h=1080&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F]/90 via-[#0D0D0F]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1140px] mx-auto px-6 flex items-center">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-white mb-6" style={{ fontSize: '56px', lineHeight: '1.1' }}>
            Ona už se s tebou chce seznámit
          </h1>
          
          <p className="text-white/90 mb-8 max-w-[540px]" style={{ fontSize: '24px', lineHeight: '1.4' }}>
            Uzavřený přístup k ženám, které hledají setkání ještě dnes. Soukromě a bez dlouhých profilů.
          </p>

          <button className="bg-[#C1173C] text-white px-12 py-5 rounded-xl hover:bg-[#d11a44] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(193,23,60,0.4)] transform hover:scale-105" style={{ fontSize: '20px' }}>
            Zobrazit profily
          </button>

          <p className="text-white/50 mt-4" style={{ fontSize: '14px' }}>
            Přístup pouze pro dospělé. Anonymně.
          </p>
        </div>
      </div>
    </section>
  );
}