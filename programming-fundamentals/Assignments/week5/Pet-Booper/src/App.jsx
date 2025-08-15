import PetCards from "./components/PetCards";

function App() {
  return (
    <div>
      <PetCards
        image="./kappa.jpg"
        name="Kappa"
        type="Grey-Cat"
        description="Kappa is a fluffy grey menace fueled by catnip, fish, and an unhealthy obsession with boops. Boop his nose once, and he’ll claim your lap, your snacks, and probably your soul.."
        initialBoops={3}
      />
    </div>
  )
}

export default App;