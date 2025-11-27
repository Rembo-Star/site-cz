import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const handleCTA = () => {
    // В продакшене здесь будет редирект на страницу регистрации или приложение
    alert('Redirecting to registration... In production, this would open the app or registration page.');
    // window.location.href = '/register' или открытие модального окна
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onCTA={handleCTA} />
      <Benefits />
      <SocialProof />
      <FinalCTA onCTA={handleCTA} />
      <Footer />
    </div>
  );
}
