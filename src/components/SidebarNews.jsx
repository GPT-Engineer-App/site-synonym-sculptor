const SidebarNews = () => (
  <div className="bg-white p-4 rounded-lg shadow mb-4">
    <h2 className="text-xl font-bold mb-2">Siste nytt</h2>
    <ul className="space-y-2">
      <li className="flex items-start">
        <span className="text-red-600 font-bold mr-2">2 min</span>
        <p>Norsk OL-håp åpen om mentale utfordringer: - Har vært veldig, veldig tøft</p>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-bold mr-2">9 min</span>
        <p>Moské-angrepet: - Det var som en krig</p>
      </li>
      <li className="flex items-start">
        <span className="text-red-600 font-bold mr-2">1 t</span>
        <p>Oslo: E6-kø etter ulykke med flere biler</p>
      </li>
    </ul>
  </div>
);

export default SidebarNews;
