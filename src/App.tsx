import React from 'react'
import { Tv, Search, User, MessageSquare } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Tv className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Stremus</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-blue-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-6 h-6" />
          </div>
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6" />
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured Stream */}
          <div className="md:col-span-2 bg-blue-800 rounded-lg p-4">
            <div className="aspect-w-16 aspect-h-9 bg-blue-700 rounded-lg mb-4"></div>
            <h2 className="text-xl font-bold mb-2">Featured Stream</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Live Channels */}
          <div className="bg-blue-800 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Live Channels</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((channel) => (
                <li key={channel} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-700 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">Channel {channel}</h3>
                    <p className="text-sm text-blue-300">Game Name</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 p-4 text-center">
        <p>&copy; 2024 Stremus. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App