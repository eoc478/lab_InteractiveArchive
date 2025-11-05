import { useState } from 'react'
import './App.css'
import Fridge from './components/fridge/Fridge'
import Magnets from './components/magnets/magnets'
import imageData from './data/magnets.json'

function App() {
  const [magnets] = useState(() => 
    imageData.map(magnet => ({
      ...magnet, 
      position: {
        top: Math.random() * 90,
        left: Math.random() * 90
      }
    }))
  );

  return (
      <div className="mainContainer">
          <Fridge>
            <div className="magnetArea">
              <div className="magnets">
                {magnets.map((img) => (
                  <Magnets 
                    key={img.id}
                    image={img}
                    position={img.position}
                  />
                ))}
              </div>
            </div>

          </Fridge>
      </div>
  )
}

export default App