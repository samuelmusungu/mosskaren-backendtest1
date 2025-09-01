const ThankYou = () => {
  return (
    <section className="bg-background py-20 text-center">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl font-bold text-primary mb-4">Thank You!</h2>
        <p className="text-muted-foreground text-lg mb-6">
          We’ve received your message and will get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          Return Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;