export default function EventsPage() {
  const events = [
    { id: 1, title: "Community Mass", date: "Oct 12, 2025" },
    { id: 2, title: "Filipino Feast Day", date: "Nov 20, 2025" },
    { id: 3, title: "Volunteer Meetup", date: "Dec 5, 2025" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="p-4 border rounded shadow-sm hover:bg-gray-50">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
