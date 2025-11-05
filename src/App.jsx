import { useState } from 'react'
import './App.css'
import Fridge from './components/fridge/Fridge'
import Magnets from './components/magnets/magnets'
import imageData from './data/magnets.json'

function App() {
  const fridgeImg = './assets/fridge.png'
  const [magnets] = useState(imageData);

  return (
      <div className="mainContainer">
          <Fridge>

          </Fridge>
        <div className="magnets">
          {magnets.map((img, i) => (
            <Magnets 
              key={img.id}
              image={img}
            />
          ))}
        </div>
      </div>
  )
}

export default App
