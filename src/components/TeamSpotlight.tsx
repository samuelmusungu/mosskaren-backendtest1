import { useEffect, useState } from "react";

const TeamSpotlight = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/team")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load team");
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">Meet the Team</h2>

        {loading && <p className="text-muted-foreground">Loading team...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-card rounded-lg shadow-lg p-6">
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
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