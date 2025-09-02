const SocialWall = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // elegant fish dish
    "https://images.unsplash.com/photo-1581404917879-9b1c0e1f0b1c", // vibrant cocktail
    "https://images.unsplash.com/photo-1625941136403-6b3c3e3f7e2e", // grilled meat
    "https://images.unsplash.com/photo-1606788075761-6c0b1f6b9c3b", // chef portrait
  ];

  return (
    <section className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">From Instagram</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Instagram ${i + 1}`}
              className="rounded-lg shadow hover:scale-105 transition-transform duration-300 object-cover h-48 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWall;