export default function NewsPage() {
  const news = [
    { id: 1, title: "FCC Austin Launches New Youth Program", date: "Sep 10, 2025" },
    { id: 2, title: "Community Outreach Event Success", date: "Aug 22, 2025" },
    { id: 3, title: "Upcoming Feast Day Celebration", date: "Oct 1, 2025" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">News & Announcements</h1>
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id} className="p-4 border rounded shadow-sm hover:bg-gray-50">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
