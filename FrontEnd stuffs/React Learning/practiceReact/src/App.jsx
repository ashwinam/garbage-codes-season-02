import Background from "./components/Background"
import Foreground from "./components/Foreground"

function App() {
  document.title = "Docs"
  return (
    <div className="relative w-full h-screen bg-zinc-900">
      <Background />
      <Foreground />
    </div>
  )
}

export default App