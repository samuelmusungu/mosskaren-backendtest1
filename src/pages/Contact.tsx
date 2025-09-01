const Contact = () => {
  return (
    <section className="bg-background py-20" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Whether you're booking a private event, sharing feedback, or just saying hello — we’d love to hear from you.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us what’s on your mind..."
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;