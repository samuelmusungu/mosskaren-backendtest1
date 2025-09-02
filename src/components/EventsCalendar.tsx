const events = [
  { date: "Sat, Sept 7", title: "Live Jazz Night" },
  { date: "Fri, Sept 13", title: "Cocktail Masterclass" },
  { date: "Sun, Sept 15", title: "Brunch & Acoustic" },
];

const EventsCalendar = () => {
  return (
    <section className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Upcoming Events</h2>
        <ul className="space-y-6 max-w-xl mx-auto">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-4">
              <span className="text-orange-500 font-semibold">{event.date}</span>
              <span className="text-muted-foreground">{event.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventsCalendar;