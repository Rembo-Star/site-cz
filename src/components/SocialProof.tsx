export function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats */}
          <div className="space-y-12">
            <div>
              <div className="text-[#C1173C] mb-3" style={{ fontSize: '72px', lineHeight: '1' }}>
                74%
              </div>
              <p className="text-white/80" style={{ fontSize: '20px' }}>
                mužů najde partnerku do 24 hodin
              </p>
            </div>

            <div>
              <div className="text-[#C1173C] mb-3" style={{ fontSize: '72px', lineHeight: '1' }}>
                92%
              </div>
              <p className="text-white/80" style={{ fontSize: '20px' }}>
                začíná komunikovat hned první den
              </p>
            </div>

            <div>
              <div className="text-[#C1173C] mb-3" style={{ fontSize: '72px', lineHeight: '1' }}>
                10K+
              </div>
              <p className="text-white/80" style={{ fontSize: '20px' }}>
                aktivních uživatelů každý den
              </p>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="bg-[#141417] p-10 rounded-2xl border border-white/10">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 32C14 28.6863 16.6863 26 20 26C23.3137 26 26 28.6863 26 32C26 35.3137 23.3137 38 20 38C16.6863 38 14 35.3137 14 32Z" fill="#C1173C" fillOpacity="0.2"/>
                <path d="M20 26V18C20 14.6863 17.3137 12 14 12" stroke="#C1173C" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 32C22 28.6863 24.6863 26 28 26C31.3137 26 34 28.6863 34 32C34 35.3137 31.3137 38 28 38C24.6863 38 22 35.3137 22 32Z" fill="#C1173C" fillOpacity="0.2"/>
                <path d="M28 26V18C28 14.6863 25.3137 12 22 12" stroke="#C1173C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <blockquote className="text-white mb-6" style={{ fontSize: '22px', lineHeight: '1.6' }}>
              Nemyslel jsem, že je to doopravdy. Během večera mi napsaly tři holky. Komunikace snadná, bez zbytečných otázek a dlouhého psaní.
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C1173C] to-[#8B0E29] rounded-full flex items-center justify-center text-white">
                J
              </div>
              <div>
                <p className="text-white" style={{ fontSize: '18px' }}>Jan, 32</p>
                <p className="text-white/50" style={{ fontSize: '14px' }}>Praha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}