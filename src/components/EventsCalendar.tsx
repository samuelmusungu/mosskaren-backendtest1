import { useEffect, useState } from "react";

type EventItem = {
  id: string;
  date: string;
  title: string;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

const EventsCalendar = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load events");
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
          Upcoming Events
        </h2>

        {loading && <p className="text-center text-muted-foreground">Loading events...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className={`rounded-lg p-6 shadow-lg cursor-pointer transition hover:scale-105 ${
                selectedDate === event.date ? "bg-orange-500 text-white" : "bg-card"
              }`}
              onClick={() =>
                setSelectedDate(selectedDate === event.date ? null : event.date)
              }
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {formatDate(event.date)}
              </h3>
              <p className="mt-2 text-muted-foreground">{event.title}</p>
              {selectedDate === event.date && (
                <p className="mt-4 text-sm">Tap again to deselect</p>
              )}
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              You selected{" "}
              <span className="font-semibold text-orange-500">
                {formatDate(selectedDate)}
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;