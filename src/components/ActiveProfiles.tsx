import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileCardProps {
  image: string;
  name: string;
  age: number;
  status: string;
}

function ProfileCard({ image, name, age, status }: ProfileCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3 shadow-lg hover:shadow-2xl transition-all duration-300">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-[#C1173C] text-white px-3 py-1 rounded-full" style={{ fontSize: '12px' }}>
          Chce se seznámit
        </div>
      </div>
      <div className="px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white" style={{ fontSize: '20px' }}>{name}, {age}</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse"></div>
            <span className="text-[#4ADE80]" style={{ fontSize: '14px' }}>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ActiveProfiles() {
  const profiles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1668191174012-7d5a78e454a5?w=400&h=400&fit=crop",
      name: "Petra",
      age: 27,
      status: "Online"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400&h=400&fit=crop",
      name: "Tereza",
      age: 24,
      status: "Online"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?w=400&h=400&fit=crop",
      name: "Jana",
      age: 29,
      status: "Online"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1711629151415-dd8392ea80ed?w=400&h=400&fit=crop",
      name: "Veronika",
      age: 26,
      status: "Online"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1753048806756-2815ae29d019?w=400&h=400&fit=crop",
      name: "Lenka",
      age: 31,
      status: "Online"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?w=400&h=400&fit=crop",
      name: "Kateřina",
      age: 25,
      status: "Online"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1706099347777-002ab5e8190c?w=400&h=400&fit=crop",
      name: "Lucie",
      age: 28,
      status: "Online"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1636228938525-73ff14077ba2?w=400&h=400&fit=crop",
      name: "Markéta",
      age: 30,
      status: "Online"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/flagged/photo-1579924711789-872f06ecf220?w=400&h=400&fit=crop",
      name: "Barbora",
      age: 27,
      status: "Online"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1631695117568-c56a4e039ac4?w=400&h=400&fit=crop",
      name: "Simona",
      age: 26,
      status: "Online"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1609091289242-735df7a2207a?w=400&h=400&fit=crop",
      name: "Michaela",
      age: 29,
      status: "Online"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1643555388236-d0031659d3e4?w=400&h=400&fit=crop",
      name: "Andrea",
      age: 32,
      status: "Online"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-white text-center mb-16" style={{ fontSize: '48px' }}>
          Ženy, které jsou online právě teď
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {profiles.map(profile => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#C1173C] text-white px-12 py-5 rounded-xl hover:bg-[#d11a44] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(193,23,60,0.4)]" style={{ fontSize: '18px' }}>
            Zobrazit všechny profily
          </button>
        </div>
      </div>
    </section>
  );
}