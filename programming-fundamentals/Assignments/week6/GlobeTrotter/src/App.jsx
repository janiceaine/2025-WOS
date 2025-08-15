import TrotterApp from "./components/trotterApp"

function App() {
  return (
    <div>
      <div className="bg-body-tertiary">
        <h1 className="container p-2">Searchable Countries</h1>
      </div>

      <div className="container">
       <TrotterApp />
      </div>
    </div>
  )
}
export default App