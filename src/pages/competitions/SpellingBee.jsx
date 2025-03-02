export default function SpellingBee() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Spelling Bee</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
            <p className="text-gray-600 mb-6">
              Test your spelling skills in our annual spelling competition. 
              Participants compete in rounds of increasingly challenging words.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Competition Format:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Multiple age divisions</li>
                <li>Written and oral rounds</li>
                <li>Biblical and general vocabulary</li>
                <li>Progressive difficulty levels</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Get Competition Details</h2>
            <p className="text-gray-600 mb-6">
              Download the official Spelling Bee information packet to learn more about 
              competition rules, preparation guidelines, and participation requirements.
            </p>
            <a 
              href="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c4dcd51c1e7dd09e643b8f.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Download Info Packet
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
