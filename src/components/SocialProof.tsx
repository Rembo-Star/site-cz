import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Martina',
      age: 28,
      city: 'Bratislava',
      text: 'Konečne stránka, kde všetci vedia, čo chcú. Bez zbytočných rečí.'
    },
    {
      name: 'Peter',
      age: 33,
      city: 'Košice',
      text: 'Stretol som sa s niekoľkými ženami. Všetko diskrétne a bezpečné.'
    },
    {
      name: 'Lucia',
      age: 30,
      city: 'Žilina',
      text: 'Presne to, čo som hľadala. Bez záväzkov, bez dramatu.'
    },
    {
      name: 'Jakub',
      age: 35,
      city: 'Nitra',
      text: 'Prvý večer a už som mal stretnutie. Funguje to perfektne!'
    },
    {
      name: 'Simona',
      age: 26,
      city: 'Prešov',
      text: 'Nikto ma tu nesúdi. Každý vie, prečo tu je.'
    },
    {
      name: 'Marek',
      age: 31,
      city: 'Bratislava',
      text: 'Zaregistroval som sa pred týždňom a už som stretol 3 ženy. Top!'
    },
    {
      name: 'Katarína',
      age: 29,
      city: 'Košice',
      text: 'Nikdy som nemyslela, že je to také jednoduché. Odporúčam!'
    },
    {
      name: 'Tomáš',
      age: 38,
      city: 'Trnava',
      text: 'Po rozvode som presne toto potreboval. Žiadne záväzky.'
    },
    {
      name: 'Veronika',
      age: 27,
      city: 'Banská Bystrica',
      text: 'Konečne môžem byť sama sebou bez ohľadu na to, čo si myslia iní.'
    },
    {
      name: 'Filip',
      age: 32,
      city: 'Žilina',
      text: 'Rýchle, jednoduché, diskrétne. Čo viac si priať?'
    },
    {
      name: 'Andrea',
      age: 25,
      city: 'Bratislava',
      text: 'Lepšie než akákoľvek iná stránka, ktorú som skúšala.'
    },
    {
      name: 'Michal',
      age: 36,
      city: 'Košice',
      text: 'Overené profily, žiadne fake. Stojí to za to.'
    },
    {
      name: 'Zuzana',
      age: 31,
      city: 'Prešov',
      text: 'Našla som tu presne to, čo som hľadala. Vďaka!'
    },
    {
      name: 'Roman',
      age: 34,
      city: 'Nitra',
      text: 'Po prvom stretnutí som vedel, že toto je ono. Úžasné!'
    },
    {
      name: 'Jana',
      age: 28,
      city: 'Trnava',
      text: 'Bezpečné a súkromné. Nikto sa o tom nedozvie.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500); // Zmena každé 3.5 sekundy

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">
          Čo hovoria naši užívatelia
        </h2>

        {/* Single Testimonial with Animation */}
        <div className="flex justify-center min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700/50">
                <div className="mb-4">
                  <div className="text-white">
                    {currentTestimonial.name}, {currentTestimonial.age}
                  </div>
                  <div className="text-gray-400">{currentTestimonial.city}</div>
                </div>
                <p className="text-gray-300 italic text-lg">
                  "{currentTestimonial.text}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-[#FF6A5C]'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-gray-400">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
}
