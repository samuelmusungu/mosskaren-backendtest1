import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Grace M.",
    quote: "The ambiance is unmatched. I felt like royalty.",
  },
  {
    name: "David K.",
    quote: "Best steak I’ve had in Nairobi. Period.",
  },
  {
    name: "Amina N.",
    quote: "Service was impeccable. The cocktails? Divine.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, quote } = testimonials[index];

  return (
    <section className="bg-muted text-foreground py-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Guest Testimonials</h2>
        <blockquote className="text-xl italic mb-4 text-muted-foreground">
          “{quote}”
        </blockquote>
        <p className="text-sm font-medium text-primary">{name}</p>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;