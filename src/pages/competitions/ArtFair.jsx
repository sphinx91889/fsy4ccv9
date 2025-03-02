export default function ArtFair() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">How Great Thou Art Fair</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
            <p className="text-gray-600 mb-6">
              Showcase your artistic talents inspired by faith. Create and present artwork 
              that reflects biblical themes and spiritual messages.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Categories:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Painting</li>
                <li>Drawing</li>
                <li>Digital Art</li>
                <li>Mixed Media</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Submit Your Art</h2>
            <p className="text-gray-600 mb-6">
              Register and submit your artwork for the competition.
            </p>
            <a 
              href="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c4dcd533e8ff47bc0e41ae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Submit Entry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
