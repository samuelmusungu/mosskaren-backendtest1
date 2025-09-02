const LocationMap = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Find Us</h2>
        <p className="text-muted-foreground mb-4">Karen Plains Road, Nairobi</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;