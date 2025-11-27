import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&h=800&fit=crop"
          alt="Final CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D0D0F]/85 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <h2 className="text-white mb-6" style={{ fontSize: '48px', lineHeight: '1.2' }}>
          Jsi připravený začít? Ženy ve tvém okolí čekají na odpověď
        </h2>
        
        <p className="text-white/70 mb-10 max-w-[600px] mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
          Připoj se k tisícům mužů, kteří už našli to, co hledali
        </p>

        <button className="bg-[#C1173C] text-white px-16 py-6 rounded-xl hover:bg-[#d11a44] transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(193,23,60,0.6)] transform hover:scale-105" style={{ fontSize: '22px' }}>
          Přejít na profily
        </button>

        <p className="text-white/40 mt-6" style={{ fontSize: '14px' }}>
          Přístup pouze pro dospělé. Soukromě a důvěrně.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontSize: '14px' }}>Zabezpečené spojení</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontSize: '14px' }}>Ochrana osobních údajů</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontSize: '14px' }}>Pouze 18+</span>
          </div>
        </div>
      </div>
    </section>
  );
}