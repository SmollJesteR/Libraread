import heroImage from "../assets/hero_img.svg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 px-6">
      {/* Background image + gradient overlay (Tailwind utilities) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-light/80 to-white/60" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-6">
            Discover Your Next
            <span className="block">Great Read</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            LibraRead helps you explore millions of books, manage your reading
            list, and discover new favorites. Our digital library puts the
            world's literature at your fingertips.
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
          {/* Decorative image shown on the right for large screens */}
          <img
            src={heroImage}
            alt="LibraRead Hero showcase"
            className="w-full max-w-[500px] h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
