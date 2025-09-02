const team = [
  {
    name: "Chef Wanjiru",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1606788075761-6c0b1f6b9c3b", // chef portrait
  },
  {
    name: "Brian",
    role: "Mixologist",
    image: "https://images.unsplash.com/photo-1600891964904-6f9f3e3f7e2e", // bartender
  },
];

const TeamSpotlight = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;