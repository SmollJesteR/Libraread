const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "LibraRead has completely transformed how I discover new books. The interface is intuitive, and the recommendations are spot-on. I've found so many hidden gems!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Literature Professor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "As an educator, I appreciate the comprehensive database and easy-to-use features. It's become an invaluable tool for both my research and personal reading.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Book Club Organizer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "Managing our book club has never been easier! The reading list feature helps us stay organized, and the detailed book information enhances our discussions.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="py-16 px-8 bg-green-light/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green text-center mb-12">
          What Our Readers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-green"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}