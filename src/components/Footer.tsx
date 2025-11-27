export function Footer() {
  return (
    <footer className="bg-black py-8 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-gray-500 mb-4">
          <p className="mb-2">Túto stránku môžu navštevovať iba osoby staršie ako 18 rokov.</p>
          <p>Všetky profily sú overované. Vaše súkromie je chránené.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-4">
          <a href="#" className="hover:text-[#FF6A5C] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#FF6A5C] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#FF6A5C] transition-colors">
            Cookies
          </a>
          <a href="#" className="hover:text-[#FF6A5C] transition-colors">
            Support
          </a>
        </div>
        
        <div className="text-center text-gray-600">
          © 2025 Adult Dating Slovakia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
