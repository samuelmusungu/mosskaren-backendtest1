import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrbalakw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background py-20" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Whether you're booking a private event, sharing feedback, or just saying hello — we’d love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us what’s on your mind..."
              className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-primary text-white rounded-md transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;