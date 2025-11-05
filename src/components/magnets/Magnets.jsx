import { useDraggable } from '@dnd-kit/core';
import './Magnets.css';

function Magnets({ image, position, isDragging, dragDelta }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: image.id,
  });

  // Calculate current visual position during drag, had to use AI for calculating part
  const magnetArea = document.querySelector('.magnetArea');
  const rect = magnetArea?.getBoundingClientRect();
  
  let currentTop = position.top;
  let currentLeft = position.left;
  
  if (isDragging && rect) {
    const deltaTopPercent = (dragDelta.y / rect.height) * 100;
    const deltaLeftPercent = (dragDelta.x / rect.width) * 100;
    
    currentTop = position.top + deltaTopPercent;
    currentLeft = position.left + deltaLeftPercent;
  }

  const style = {
    top: `${currentTop}%`,
    left: `${currentLeft}%`,
    cursor: isDragging ? 'grabbing' : 'grab',
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1000 : 1
  };

  return (
    <div 
      ref={setNodeRef}
      className="magnetContainer" 
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src={image.url} alt={image.alt} width="150px" className="magnetImg" />
    </div>
  );
}

export default Magnets;