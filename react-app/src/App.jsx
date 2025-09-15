import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          ⚡ Spark Example Showcase on K8s
        </h1>
        <p className="text-xl text-white/80 text-center mb-12">
          Apache Spark Examples Running on Kubernetes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">🔥 Spark Core</h2>
            <p className="text-white/80 mb-4">
              Fundamental Spark operations including RDD transformations and actions
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-green-300 text-sm">
                spark.range(1000).filter(x => x % 2 == 0).count()
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">📊 Spark SQL</h2>
            <p className="text-white/80 mb-4">
              Structured data processing with DataFrames and SQL queries
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-blue-300 text-sm">
                df.groupBy("category").agg(sum("amount"))
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">🌊 Spark Streaming</h2>
            <p className="text-white/80 mb-4">
              Real-time data processing with structured streaming
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-purple-300 text-sm">
                stream.writeStream.format("console").start()
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">🤖 MLlib</h2>
            <p className="text-white/80 mb-4">
              Machine learning algorithms and model training
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-yellow-300 text-sm">
                LinearRegression().fit(trainingData)
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">📈 GraphX</h2>
            <p className="text-white/80 mb-4">
              Graph processing and analytics on large-scale networks
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-indigo-300 text-sm">
                graph.pageRank(0.001).vertices
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">☸️ Kubernetes</h2>
            <p className="text-white/80 mb-4">
              Spark applications deployed and managed on Kubernetes
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-cyan-300 text-sm">
                spark-submit --master k8s://cluster
              </code>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Deploy</h3>
            <p className="text-white/80 text-lg">
              This showcase demonstrates various Apache Spark capabilities running on Kubernetes infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App