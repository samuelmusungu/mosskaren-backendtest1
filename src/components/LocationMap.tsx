const LocationMap = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-400 mb-2">Find Us</h2>
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-muted-foreground mb-2">Karen Plains Road, Nairobi</p>
        <p className="text-muted-foreground mb-6">Phone: +254 712 345678</p>
        <p className="text-sm text-muted-foreground mb-6">
          Nestled in the heart of Karen, our location offers easy access to Nairobi’s finest attractions.
        </p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Karen+Plains+Hotel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default LocationMap;