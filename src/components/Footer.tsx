export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] py-12 px-6 border-t border-white/5">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C1173C] to-[#8B0E29] rounded-lg flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-white" style={{ fontSize: '18px' }}>Seznamka CZ</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
              Uživatelská smlouva
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
              Podmínky použití
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
              Podpora
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40" style={{ fontSize: '12px' }}>
            © 2025 Seznamka CZ. Všechna práva vyhrazena. Obsah je určen pouze pro dospělé uživatele (18+).
          </p>
          <p className="text-white/30 mt-2" style={{ fontSize: '11px' }}>
            Používáním této služby potvrzujete, že jste dosáhli plnoletosti podle zákonů České republiky.
          </p>
        </div>
      </div>
    </footer>
  );
}