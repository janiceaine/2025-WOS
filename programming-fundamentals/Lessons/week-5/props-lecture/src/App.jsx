import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
      <ProfileCard 
        title = "Catly"
        description = "A cat profile card"
        imageUrl = "https://placecats.com/300/300"
        age = {6} 
        />

      <ProfileCard 
        title = "Kati"
        description = "A cat profile card"
        imageUrl = "https://placecats.com/400/300"
        age = {10}
        />
    </>
  )
}

export default App
