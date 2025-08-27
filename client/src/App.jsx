import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Test API connection
    const fetchData = async () => {
      try {
        const response = await axios.get('/api')
        setMessage(response.data.message)
      } catch (error) {
        console.error('Error fetching data:', error)
        setMessage('Failed to connect to backend')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              MERN Stack with Vite
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built with Tailwind CSS
            </p>
          </div>

          {/* Main Card */}
          <div className="card p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                🚀 Welcome to your MERN Stack Application!
              </h2>
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">Loading...</span>
                </div>
              ) : (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200">
                    Backend API says: <span className="font-semibold">{message}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                  <span className="mr-2">✅</span>
                  What's included:
                </h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    React frontend with Vite
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Express.js backend server
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    MongoDB database connection
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    JWT authentication setup
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    User model and auth routes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Tailwind CSS styling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Hot reloading for development
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  Next steps:
                </h3>
                <ol className="space-y-2 text-purple-700 dark:text-purple-300">
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    Start MongoDB service
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    Run both client and server: <code className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm ml-1">npm run dev</code>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    Build your components and API endpoints
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                    Add your business logic
                  </li>
                </ol>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Building
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              🔧 Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React', color: 'blue', icon: '⚛️' },
                { name: 'Node.js', color: 'green', icon: '🟢' },
                { name: 'MongoDB', color: 'emerald', icon: '🍃' },
                { name: 'Tailwind', color: 'cyan', icon: '🎨' }
              ].map((tech) => (
                <div key={tech.name} className={`bg-${tech.color}-50 dark:bg-${tech.color}-900/20 border border-${tech.color}-200 dark:border-${tech.color}-800 rounded-lg p-4 text-center`}>
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className={`text-${tech.color}-800 dark:text-${tech.color}-200 font-medium`}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
