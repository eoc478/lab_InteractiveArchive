import { useState } from 'react'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import './App.css'
import Fridge from './components/fridge/Fridge'
import Magnets from './components/magnets/magnets'
import Canvas from './components/canvas/Canvas.jsx'
import imageData from './data/magnets.json'

function App() {
  const [magnets, setMagnets] = useState(() => 
    imageData.map(magnet => ({
      ...magnet, 
      position: {
        top: Math.random() * 90,
        left: Math.random() * 90
      }
    }))
  );

  const [zoom, setZoomed] = useState(false) //zoom in on fridge
  const fridgeClick = () => {
    setZoomed(!zoom); // toggle zoom
  };

  const [activeId, setActiveId] = useState(); //had to use like 5 tutorials, dnd documentation, and AI to figure this out
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 }); 

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragMove = (event) => {
    setDragDelta(event.delta);
  };

  const handleDragEnd = (event) => { //had to use AI
    const { active, delta } = event;
    
    setMagnets(prevMagnets => 
      prevMagnets.map(magnet => {
        if (magnet.id === active.id) {
          const magnetArea = document.querySelector('.magnetArea');
          const rect = magnetArea.getBoundingClientRect();
          
          const deltaTopPercent = (delta.y / rect.height) * 100;
          const deltaLeftPercent = (delta.x / rect.width) * 100;
          
          return {
            ...magnet,
            position: {
              top: Math.max(0, Math.min(90, magnet.position.top + deltaTopPercent)),
              left: Math.max(0, Math.min(90, magnet.position.left + deltaLeftPercent))
            }
          };
        }
        return magnet;
      })
    );

    setActiveId(null);
    setDragDelta({ x: 0, y: 0 });
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
      <div className={`mainContainer ${zoom ? 'zoom' : ''}`}>

        <Fridge onClick={fridgeClick}>
          <div className="magnetArea">

            <div className="magnets">
              {magnets.map((img) => (
                <Magnets 
                    key={img.id}
                    image={img}
                    position={img.position}
                    isDragging={activeId === img.id}
                    dragDelta={activeId === img.id ? dragDelta : { x: 0, y: 0 }}
                />
              ))}
            </div>

          </div>

        </Fridge>

      </div>
    </DndContext>

  )
  
}

export default App