import Header from '../component/Header'

function Home() {
  return (
    <>
        <div className="h-screen w-full bg-[url('/images.jpeg')] bg-cover bg-center">
      <Header />
      <div className="relative flex flex-col items-center justify-center h-160 text-center text-blue-50 px-6">
        
        <h1 className="text-5xl font-bold mb-4">
          Smart Offline Tracker 🚀
        </h1>
        <p className="max-w-2xl text-lg mb-6">
          Track, analyze, and stay connected even when you’re offline.  
          Integrating <span className="text-amber-600 font-semibold">maps, weather, and AI chatbot</span>.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 rounded-lg bg-amber-700 hover:bg-blue-700 transition shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg bg-emerald-600 backdrop-blur-md hover:bg-white/30 transition shadow-lg">
            Learn More
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">🌍 Real-time Map</h2>
            <p>Visualize locations with an interactive map tracker.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">☀️ Weather Updates</h2>
            <p>Stay updated with live weather insights for any location.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">🤖 AI Chatbot</h2>
            <p>Ask questions and get instant assistance, even offline.</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Home
