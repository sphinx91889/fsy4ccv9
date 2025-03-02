export default function CountWord() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Count on the Word</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
            <p className="text-gray-600 mb-6">
              Mathematical challenges based on biblical principles. Participants solve 
              problems that combine mathematical skills with biblical knowledge.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Competition Categories:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Basic Mathematics</li>
                <li>Problem Solving</li>
                <li>Biblical Numerology</li>
                <li>Applied Mathematics</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <p className="text-gray-600 mb-6">
              Register for the Count on the Word competition.
            </p>
            <a 
              href="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c4def21c1e7d01fa643cd1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
