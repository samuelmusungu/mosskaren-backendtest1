const BrandStory = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Story</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The Moss Karen was born from a love of fine dining, local flavor, and unforgettable ambiance.
            Nestled in the heart of Karen, we blend elegance with warmth — offering a space where every dish
            tells a story and every guest feels at home.
          </p>
        </div>
        <img
  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  alt="Our Story"
  className="rounded-lg shadow-lg"
/>
      </div>
    </section>
  );
};

export default BrandStory;