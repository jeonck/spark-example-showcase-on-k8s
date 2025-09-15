import { useState, useEffect } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('examples')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          ⚡ Spark Example Showcase on K8s
        </h1>
        <p className="text-xl text-white/80 text-center mb-8">
          Comprehensive Apache Spark examples running on Kubernetes infrastructure
        </p>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20">
            <button
              onClick={() => setActiveTab('examples')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'examples'
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              📊 Spark Examples
            </button>
            <button
              onClick={() => setActiveTab('installation')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'installation'
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              ⚙️ Installation Guide
            </button>
          </div>
        </div>

        {/* Examples Tab */}
        {activeTab === 'examples' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">🔥 Spark Core</h2>
            <p className="text-white/80 mb-4">
              Fundamental Spark operations including RDD transformations and actions
            </p>
            <div className="bg-black/20 rounded-lg p-3">
              <code className="text-green-300 text-sm">
                spark.range(1000).filter(x =&gt; x % 2 == 0).count()
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

          <div className="mt-12 text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Deploy</h3>
              <p className="text-white/80 text-lg">
                This showcase demonstrates various Apache Spark capabilities running on Kubernetes infrastructure
              </p>
            </div>
          </div>
          </div>
        )}

        {/* Installation Guide Tab */}
        {activeTab === 'installation' && (
          <div className="space-y-8">
            {/* Spark Operator Installation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                ⚙️ Spark Operator Installation
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Helm 저장소 추가</h3>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <code className="text-green-300 text-sm block mb-2">
                      helm repo add spark-operator https://kubeflow.github.io/spark-operator
                    </code>
                    <code className="text-green-300 text-sm block">
                      helm repo update
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Spark Operator 설치</h3>
                  <p className="text-white/80 mb-3">
                    Spark Operator는 K8s에서 Spark 애플리케이션을 쉽게 관리할 수 있도록 도와주는 프로젝트입니다.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <pre className="text-green-300 text-sm whitespace-pre-wrap">
{`helm install spark-operator spark-operator/spark-operator \\
  --namespace spark-operator \\
  --create-namespace \\
  --set webhook.enable=true \\
  --set spark.jobNamespaces=spark-apps`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Spark Deployment */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                🚀 Spark 배포
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. spark-pi.yaml 작성</h3>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10 overflow-x-auto">
                    <pre className="text-yellow-300 text-sm whitespace-pre-wrap">
{`apiVersion: "sparkoperator.k8s.io/v1beta2"
kind: SparkApplication
metadata:
  name: spark-pi-example
  namespace: spark-apps
spec:
  type: Python
  mode: cluster
  image: "apache/spark-py:v3.3.1"
  mainApplicationFile: local:///opt/spark/examples/src/main/python/pi.py
  sparkVersion: "3.3.1"
  restartPolicy:
    type: OnFailure
  driver:
    cores: 1
    memory: "512m"
    serviceAccount: spark
  executor:
    cores: 1
    instances: 2
    memory: "512m"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. 서비스 계정 생성</h3>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <code className="text-green-300 text-sm block mb-2">
                      kubectl create serviceaccount spark -n spark-apps
                    </code>
                    <code className="text-green-300 text-sm block">
                      kubectl create clusterrolebinding spark-role --clusterrole=edit --serviceaccount=spark-apps:spark
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Spark 배포</h3>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <code className="text-green-300 text-sm">
                      kubectl apply -f spark-pi.yaml
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                📊 모니터링
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Spark UI 접속</h3>
                  <p className="text-white/80 mb-3">
                    장시간 실행되는 애플리케이션의 경우 Spark UI로 모니터링할 수 있습니다.
                  </p>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10 mb-4">
                    <h4 className="text-white font-medium mb-2">10000번 실행 예제 (spark-pi.yaml 수정):</h4>
                    <pre className="text-yellow-300 text-sm whitespace-pre-wrap">
{`arguments:
  - "10000"`}
                    </pre>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <code className="text-green-300 text-sm block mb-2">
                      kubectl port-forward spark-pi-example-driver 4040:4040 -n spark-apps
                    </code>
                    <code className="text-blue-300 text-sm">
                      # 브라우저에서 localhost:4040 접속
                    </code>
                  </div>
                </div>

                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-300 font-semibold mb-2">💡 Spark 애플리케이션 동작 방식</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Driver pod가 생성되고 executor pod들을 관리</li>
                    <li>• 애플리케이션 완료 후 executor는 정리되고 driver는 "Completed" 상태로 유지</li>
                    <li>• Completed 상태의 driver pod는 리소스를 사용하지 않음</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="text-purple-300 font-semibold mb-2">📈 Spark UI 기능</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• <strong>Jobs 탭:</strong> Timeline, 진행도, 실행 시간 정보</li>
                    <li>• <strong>Executors 탭:</strong> 리소스 사용량, 메모리/디스크 정보</li>
                    <li>• <strong>Task 통계:</strong> 활성/실패/완료된 태스크 수</li>
                    <li>• <strong>성능 분석:</strong> GC 시간, 입출력 정보, Thread Dump</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">📚 추가 리소스</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">🔗 유용한 명령어</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• kubectl get sparkapplications -n spark-apps</li>
                    <li>• kubectl describe sparkapp spark-pi-example -n spark-apps</li>
                    <li>• kubectl logs spark-pi-example-driver -n spark-apps</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">🛠️ 문제 해결</h4>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• 네임스페이스 확인: kubectl get ns</li>
                    <li>• 서비스 계정 확인: kubectl get sa -n spark-apps</li>
                    <li>• Pod 상태 확인: kubectl get pods -n spark-apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App