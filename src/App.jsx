import { Routes, Route } from 'react-router'
import Container from './Components/Container'
import PokemonDetails from './Components/Pokedex/PokemonDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App
