const OlympicsSection = () => (
  <div className="mt-4 bg-white p-4 rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-2">OL 2024</h2>
    <div className="flex space-x-4">
      <button className="bg-gray-200 px-4 py-2 rounded">Siste</button>
      <button className="bg-gray-200 px-4 py-2 rounded">Program</button>
      <button className="bg-gray-200 px-4 py-2 rounded">Medaljer</button>
    </div>
    <div className="mt-4 flex space-x-4">
      <div className="flex-1 bg-gray-100 p-2 rounded">
        <span className="text-red-600 font-bold">LIVE</span>
        <p>Kvinner Boksing: 75 kg, åttedelsfinale</p>
      </div>
      <div className="flex-1 bg-gray-100 p-2 rounded">
        <span className="text-red-600 font-bold">LIVE</span>
        <p>Menn Turn: Individuell mangekamp, finale</p>
      </div>
      <div className="flex-1 bg-gray-100 p-2 rounded">
        <p>18:15 Menn Svømming: 100 m butterfly, finale</p>
      </div>
    </div>
  </div>
);

export default OlympicsSection;
