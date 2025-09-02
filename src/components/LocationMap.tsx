const LocationMap = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start md:items-center">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-400 mb-2">Find Us</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto md:mx-0 mb-6"></div>
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

        {/* Responsive Map */}
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.745130338806!2d36.71557488992114!3d-1.3289514487283598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b7f63c0c3e5%3A0xf5d6391b6c000f13!2sKaren%20Plains%20Hotel!5e0!3m2!1sen!2ske!4v1756848284336!5m2!1sen!2ske"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;