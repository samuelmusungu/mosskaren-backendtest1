const LoyaltyTeaser = () => {
  return (
    <section className="bg-background py-20 text-foreground text-center">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Join the Moss Circle</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Get exclusive offers, priority reservations, and early access to events.
        </p>
        <form action="https://formspree.io/f/your-id" method="POST" className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded-md bg-card text-foreground border border-border flex-grow"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoyaltyTeaser;