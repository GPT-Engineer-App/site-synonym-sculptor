const LiveNews = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center space-x-2 mb-2">
      <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold rounded">LIVE</span>
      <span className="text-sm">Knivangrepet i Southport 55 min siden</span>
      <span className="text-sm">Casper Ruud i 3. runde 53 min siden</span>
    </div>
    <img src="/placeholder.svg" alt="Live news" className="w-full h-64 object-cover mb-2" />
    <h2 className="text-4xl font-bold mb-2">Moské-angrepet:</h2>
    <h1 className="text-6xl font-bold">- Blindt raseri</h1>
  </div>
);

export default LiveNews;
