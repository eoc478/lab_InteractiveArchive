import './Magnets.css';

function Magnets({ image, position }) {
  return (
    <div className="magnetContainer" style={{
        top: `${position.top}%`,
        left: `${position.left}%`
      }}
    >
      <img src={image.url} alt={image.alt} width="150px" className="magnetImg" />
    </div>
  );
}

export default Magnets;