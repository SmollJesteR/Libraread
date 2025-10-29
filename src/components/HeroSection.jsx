import heroImage from '../assets/book-hero.png';

export default function HeroSection() {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-green-light/50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-6">
            Discover Your Next
            <span className="block">Great Read</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            LibraRead helps you explore millions of books, manage your reading list, and discover new favorites. 
            Our digital library puts the world's literature at your fingertips.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-green text-green font-semibold rounded-lg hover:bg-green hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img 
            src={heroImage} 
            alt="LibraRead Hero" 
            className="w-full max-w-[500px] h-auto drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
}